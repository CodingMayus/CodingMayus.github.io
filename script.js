/* window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false); */

const txts = [{
  text: "I am an International Baccalaureate Student",
  color: "red"
},
{
  text: "I am a coder",
  color: "green"
},
{
  text: "I am a Mathematician",
  color: "#0fa"
},
{
  text: "I am a runner",
  color: "purple"
},
{
  text: "I am competitive",
  color: "yellow"
},
{
  text: "I am working towards my dreams!",
  color: "orange"
}
];
$(document).ready(async function() {
carousel(txts, "#feature-text")
});




var oof = 100;
async function typeSentence(sentence, eleRef) {
//  alert("arrived");
const letters = sentence.split("");
let i = 0;
//alert(letters);
// alert(i);
while (i < letters.length) {
  // alert(i);)
  await $(eleRef).append(letters[i]);
await waitForMs(100);
  i++;
}
return;
}

async function deleteSentence(eleRef) {
const sentence = $(eleRef).html();
//returns the html if used as an retrun statemnet like that, otherwise it can overwrite the innerHTMl of all the referrenced elelmetns
const letters = sentence.split("");
let i = 0;
while (letters.length > 0) {
 await waitForMs(100);
  letters.pop();
  $(eleRef).html(letters.join(""));
}
}
async function carousel(txts, eleRef) {
var i = 0;
while (true) {
  updateFontColor(eleRef, txts[i].color)
  await typeSentence(txts[i].text, eleRef);
  await waitForMs(1500);
  await deleteSentence(eleRef);
  await waitForMs(500);
  i++
  if (i >= txts.length) {
    i = 0;
  }
}
}

function updateFontColor(eleRef, color) {
$(eleRef).css('color', color);
$(eleRef).css('text-shadow'," 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,0 0 42px "+ color+",0 0 82px "+color+",0 0 92px "+ color+",0 0 102px "+color+",0 0 151px "+color);
//console.log(" 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,0 0 42px "+ color+",0 0 82px "+color+",0 0 92px "+ color+",0 0 102px "+color+",0 0 151px "+color);
}

function waitForMs(ms) {
return new Promise(resolve => setTimeout(resolve, ms));

}

/*contact */

//the async and await pattern allows my code to execute line by line so that inside the while loop "wait forms" will execute for 0.1 second and then the character will be appended to HTML


/*discord*/
