var text = document.getElementById('nameInputBox').value = " ";
function addscripture(){
    var list = text + " ";

document.getElementById('outputDiv').innerHTML = addscripture;
}
/*var text = document.getElementById('nameInputBox').value = " ";
function addscripture(){
    var list = text + " ";
    var book = favchap.value;
    console.log(book);
 
document.getElementById('outputDiv').innerHTML = addscripture;
}
*/
function addscripture() {
    book = favchap.value;
    var entry = document.createElement("li");
    entry.innerHTML = book + '<button type="button" class = "deletebutton" onclick="erase(this.parentNode)">\u2715</button>';
    list.appendChild(entry);
    favchap.value = "";
  }
  
  function erase(entry) {
    entry.remove();
  }
  