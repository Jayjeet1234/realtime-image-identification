function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(500,200);
  video = createCapture(VIDEO);
  video.hide();
x=ml5.imageClassifier('MobileNet',modelloaded);
}
function modelloaded() {
console.log('MobileNet is loaded');
}
function draw() {
image(video,0,0,300,300);
x.classify(video,gotresult);
}
function gotresult(error,results) {
if(error){console.log(error);}
else{console.log(results);
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_object_accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
}
}
