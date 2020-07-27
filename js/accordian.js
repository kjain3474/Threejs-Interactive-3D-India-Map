var app = angular.module('app', [])

app.controller('ctrl',
  function($scope, $http) {
	  
	$scope.tourList = jsonData;

	$scope.expand = function ($event, outerIndex) {
		
		//open accordian panel
		handlePanelClick($event.target.parentNode);
		
		//remove Existing planes
		removePreviousPlanes();
		
		//fill new planes with values
		if(outerIndex == -1){
		 showAll();
		}
		else{
		fillnewPlanes($scope.tourList[outerIndex].Itineraries, $scope.tourList[outerIndex].category);
		}
    };
	
	$scope.panToImage = function($event, innerIndex, outerIndex){
		//open accordian panel body
		handleContentClick($event.target);
		
		//move to subcategory under the category
		var iten = $scope.tourList[outerIndex].Itineraries[innerIndex];
		
		//from scene by searching identifier property
		var object = getObjectAtPosition(iten);
		
		//remove trackball control
		removeControl();
		
		//fluto the image
		flyTo(iten.x, iten.y, iten.z, object.position, object);
	}
  }
);
