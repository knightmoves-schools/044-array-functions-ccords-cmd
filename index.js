var automobiles = ["car", "truck", "motorcycle"];
automobiles.push("airplane", "skateboard");
automobiles.unshift("helicopter", "bike");
var automobilesCopy = "bike,helicopter,car,truck,motorcycle,airplane,skateboard";
automobiles.pop();
automobiles.shift();

document.getElementById('result').innerHTML = automobiles;

