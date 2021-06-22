

// // changing individual properties with code and using setInterval
var rotationSpeed = -0.10;
var ascentionSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x += rotationSpeed;
myOtherBox.object3D.rotation.y += rotationSpeed;
myOtherBox.object3D.rotation.z += rotationSpeed;
myOtherBox.object3D.position.y += ascentionSpeed;
console.log(myOtherBox.object3D.rotation.x);
console.log(myOtherBox.object3D.rotation.y);
console.log(myOtherBox.object3D.rotation.z);
console.log(myOtherBox.object3D.position.y);
}



setInterval(spin, 16); //equivalent to 60 fps