function preload()
{

}

function setup()
{
    canvas = createCanvas(350,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(350,400);
    video.hide();

    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose' , gotposes);
}

function modelloaded()
{
    console.log("posenet is loaded");
}

function draw()
{
   image(video,0,0,350,400);
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nosex = " + results[0].pose.nose.x);
        console.log("nosey = " + results[0].pose.nose.y);
    }
}

function filte()
{
    save("mustache.png");
}