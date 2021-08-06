nose_x = 0;
nose_y = 0;
function preload()
{
clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
//function preload ends
function setup()
{
Canvas = createCanvas(300 , 300);
Canvas.center();
video = createCapture(VIDEO);
video.size(300 , 300);
video.hide();
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}
//function setup ends
function draw()
{
image(video , 0 , 0 ,300 , 300);
image(clown_nose , nose_x , nose_y , 30 , 30);
}
//function draw ends
function Snap()
{
save('MyClownNose.png');
}
//function snap ends
function modelLoaded()
{
console.log('PoseNet is Intialized');
}
//function modelLoaded ends
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
nose_x = results[0].pose.nose.x - 20;
nose_y = results[0].pose.nose.y - 20;
console.log("Nose x = " + nose_x);
console.log("Nose y = " + nose_y);
}
}