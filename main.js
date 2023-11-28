document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".myCard");
    const button = document.querySelector(".button");
    const button1 = document.querySelector(".button1");

  
    button.addEventListener("click", function() {
      card.classList.add("active");
    });
  
    button1.addEventListener("click", function() {
      card.classList.remove("active");
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".myCard2");
    const button2 = document.querySelector(".button2");
    const button3 = document.querySelector(".button3");

  
    button2.addEventListener("click", function() {
      card.classList.add("active");
    });
  
    button3.addEventListener("click", function() {
      card.classList.remove("active");
    });
  });
  
  