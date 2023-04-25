function foreverLoop(delay) {
    setInterval(() => {
        document.querySelector(".pflanze-img").style.transform = "scale(" + 1 * Math.random() + ")";
    }, delay);
}
  
//foreverLoop(1000);