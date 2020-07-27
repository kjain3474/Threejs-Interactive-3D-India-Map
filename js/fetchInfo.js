var jsonData;
d3.json("data/two.json", function (json) {
		jsonData = json;
 });

function setCamPoint(camPoint)
{
		try{
		var textArea = document.getElementById('text');
		textArea.innerHTML = toString(camPoint)
		
		var inputx = document.getElementById('x');
		inputx.value = camPoint.x;
		
		var inputy = document.getElementById('y');
		inputy.value = 10;
		
		var inputz = document.getElementById('z');
		inputz.value = camPoint.z;
		}catch(err)
		{
			
		}
}

function toString(v) { return "\"x\":" + v.x + ",\n\"y\":" + 10+ ",\n\"z\":" + v.z + ","; }

function copy(ref){
  ref.select();
  document.execCommand("copy");
}
	
function copyText(ref){
  ref.select();
  document.execCommand("copy");
}
	