var socket=io.connect("http://localhost:4000");

var output=document.getElementById("output");
var handle=document.getElementById("handle");
var message=document.getElementById("message");
var send=document.getElementById("send");
var feedback=document.getElementById("feedback");


send.addEventListener("click",function(event){
  socket.emit("chat",{
    message:message.value,
    handle:handle.value
  });
  message.value="";
});

message.addEventListener("keypress",function(){
socket.emit("typing",handle.value);
});


//listen for events
socket.on("chat",function(data){
  feedback.innerHTML="";
  output.innerHTML+="<p><strong>"+data.handle +":<strong>"+data.message+"</p>"
})

socket.on("typing",function(data){
  feedback.innerHTML="<p><em>"+data+" is typing...</em><p>"
})
socket.on("typing",function(data){
  feedback.innerHTML="<p><em>"+data+ " is typing...</em><p>"
});
