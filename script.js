let total = 0;
function addToCart(price) {
 total += price;
 document.getElementById("total").innerText = total;
}
document.getElementById("orderBtn").addEventListener("click", function() {
 alert("Order placed! Total Bill: ₹" + total);
});
