// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// What does toggle mean? Instead of add and remove, toggle means add the class name (the parameter, which in this case is named 'responsive') if it does not currently exist, and remove the 




// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;



document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;




const d = new Date();
let day = d.getDay() 
if (day===1||day===2){
	document.getElementById("montue").classList.remove("removebanner");

}

		var temp= 57;
		var wSpeed= 15;
		var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
		
		var windChill= Math.round(windChill);
		document.getElementById("windChill").innerHTML= windChill;
        