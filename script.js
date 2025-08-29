// alert function

function alertMessage() {
  alert("");
}

// love button feature

const loveCount = document.getElementById("love-count-box");
const heartButton = document.querySelectorAll(".heart-btn");
for (let i = 0; i < heartButton.length; i++) {
  heartButton[i].addEventListener("click", function (e) {
    e.preventDefault();
    loveCount.innerText = parseInt(loveCount.innerText) + 1;
  });
}

// call/ copy / alert function

let count = 100;

const coinBox = document.getElementById("coin-count-box");

const btns = document.querySelectorAll(".call-btn");
for (const calBtn of btns) {
  console.log(calBtn);
  calBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const card = calBtn.closest(".service-box-item");
    // console.log(card);
    const name = card.querySelector(".name").textContent;
    console.log(name);
    const number = card.querySelector(".number").textContent;
    console.log(number);

    if (count < 20) {
      alert(
        "❌You don't have enough coins to make call, you need at least 20 coins to make call.Thank You😊"
      );
      return;
    }
    alert(`📞 calling ${name} at ${number}`);
    count -= 20;
    coinBox.textContent = count;
    const historyBox = document.getElementById("service-call-history-box");
    const historyList = document.getElementById("history-list");
    const clearBtn = document.getElementById("clear-Btn");
    const time = new Date().toLocaleString();
    const div = document.createElement("div");
    div.className = "history-list";
    div.innerHTML = `
    <div class="call-history-elements">
                <div
                  class="flex justify-between items-center bg-[#fafafa] gap-3 p-2 mb-2 rounded-lg"
                >
                  <div class="flex flex-col">
                    <h1 class="font-semibold text-sm">${name}</h1>
                    <p class="font-semibold">${number}</p>
                  </div>
                  <p
                    class="text-sm text-gray-400 font-medium whitespace-nowrap"
                  >${time}</p>
                </div>
              </div>
    `;
    historyList.appendChild(div);

    clearBtn.addEventListener("click", function () {
      historyList.innerText = "";
    });
  });
}
const copyConSpan = document.getElementById("copy-count");
const copyBtns = document.querySelectorAll(".btn-copy");
copyBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".service-box-item");
    const number = card.querySelector(".number").textContent;
    navigator.clipboard.writeText(number);
    copyConSpan.textContent = parseInt(copyConSpan.textContent) + 1;
  });
});
