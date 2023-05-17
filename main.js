song1="";
song2="";
rwx = 0;
rwy = 0;
lwx = 0;
lwy = 0;
srw = 0;
slw = 0;

function preload()
{
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3")
}

function setup() {
canvas =  createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('model Is loaded');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
srw =  results[0].pose.keypoints[10].score;
slw =  results[0].pose.keypoints[9].score;
console.log("scoreRightWrist = " + srw + " scoreLeftWrist = " + slw);

  }
}

function draw() {
image(video, 0, 0, 600, 500);
fill("#FF0000");
stroke("#FF0000");
if(rwy >0 && rwy <= 100)
{
document.getElementById("speed").innerHTML = "Speed = 0.5x";
song1.rate(0.5);
song2.rate(0.5);
}
else if(rwy >100 && rwy <= 200)
{
document.getElementById("speed").innerHTML = "Speed = 1x";
song1.rate(1);
song2.rate(1);
}
else if(rwy >200 && rwy <= 300)
{
document.getElementById("speed").innerHTML = "Speed = 1.5x";
song1.rate(1.5);
song2.rate(1.5);
}
else if(rwy >300 && rwy <= 400)
{
document.getElementById("speed").innerHTML = "Speed = 2x";
song1.rate(2);
song2.rate(2);
}
else if(rwy >400)
{
document.getElementById("speed").innerHTML = "Speed = 2.5x";
song1.rate(2.5);
song2.rate(2.5);
}

if(srw > 0.2)
{
circle(lwx,lwy,20);
}
if(slw > 0.2)
{
circle(lwx,lwy,20);
no_lwy=Number(lwy);
reeee_deeee=floor(no_lwy);
mass=reeee_deeee/550;
document.getElementById("speaker").innerHTML="volume="+mass;
song1.setVolume(mass);
song2.setVolume(mass);
}
}
function play()
{
song1.play();
song1.setVolume(1);
song1.rate(1);
}
 
function plays()
{
song2.play();
song2.setVolume(1);
song2.rate(1);
}
