
//using the 'lodash' package
var _ = require('lodash');

var ar = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(ar,3));
//finish using the lodash packgae.  In order to actually use it you must
//execute 'browserify script.js > bundle.js' in shell and also be sure
//to change any script.js reference in html to bundle.js since all the
//js files are now bundled in the 'bundle.js' file.  remember, browserify
//is a more advance (but older) method to use javascript in files.  Used 
//to be inline tags or multiple js files referenced via the <link> tag.
//then is wa iife, next browseify and finally 'webapck'

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
/*var body = document.querySelector("body")  you could also use this*/

// console.log(css);
// console.log(color1);
// console.log(color2);
//console.log(body);
//body.style.background = "red";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";"
}



color1.addEventListener("input",  setGradient);
color2.addEventListener("input",  setGradient);