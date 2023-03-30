
fruits=""
async function get_fruit(){
  const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
  let response = await fetch(url);
  fruits = await response.json();

  for (fruit of fruits ){
    var sel1 = document.createElement("option");
    sel1.innerHTML = fruit.name;
    sel1.value  = fruit.name;
    fruitname1.appendChild(sel1);

    var sel2 = document.createElement("option");
    sel2.innerHTML = fruit.name;
    sel2.value  = fruit.name;
    fruitname2.appendChild(sel2);


    var sel3 = document.createElement("option");
    sel3.innerHTML = fruit.name;
    sel3.value  = fruit.name;
    fruitname3.appendChild(sel3);

    
 
  }

}
get_fruit()
function updatediv(){
      outputdiv.innerText=""
      outputdiv.innerText += fname.value + " " + lname.value + "\n";

      selectors=document.getElementsByClassName("frooty")
      for (selector of selectors){

      for (fruit of fruits){
        if (selector.value == fruit.name){
            var info = fruit.nutritions
            outputdiv.innerText += fruit.name  + ": " + "\n" + JSON.stringify(info) + "\n" + "\n";
        }
      }
    }
    outputdiv.innerText += "Special instructions" + ": " + "\n" + instructions.value;
  }
  //   var sel1 =  info;
  //   var info = fruit.nutritions
  //   document.getElementById("outputdiv").innerHTML = fruitname1;
  // }

  // var outputdiv = document.createElement("div");
  // sel1.innerHTML === fruit.value;
  //    var sel1 =  info;
  //    var info = fruit.nutritions
  //    outputdiv = info
  // fruitnamediv.appendChild(outputdiv);

//   url.forEach((fruit) => {


//   let p = document.createElement('p');
//   p.textContent = `${fruit.name}`;
//   card.appendChild(p);
//   }
// )