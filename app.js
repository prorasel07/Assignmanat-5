let totalCondition = 0;
let totalCountSeat = 0;
let selectedSeat = null;

let seatAll = document.getElementById("seatAll").innerText;
let numberning = parseInt(seatAll);

function handelTicket(button) {
  numberning -= 1;
  // Update display with new value
  seatAll.innerText = numberning.toString();
 
  const seatText = button.innerText;

  if (button.classList.contains("selected")) {
    return;
  }

  if (selectedSeat !== null) {
    selectedSeat.classList.add("selected");
  }

  button.classList.add("selected");
  selectedSeat = button;

  const seatName = document.getElementById("seatName");
  const count = button.childElementCount;
  const totalCount = parseInt(count);

  const totalSeat = document.getElementById("totalSeat");
  totalSeat.innerHTML = `${totalCount + totalCountSeat}`;
  totalCountSeat += totalCount;

  // Create and append the seat information
  const li = document.createElement("li");
  li.innerHTML = `${seatText}`;
  seatName.appendChild(li);

  // Create and append the seat price
  const priceShow = document.getElementById("priceShow");
  const seatPrice = 550; // Numeric value
  const seatPriceElement = document.createElement("p");
  seatPriceElement.innerText = `${seatPrice}`;
  priceShow.appendChild(seatPriceElement);

  // Update the total price
  totalCondition += seatPrice;

  // Coupon button condition
  if (totalCountSeat >= 4) {
    let couponButton = document.getElementById("cuponButton");
    couponButton.disabled = false;
    couponButton.style.background = "#06D200";
    // Purchase button
  } else if (totalCondition > 0) {
    const purchaseButton = document.getElementById("purshesButton");
    purchaseButton.disabled = false;
    purchaseButton.style.background = "#06D200";
  } else {
    let couponButton = document.getElementById("cuponButton");
    couponButton.disabled = true;
    // Purchase button
    let purchaseButton = document.getElementById("purshesButton");
    purchaseButton.disabled = true;
  }

  // Update the total price in the DOM
  const totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.innerText = `BDT ${totalCondition}`;

  // Grand total price
  const grandTotal = document.getElementById("grandTotal");
  grandTotal.innerText = ` BDT ${totalCondition}`;

  // Create and append the class name
  const nameC = document.createElement("p");
  nameC.innerText = "Economy";
  const classNameMain = document.getElementById("classNamer");
  classNameMain.appendChild(nameC);
}

function beContinue() {
  document.getElementById("totalPrice").innerText = "";
  document.getElementById("seatName").innerText = "";
  document.getElementById("classNamer").innerText = "";
  document.getElementById("priceShow").innerText = "";
  document.getElementById("totalSeat").innerText = "";
  document.getElementById("grandTotal").innerText = "";
  document.getElementById("cuponInput").value = "";

  const purshesBtn = document.getElementById("purshesButton");
  purshesBtn.disabled = true;
  purshesBtn.style.background = "#95FEA0";
  const cuponBtn = document.getElementById("cuponButton");
  cuponBtn.disabled = true;
  cuponBtn.style.background = "#95FEA0";
}
