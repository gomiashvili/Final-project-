var menuLinks = document.getElementsByClassName("sidenav");
for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function (event) {
    closeNav();
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.marginRight = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.marginLeft = "0";
}
