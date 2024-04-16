// Menü nyitás csukás
const menu = document.getElementById("menu_m");
const cl = document.getElementById('close');
let clickCount = 0;
cl.addEventListener("click", menuOpening);
function menuOpening(){
    
    if (clickCount % 2 === 0) {
        // első kattintás
        menu.style.transform = "translateX(0%)";
    } else {
        // második kattintás
        menu.style.transform = "translateX(-100%)";
    }
    clickCount++;
}