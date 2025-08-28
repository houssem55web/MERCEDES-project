 const buttonelement = document.querySelector("#btnsubmit");
const messagefield = document.querySelector("#message");

const btnbackgroundcolor = buttonelement.style.backgroundColor;

let message = "";
let position = "";

messagefield.addEventListener("input", (event) => {
  message = event.target.value; // update message
  if (message.length > 10) {
    position = 0;
    buttonelement.style.transform = 'translateX(0)';
    buttonelement.style.backgroundColor = "darkgreen";
  } else {
    buttonelement.style.backgroundColor = btnbackgroundcolor;
  }
});

buttonelement.addEventListener("click", function(event) {
  event.preventDefault();
});

buttonelement.addEventListener("mouseover", function() {
  if (message.length > 10) {
    return;
  }

  if (position === 0) {
    position = 120;
  } else {
    position = 0;
  }
  buttonelement.style.transform = `translate(${position}px, 0px)`;
});
