//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var showMenu = document.getElementsByClassName("name");

console.log(showMenu);

for (var i=0; i<showMenu.length; i++){
  console.log(showMenu[i]);
  showMenu[i].addEventListener("click", secretMenu);
}

function secretMenu(){
  var toggle = this.querySelectorAll(".menu")[0];
  if (toggle.style.display === "none"){
    toggle.style.display = "block";
  }else{
    toggle.style.display = "none";
  }
}