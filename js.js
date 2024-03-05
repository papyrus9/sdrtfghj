Webcam.set({
    width:300,
    height:300,
    image_format:"jpg",jpg_quality:90
})
camera=document.getElementById("a2");
Webcam.attach(camera);
function a5() { Webcam.snap(function(data_uri)     
    {
     document.getElementById("a4").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }); }