let navlinks = document.getElementById("navbar");
let links = navlinks.getElementsByClassName("link");

let ul = document.querySelector("ul");
let li = ul.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active")[0].id;
    current = current.replace("active", "");
    this.className += " active";
  });
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
