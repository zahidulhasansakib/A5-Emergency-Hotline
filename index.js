

let favCount=0;
const favCountElement=document.getElementById("favCount");
const hearts=document.querySelectorAll(".heart-icon");
 
for(heart of hearts){
    heart.addEventListener("click",function(){
        favCount++;
        favCountElement.textContent=favCount
    })
}

// index.js

// Coins
const coinEl = document.getElementById("coinCount");
let coins = 100;

// Call History
const historyList = document.getElementById("historyList");

// Call Button
const callButtons = document.querySelectorAll(".call-btn");

for (const btn of callButtons) {
  btn.addEventListener("click", () => {
    // Coin check
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    // Deduct coins
    coins -= 20;
    coinEl.textContent = coins;

    // Get Service details
    const cardBody = btn.closest(".card-body");
    const serviceName = cardBody.querySelector(".card-title").textContent;
    const serviceNumber = cardBody.querySelector("h2.font-bold.text-xl").textContent;
    const serviceIcon = cardBody.querySelector("button img").getAttribute("src");

    // Alert with Icon (using emoji 📞 as demo)
    alert(`📞 Calling ${serviceName} ${serviceNumber}`);

    // Add to Call History
    const historyItem = document.createElement("div");
    historyItem.className = "p-2 bg-gray-100 rounded shadow-sm font-semibold text-gray-800";
    historyItem.innerHTML = `${serviceName} <br>  ${serviceNumber}`;
    historyList.prepend(historyItem);
  });
}

// Clear Call History
const clearBtn = document.getElementById("clearHistory");
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});


