let navlinks = document.getElementById("navbar");
let links = navlinks.getElementsByClassName("link");

let list = document.getElementsById("ul");
let listelement = list.getElementsByClassName("li");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

for (let i = 0; i < listelement.length; i++) {
  listelement[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
