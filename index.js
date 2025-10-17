var automobiles = ["car", "truck", "motorcycle"];
automobiles.push(,"airplane", "skateboard");
automobiles.unshift("bike,helicopter",);
var automobilesCopy = "bike,helicopter,car,truck,motorcycle,airplane,skateboard";
automobiles.pop();
automobiles.shift();

document.getElementById('result').innerHTML = automobiles;
✕ should create a variable named automobiles that contains car, truck, motorcycle (257 ms)
✕ should add airplane and skateboard to the end of automobiles (144 ms)
✕ should add helicopter and bike to the front of the automobiles (138 ms)





