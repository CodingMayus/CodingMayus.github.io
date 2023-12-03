/* window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false); */

const  txts=
[{text:"an International Baccalaureate Student", color :"#8B0000"},
{text: "a coder",color: "green"},
{text:"a Mathematician",color: "blue"},
{text:"a runner",color:"purple"},
{text:"Competitive",color:"yellow"},
{text:"working towards my dreams!",color:"orange"}
];
window.onload= carousel(txts,"#feature-text");





async function typeSentence(sentence, eleRef, delay = 100){
//  alert("arrived");
const letters = sentence.split("");
let i=0;
//alert("getting ready");
while(i<letters.length){
//alert("goooo");
// alert(i);)
await waitForMs(delay);
$(eleRef).append(letters[i]);
i++;
}
return;
}

async function deleteSentence(eleRef){
const sentence = $(eleRef).html();
//returns the html if used as an retrun statemnet like that, otherwise it can overwrite the innerHTMl of all the referrenced elelmetns
const letters = sentence.split("");
let i=0;
while(letters.length>0){
await waitForMs(100);
letters.pop();
$(eleRef).html(letters.join(""));
}
}
async function carousel(txts, eleRef) {
   var i = 0;
   while(true) {
     updateFontColor(eleRef, txts[i].color)
     await typeSentence(txts[i].text, eleRef);
     await waitForMs(1500);
     await deleteSentence(eleRef);
     await waitForMs(500);
     i++
     if(i >= txts.length) {i = 0;}
   }
}

function updateFontColor(eleRef, color) {
 $(eleRef).css('color', color);
}
function waitForMs(ms){
  console.log("Waited "+ms+" seconds");
return new Promise(resolve => setTimeout(resolve, ms ));

}

//the async and await pattern allows my code to execute line by line so that inside the while loop "wait forms" will execute for 0.1 second and then the character will be appended to HTML
