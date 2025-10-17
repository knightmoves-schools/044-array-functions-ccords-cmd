var automobiles = ["car","truck","motorcycle"];
automobiles.push("airplane", "skateboard");
automobiles.unshift("bike,helicopter",);
var automobilesCopy = "bike,helicopter,car,truck,motorcycle,airplane,skateboard";
automobiles.pop(0);
automobiles.shift();

document.getElementById('result').innerHTML = automobiles;





