function createItems(itemAmount) {
  const board = document.querySelector("#board");

  for (let items = 0; items < itemAmount * itemAmount; items++) {
    // create one element with class item
    const item = document.createElement("div");
    item.classList.add("item");
    // Set basis  to let css know what basis it is
    item.style.flexBasis = `${Math.floor(100 / itemAmount)}%`;
    // append to board
    board.appendChild(item);
  }

  // delegate event click handling on parent(board)
  // callback for when child is clicked default black
}

createItems(16);

function addBoardEvent() {
  const board = document.querySelector("#board");
  board.addEventListener(
    "mouseenter",
    (e) => {
      const target = e.target;
      console.log(target);

      if (target.classList.contains("item")) {
        paintRandomColor(target);
      }
    },
    true
  );
  function paintRandomColor(target) {
    function randomIntOneTo250() {
      return Math.floor(Math.random() * 251);
    }
    target.style.backgroundColor = `rgb(${randomIntOneTo250()},${randomIntOneTo250()},${randomIntOneTo250()})`;
  }
}
addBoardEvent();

function addSetDimensionsEvent() {
  document
    .querySelector("#board-dimensions-btn")
    .addEventListener("click", (e) => {
      let sides;
      sides = +prompt("How many squares per side?");

      if (!Number.isInteger(sides) || sides < 1 || sides > 100) {
        alert("Invalid, give an integer between 1 to 100");
      } else {
        board.innerHTML = "";
        createItems(sides);
      }
    });
}

addSetDimensionsEvent();
