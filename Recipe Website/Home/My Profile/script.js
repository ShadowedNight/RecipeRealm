// JavaScript for toggling the sidenav
function toggleNav() {
    var sidenav = document.getElementById("sidenav");
    var toggleBtn = document.getElementById("toggle-btn");
    if (sidenav.classList.contains("sidenav-opened")) {
        sidenav.classList.remove("sidenav-opened");
    } else {
        sidenav.classList.add("sidenav-opened");
    }
}