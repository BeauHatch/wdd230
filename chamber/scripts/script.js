// // Store the selected elements that we are going to use. 
// const mainnav = document.querySelector('.navigation')
// const hambutton = document.querySelector('#menu');

// // Add a simple arrow function that listens for the <li> hamburger button click event.
// // When clicked, the <ul class="navigation">'s class list toggle'
// hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// // What does toggle mean? Instead of add and remove, toggle means add the class name (the parameter, which in this case is named 'responsive') if it does not currently exist, and remove the 




// // select the elements to manipulate (output to)
// const datefield = document.querySelector(".date");

// // derive the current date using a date object
// const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
// 	now
// );

// // long, medium, short options ... try them

// datefield.innerHTML = `<em>${fulldate}</em>`;



// document.querySelector(
// 	"#lastModified"
// ).textContent = `Last Modification: ${document.lastModified}`;



// // banner
// const d = new Date();
// let day = d.getDay() 
// if (day===1||day===2){
// 	document.getElementById("montue").classList.remove("removebanner");

// }

// 		var temp= 57;
// 		var wSpeed= 15;
// 		var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
		
// 		var windChill= Math.round(windChill);
// 		document.getElementById("windChill").innerHTML= windChill;
        
// IntersectionObserver
		let imagesToLoad = document.querySelectorAll("img");

		function loadImages(img){
		  const src = img.getAttribute("data-src");
		  if(!src){
			  return;
		  }
		  img.src = src
		  img.classList.remove("blur")
		}
	  
		let imgOptions = {
			   threshold: 1,
			   rootMargin: " 0px 0px 50px 0px"
		}
		const observer = new IntersectionObserver((items, observer)=>{
	  
		  items.forEach((item) => {
		  if (!item.isIntersecting) {
			  return;
		  }else{
				  loadImages(item.target);
				  observer.unobserve(item.target);
			  }
		  })
		},imgOptions);
	  
		imagesToLoad.forEach(loadImages=> {
		  observer.observe(loadImages);
		});
	  

		const thing = document.querySelector("id= visit");

		let today = new Date();
		
		let lastlogin = window.localStorage.getItem("local");
		
		localStorage.setItem("local", Date.now());
		
		let days = (lastlogin - Date.now()) / 84600000;
		
		thing.innerHTML = Math.ceil(days)*-1;

		
		 //new Date(today.getFullYear(), 1, 14);

		// const thing = document.querySelector("#visit");

		// let today = new Date();
		
		// let lastlogin = new Date(window.localStorage.getItem("local"));
		
		// localStorage.setItem("local", lastlogin);
		
		// let days = (lastlogin.getTime() - Date.now()) / 84600000;
		
		// thing.innerHTML = Math.ceil(days)*-1;
		

// const thing = document.querySelector("#visit");

// let today = new Date();

// let lastlogin = new Date(today.getFullYear(), 1, 14);

// let days = (lastlogin.getTime() - Date.now()) / 84600000;
// console.log(lastlogin)
// console.log(Date.now())
// console.log(days)

// thing.innerHTML = Math.floor(days)*-1;
