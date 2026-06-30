let time = 60;
let timer = setInterval(function () {
    time--;
    document.getElementById("timer").innerHTML = time;

    if (time <= 0) {
        clearInterval(timer);
        checkAnswer(); // auto submit when time ends
    }
}, 1000);
function checkAnswer() {
    let score = 0;
    let answer = document.querySelector('input[name="q1"]:checked');

    // ❗ no answer selected
    if (answer == null) {
        alert("Please select an answer.");
        return;
    }
    // ✅ correct answer check
    if (answer.value == "a") {
        score = 1;
        document.getElementById("op1").style.background = "lightgreen";
    } else {
        // wrong highlight
        if (answer.value == "b") {
            document.getElementById("op2").style.background = "lightcoral";
        }
        if (answer.value == "c") {
            document.getElementById("op3").style.background = "lightcoral";
        }
        // show correct answer also
        document.getElementById("op1").style.background = "lightgreen";
    }
    sessionStorage.setItem("score", score);

    // small delay so user sees color
    setTimeout(() => {
        window.location.href = "result.html";
    }, 1000);
}