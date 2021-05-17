/* --- GET --- */

					/* Getting string from DOM element with ID */

function stringFromId(id){
	return document.getElementById(id).innerHTML
}

					/* Getting int from DOM element with ID */

function intFromId(id){
	return parseInt(document.getElementById(id).innerHTML)
}

					/* Getting float from DOM element with ID */

function floatFromId(id){
	return parseFloat(document.getElementById(id).innerHTML)
}

					/* Getting string from text input with ID */

function stringFromInput(id){
	return document.getElementById(id).value
}

					/* Getting int from text input with ID */

function intFromInput(id){
	return parseInt(document.getElementById(id).value)
}

					/* Getting float from text input with ID */

function floatFromInput(id){
	return parseFloat(document.getElementById(id).value)
}				

					/* Getting string from DOM element with CLASS */

function stringFromClass(className, classNum){
	return document.getElementsByClassName(className)[classNum].innerHTML
}

					/* Getting int from DOM element with CLASS */

function intFromClass(className, classNum){
	return parseInt(document.getElementsByClassName(className)[classNum].innerHTML)
}

					/* Getting float from DOM element with CLASS */

function floatFromClass(className, classNum){
	return parseFloat(document.getElementsByClassName(className)[classNum].innerHTML)
}

					/* Getting string from TAG child  */

function stringFromTag(tagName, childNum){
	return document.getElementsByTagName(tagName)[childNum].innerHTML
}

					/* Getting int from TAG child */

function intFromTag(tagName, childNum){
	return parseInt(document.getElementsByTagName(tagName)[childNum].innerHTML)
}

					/* Getting float from TAG child */

function floatFromTag(tagName, childNum){
	return parseFloat(document.getElementsByTagName(tagName)[childNum].innerHTML)
}

					/* Getting style from DOM element with ID */

function styleFromId(id, childNum){
	return document.getElementById(id).style.param
}

					/* Getting style from DOM element with CLASS */

function styleFromClass(className, classNum, param){
	return document.getElementsByClassName(className)[classNum].style.param
}

/* --- SET ---  */

					/* Setting text to DOM element with ID */

function stringToId(id, text){
	document.getElementById(id).innerHTML = text
}

					/* Setting text value to DOM element with Class */

function stringToClass(className, classNum, text){
	document.getElementsByClassName(className)[classNum].innerHTML = text
}

					/* Setting text value to all DOM elements with same Class */
					
function stringToAllClasses(className, text){
	var all = document.getElementsByClassName(className)
	for (var i = 0; i < all.length; i++) {
		all[i].innerHTML = text
	}
}

					/* Setting text value to text input */

function stringToInputId(id, text){
	document.getElementById(id).value = text
}

					/* Setting text value to TAG */

function stringToTag(tagName, tagNum, text){
	document.getElementsByTagName(tagName)[tagNum].innerHTML = text
}

					/* Setting text value to all DOM elements with same TAG */

function stringToTag(tagName, text){
	var all = document.getElementsByTagName(tagName)
	for (var i = 0; i < all.length; i++) {
		all[i].innerHTML = text
	}
}

					/* Setting style to DOM element with ID //////////////// */

function styleToId(id, parameter, value) {
	document.getElementById(id).style.cssText += `${parameter}: ${value}`
} 

					/* Setting style to DOM element with Class */

function styleToClass(className, classNum, parameter, value){
	document.getElementsByClassName(className)[classNum].style.cssText += `${parameter}: ${value}`
}

					/* Setting style to all DOM elements with same Class */

function styleToAllClasses(className, parameter, value){
	var all = document.getElementsByClassName(className)
	for (var i = 0; i < all.length; i++) {
	all[i].style.cssText += `${parameter}: ${value}`
	}
}

					/* Setting style to one DOM element with TAG */

function styleToTag(tagName, tagNum, parameter, value){
	document.getElementsByTagName(tagName)[tagNum].style.cssText += `${parameter}: ${value}`
}

					/* Setting style to all DOM elements with same TAG */

function styleToAllTags(tagName, parameter, value){
	var all = document.getElementsByTagName(tagName)
	for (var i = 0; i < all.length; i++) {
	all[i].style.cssText += `${parameter}: ${value}`
	}
}




