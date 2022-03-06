var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textBox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML=content;
    console.log(content);

    speak();
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textBox").value;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");