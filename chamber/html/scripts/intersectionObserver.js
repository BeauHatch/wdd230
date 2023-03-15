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