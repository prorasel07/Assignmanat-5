
// Coupon part
function couponUse() {
    let inputCoupon = document.getElementById("cuponInput");
    const inputValue = "couple20";
    const inputValue2 = "NEW15";
  
    if (inputValue === inputCoupon.value) {
      const discountPrice = (totalCondition * 15) / 100;
      const discount = document.getElementById("grandTotal");
      discount.innerText = `${discountPrice.toFixed(2)} Tk`;
      const grandTotal = totalCondition - discountPrice;
      const grandPrice = document.getElementById("grandTotal");
      grandPrice.innerText = `${grandTotal.toFixed(2)} Tk`;
    } else if (inputValue2 === inputCoupon.value) {
      const discountPrice = (totalCondition * 20) / 100;
      const discount = document.getElementById("grandTotal");
      discount.innerText = `${discountPrice.toFixed(2)} Tk`;
      const grandTotal = totalCondition - discountPrice;
      const grandPrice = document.getElementById("grandTotal");
      grandPrice.innerText = `${grandTotal.toFixed(2)} Tk`;
    }
  }