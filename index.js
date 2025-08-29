// Favorite count
let favCount = 0;
const favCountElement = document.getElementById("favCount");
const hearts = document.querySelectorAll(".heart-icon");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    favCount++;
    favCountElement.textContent = favCount;
  });
}

// Coins
const coinEl = document.getElementById("coinCount");
let coins = 100;

// Call History
const historyList = document.getElementById("historyList");

// Call Buttons
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
    coinEl.innerHTML = `${coins} <img src="./assets/coin.png" alt="" class="w-6" />`;


    // Get service details
    const cardBody = btn.closest(".card-body");
    const serviceName = cardBody.querySelector(".card-title").innerText;
    const serviceNumber = cardBody.querySelector(
      "h2.font-bold.text-xl"
    ).innerText;

    // Alert
    alert(`📞 Calling ${serviceName} ${serviceNumber}`);

    // Current time in 12-hour format with seconds
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    const time12 = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Create Call History item (flex: name/number left, time right)
    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between items-center p-2 bg-gray-100 rounded shadow-sm font-semibold text-gray-800";

    // Left side: service name + number stacked
    const left = document.createElement("div");
    left.innerHTML = `${serviceName}<br>${serviceNumber}`;
    left.className = "text-left";

    // Right side: time
    const right = document.createElement("div");
    right.className = "text-sm text-gray-600";
    right.textContent = time12;

    // Append left and right to history item
    historyItem.appendChild(left);
    historyItem.appendChild(right);

    // Prepend to history list
    historyList.prepend(historyItem);
  });
}

// Clear Call History
const clearBtn = document.getElementById("clearHistory");
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});

// Copy Count
const copyCountEl = document.getElementById("copyCount");
let copyCount = 0;

// Copy Buttons
const copyButtons = document.querySelectorAll(".copy-btn");

for (const btn of copyButtons) {
  btn.addEventListener("click", () => {
    // Get number
    const cardBody = btn.closest(".card-body");
    const serviceNumber = cardBody.querySelector(
      "h2.font-bold.text-xl"
    ).innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(serviceNumber).then(() => {
      // Increase counter
      copyCount++;
      copyCountEl.textContent = copyCount;

      // Alert
      alert(`📋 Copied Hotline Number:\n${serviceNumber}`);
    });
  });
}
