// Custom Function Start Here
let icon = document.querySelector('#moon');

icon.onclick = function () {
    document.body.classList.toggle('dark_theme');
    if (document.body.classList.contains('dark_theme')) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}
// Custom Function End Here


