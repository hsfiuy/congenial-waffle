var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
     var Content = event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML = Content; 
     console.log(Content);
     if(Content == "Take my selfie.")
    {
    console.log("taking selfie ---");
    speak();
    }
    
document.getElementById("textbox").innerHTML=Content;
}

function speak(){
	var synth = window.speechSynthesis;

	speak_data = "taoke my selfie in 5 secondees";
    
	var utterThis = new SpeechSynthesisUtterance(speak_data);
	synth.speak(utterThis);
	Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    width:360,
    height:250,
    imageformat:'png',
    png_quality:90
});

camera = document.getElementById("camera");

function take_snapshot(){
    webcam.snap(function(data_urI){
    document.getElementById("result").innerHIML = '<img id="selfie.img" src="' + data_urI + '">';
    });
}












































function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click;

}