// set all elements to be used in this application
const taskBtn = document.getElementsByClassName("btn");
const ulEl = document.getElementById("ul-el");
const sendBtn = document.getElementById("send-btn");
const totalPriceEl = document.getElementById("total-price");
const taskList = {
  wash: {
    title: "Wash Car",
    price: 10,
  },
  mow: {
    title: "Mow Lawn",
    price: 20,
  },

  weed: {
    title: "Pull Weeds",
    price: 30,
  },
};

//user transformative information
let userList = [];
let totalPrice = 0;

// render
function render(arr) {
  totalPrice = 0;
  let renderEl = "";
  for (let i = 0; i < arr.length; i++) {
    renderEl += `          
    <li aria-label=${i} class="row center space-between">
        <div class="row">
          <p class="task text-white">${arr[i].title}</p>
          <button class="remove-btn">Remove</button>
        </div>
        <p class="price text-white"><span class="text-accent-1">$</span>${arr[i].price}</p>
    </li>`;
    totalPrice += arr[i].price;
  }
  totalPriceEl.textContent = `$${totalPrice}`;
  ulEl.innerHTML = renderEl;
  // call all remove btns on screen after render is complete
  const removeBtn = document.getElementsByClassName("remove-btn");

  // have all class remove-btns have the event listener of the new function
  // function targets array attribute and deletes array slot
  // rerender after removed
  for (var i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", function (e) {
      const listEl = e.target.parentElement.parentElement;
      const attribute = listEl.getAttribute("aria-label");
      userList.splice(attribute, 1);
      render(arr);
    });
  }
}

// add task to list
function addTask() {
  const attribute = this.getAttribute("aria-label");
  userList.push(taskList[`${attribute}`]);
  render(userList);
}

for (var i = 0; i < taskBtn.length; i++) {
  taskBtn[i].addEventListener("click", addTask);
}

//send invoice or reset invoice
sendBtn.addEventListener("click", function () {
  userList = [];
  render(userList);
});
