window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
 var txts=["I am an International Baccalaureate Student", "I am to code","I am a Mathematician"," I am a runner","I am competitive"," I am working towards my dreams!"];
 
 document.getElementById("clicky").addEventListener("Click", typeWriter);
function typeWriter() {
var speed = 100;
var cnt =0;
/* for(cnt =0;cnt<6;cnt++){ */
//document.getElementById("attributes").innerHTML = "";
var i =0;
  if (i < txts[1].length) {
    document.getElementById("attributes").innerHTML += txts[1].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
/* if(i>=0){
   document.getElementById("attributes").innerHTML -= txts[cnt].charAt(i);
 } */
//}

} 
