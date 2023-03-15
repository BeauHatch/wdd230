// banner
const d = new Date();
let day = d.getDay() 
if (day===1||day===2){
	document.getElementById("montue").classList.add("removebanner");}
	else {
		// document.getElementById("montue").classList.remove("removebanner");
		document.getElementById("montue").remove();


	  }

