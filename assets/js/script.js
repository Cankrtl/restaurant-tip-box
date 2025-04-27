var billInput = document.getElementById("bill");
var customTipInput = document.getElementById("customTip");
var totalOutput = document.getElementById("total")
var tipButtons = document.querySelectorAll(".tip-buttons button");

var tipPercent = 5;

billInput.addEventListener("input", calculate);

customTipInput.addEventListener("input", function () {
  tipPercent = parseFloat(customTipInput.value) || 0; 
  removeActiveButtons(); 
  calculate();
});

tipButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    tipPercent = parseFloat(button.textContent); 
    customTipInput.value = ""; 
    removeActiveButtons();
    button.classList.add("active"); 
    calculate();
  });
});

function removeActiveButtons() {
  tipButtons.forEach(function (btn) {
    btn.classList.remove("active");
  });
}

function calculate() {
  var bill = parseFloat(billInput.value) || 0; 
  var tipAmount = bill * tipPercent / 100;     
  var total = bill + tipAmount;               
  totalOutput.textContent = total.toFixed(2);
}

