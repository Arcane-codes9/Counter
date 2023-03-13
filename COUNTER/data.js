let counterElement = document.getElementById("count");

function increment() {
  let previouscount = counterElement.textContent;
  let updatedcount = parseInt(previouscount) + 1;
  if (updatedcount > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedcount < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedcount;
}

function decrement() {
  let previouscount = counterElement.textContent;
  let updatedcount = parseInt(previouscount) - 1;
  if (updatedcount > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedcount < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedcount;
}

function reset() {
  let count = 0;
  counterElement.textContent = count;
  counterElement.style.color = "black";
}