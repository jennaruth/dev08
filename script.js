$(document).ready(function () {
$('#content').hide().fadeIn(3000); 


function resetSignDataTwo(event) {
	var signData = ['greeting', 'userSign', 'tiles', 'subTotal', 'shipping', 'grandTotal'];
	
	for (var i=0; i<signData.length; i++) {
		setTextContentById(signData[i], '');
		
	}
	event.preventDefault(); 
}

var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';

var welcome;
var sign = '[not initialized]';
var tiles = '[not initialized]';
var subTotal = '[not initialized]';
var shipping = '[not initialized]';
var grandTotal = '[not initialized]';

function computeSign() {
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function initiateVars() {
  greeting = 'Hi '; 
	name = 'Jenna';
	message = ', please check your order:';
	sign = 'The Glass House';
	welcome = greeting + name + message;
	computeSign(); 
}

function setTextContentById(getId, setMsg) {

  var el = document.getElementById(getId);

  el.textContent = setMsg;
}

function setSign() {
	setTextContentById('greeting', welcome);
	setTextContentById('userSign', sign);
	setTextContentById('tiles', tiles);
	setTextContentById('subTotal', '$' + subTotal);
	setTextContentById('shipping', '$' + shipping);
	setTextContentById('grandTotal', '$' + grandTotal);
} 

initiateVars(); 
setSign(); 

// preview sign
var el = document.getElementById('previewScreen');

el.addEventListener('click', resetSignDataTwo, false);
})