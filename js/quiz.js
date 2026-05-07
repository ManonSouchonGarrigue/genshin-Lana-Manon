function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("quizForm").style.display = "block";
}



const answers = {
    q1: "a",
    q2: "b",
    q3: "b",
    q4: "c",
    q5: "b",
    q6: "a",
    q7: "b",
    q8: "c",
    q9: "a",
    q10: "b",
    q11: "b",
    q12: "b",
    q13: "b",
    q14: "b",
    q15: "a",
    q16: "a",
    q17: "b",
    q18: "a",
    q19: "b",
    q20: "b",
    q21: "b",
    q22: "b",
    q23: "b",
    q24: "b",
    q25: "a",
    q26: "b",
    q27: "c",
    q28: "b",
    q29: "c",
    q30: "a",
    q31: "a",
    q32: "a",
    q33: "a",
    q34: "b",
    q35: "b",
    q36: "b",
    q37: "b",
    q38: "b",
    q39: "b",
    q40: "b"
};


let essai = 1;
function endQuiz() {
    document.getElementById("quizForm").style.display = "none";


    let score = 0;

    for (let i = 1; i <= 40; i++) {
        const radios = document.querySelectorAll(`input[name="q${i}"]`);
        const checked = Array.from(radios).find(r => r.checked);

        if (checked && checked.value === answers[`q${i}`]) {
            score++;
        }
    }


    afficherScore(score);
    displayMessage(score);

    document.getElementById("Quizscore").style.display = "block";


}


function afficherScore(score) {
    const tbody = document.querySelector("#result tbody");

    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");

    cell1.textContent = essai;
    cell2.textContent = `${score} / 40`;

    row.appendChild(cell1);
    row.appendChild(cell2);

    tbody.appendChild(row);
}


function getMessage(score){
    if(score < 10) return "Vous êtes débutant!";
    else if(score < 20) return "Vous êtes connaisseur!";
    else if(score < 30) return "Vous êtes expert!";
    else return "Vous êtes Teyvatien!";
}


function displayMessage(score){
    const message = getMessage(score);
    document.getElementById("scoreMessage").textContent = message;
}



function returnQuiz() {
    essai++;
    document.getElementById("Quizscore").style.display = "none";
    document.getElementById("quizForm").style.display = "block";

    localStorage.setItem("quizScore", score);
    window.addEventListener("load", () => {
    const savedScore = localStorage.getItem("quizScore");

    if (savedScore !== null) {
        document.getElementById("scoreMessage").textContent =
            "Dernier score : " + savedScore + " / 40";
    }
    });


}