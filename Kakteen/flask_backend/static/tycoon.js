function foreverLoop(delay) {
    setInterval(() => {
        document.querySelector(".hallo").innerHTML = Math.random();
    }, delay);
}
  
//foreverLoop(1000);