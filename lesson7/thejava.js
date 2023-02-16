// let imagesToLoad = document.querySelectorAll("img[data-src]");
// let imgOptions = {
//     threshold: 1,
//     rootMargin: " 0px 0px 50px 0px"
//  }

// const loadImages = (image) => {
//   image.setAttribute("src", image.getAttribute("data-src"));
//   image.onload = () => {image.removeAttribute("data-src");};
//   imagesToLoad.forEach((img) => {loadImages(img);});
// };

// if ("IntersectionObserver" in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//       items.forEach((item) => {
//         if (item.isIntersecting) {
//             return;}
//             else{
//           loadImages(item.target);
//           observer.unobserve(item.target);
//         }
//       });
//     });
//     imagesToLoad.forEach((img) => {
//          observer.observe(img);
//     });
//   } else {
//     imagesToLoad.forEach((img) => {
//                loadImages(img);
//     });
//   }





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
