const notification= document. querySelector("#not1");
const notify= document.querySelector("#not2");
const notifi= document.querySelector("#not3");
const read= document.querySelector("#read");
const favicon= document.querySelector(".favicon");
const display= document.querySelector("#display");
read.addEventListener("click",()=>{
    notification.style.backgroundcolor="white";
    notify.style.backgroundcolor="white";
    notify.style.backgroundcolor="white";
    display.textContent=0;
    favicon.style.backgroundcolor="green"
});