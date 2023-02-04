
  setInterval(function () {
    var screen2 = document.getElementById("screen2");
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    screen2.style.left = x + "px";
    screen2.style.top = y + "px";
  }, 800);

  document.getElementById("screen1").addEventListener("click", function () {
    alert("I love you too!");
  });


