window.onload = loadCookieList;
var myList = [];
var myListString;

function displayItem(input){
  var indexNum = myList.indexOf(input);
  if(indexNum==-1){
      myList.push(input);
      console.log(myList);
      var list = document.getElementById("listDisplay");
      var item = document.createElement("li");
      var btnClose = document.createElement("button");
      btnClose.addEventListener("click", removeParentListItem);
      btnClose.classList.add("btn");
      btnClose.classList.add("btn-danger");
      btnClose.classList.add("btn-xs");
      var iconClose = document.createElement("span");
      iconClose.classList.add("glyphicon");
      iconClose.classList.add("glyphicon-remove");
      btnClose.appendChild(iconClose);
      var itemName = document.createTextNode(input);
      item.appendChild(itemName);
      item.appendChild(btnClose);
      list.appendChild(item);
}
}

function loadCookieList(){
  var cookieList = getCookie("mls");
  var arrayCookie = cookieList.split(",");
  console.log(arrayCookie);
  if(!arrayCookie.length==0){
  for(var i=0; i<arrayCookie.length;i++){
    var arrayIndex = arrayCookie[i];
    console.log("index at "+ i + " = " + arrayIndex);
    displayItem(arrayIndex);
    }
  }
}

function saveList(){
  myListString = myList.toString();
  setCookie("mls", myListString, 100);
  console.log("this is the list of strings: " + myListString);
  console.log("this is the cookie: " + getCookie("mls"));
}

function clearList(){
  var listItems = document.getElementById("listDisplay");
  listItems.innerHTML = "";
  myList = [];

  console.log(myList);
}

function addItem(){
  var input = document.getElementById("newItem").value;
  displayItem(input);
  document.getElementById("newItem").value = "";
}

function removeParentListItem(){
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
  var itemRemove = mom.firstChild.textContent;
  var itemIndex = myList.indexOf(itemRemove);

  myList.splice(itemIndex, 1);

  console.log(myList);

}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
