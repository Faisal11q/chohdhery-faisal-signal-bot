// ======== Password Page ========
document.addEventListener("DOMContentLoaded", function() {
    const passwordBtn = document.querySelector("#password-btn");
    const passwordInput = document.querySelector("#password-input");

    if (passwordBtn && passwordInput) {
        passwordBtn.addEventListener("click", function() {
            if (passwordInput.value === "chohdheryfaisal1122@") {
                window.location.href = "main.html"; // Redirect
            } else {
                alert("❌ غلط پاسورڈ! دوبارہ کوشش کریں۔");
            }
        });
    }
});

// ======== Main Bot ========
function getSignal() {
    const asset = document.getElementById("asset").value;
    const timeframe = document.getElementById("timeframe").value;
    const output = document.getElementById("signal-output");

    // Random Signal (Backend سے بعد میں بدلیں گے)
    const signals = ["BUY", "SELL"];
    const randomSignal = signals[Math.floor(Math.random() * signals.length)];

    const now = new Date();
    const time = now.toLocaleTimeString();

    output.innerHTML = `
        📈 Asset: <b>${asset}</b><br>
        🕒 Timeframe: <b>${timeframe}</b><br>
        ✅ Signal: <b style="color:${randomSignal === 'BUY' ? 'lime' : 'red'}">${randomSignal}</b><br>
        🕰 Candle Time: ${time}<br>
        ❤️ I love you veer Ramzan Trader
    `;
}