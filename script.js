var questions = [
    {
        "id": 0,
        "qst": "Q1. RAM signifie : ",
        "options": ["Random Access Memory", "Read Access Memory", "Read After Memory", "None of these"]
    },
    {
        "id": 1,
        "qst": "Q2. La mémoire RAM est le lieu de stockage des programmes . ",
        "options": ["Vrai", "Faux"]
    },
    {
        "id": 1,
        "qst": "Q3. Qu'est-ce que le développement web ?  ",
        "options": ["La création de contenu web (site Internet ou application)", "Toutes les tâches associées au fonctionnement d’un site web ou d’une application", "La gestion du design d’un site ou d’une application"]
    },
    {
        "id": 1,
        "qst": "Q4. Un écran est composé de : ",
        "options": ["Points", "Pixels"]
    },
    {
        "id": 0,
        "qst": "Q5. ROM signifie : ",
        "options": ["Read Only Memory", "Random Only Memory"]
    },
    {
        "id": 0,
        "qst": "Q6. La touche Echap permet :",
        "options": ["D'annuler une action", "De supprimer un fichier", "De fermer une fenêtre"]
    },
    {
        "id": 2,
        "qst": "Q7. Pour faire le signe @ j'ai besoin de maintenir la touche ",
        "options": ["CTRL", "MAJ", "ALT GR", "Echap"]
    },
    {
        "id": 1,
        "qst": "Q8. Le clavier AZERTY est : ",
        "options": ["Anglais", "Français"]
    },
    {
        "id": 1,
        "qst": "Q9. Quel est le raccourci clavier pour enregistrer son travail dans un logiciel ? ",
        "options": ["CTRL + F", "CTRL + S", "CTRL + O", "CTRL + C"]
    },
    {
        "id": 2,
        "qst": "Q10. Comment se nomme la touche CTRL ",
        "options": ["Tabulation", "Majuscule", "Contrôle"]
    }
]

let questionNo = 0;
let score = 0;
let qst_title = document.getElementById("qst-title");
let option_list = document.getElementById("option-list");
let score_area = document.getElementById("score-area");
let submit = document.getElementById("submit");
let start = document.getElementById("start");
let play = document.getElementById("play");
let valider = document.getElementById("valider");




show(qst_title);
hideItems(play);
hideItems(score_area);
show(option_list);
hideItems(submit);
hideItems(valider);


// let's startedddddd !!!!!!!!!!

start.addEventListener("click", function () {
    hideItems(valider);
    hideItems(start);
    hideItems(option_list);
    show(qst_title);
    show(option_list);
    show(submit);
    loadQuestion();
});


submit.addEventListener("click", function () {
    let id = check();
    console.log(id);
    if (id == questions[questionNo].id) {
        score += 1;
        console.log("correct : " + score);
    }
    questionNo++;
    loadQuestion();
});

play.addEventListener("click", function () {
    location.reload();
})

valider.addEventListener("click", function () {
    let id = check();
    console.log(id);
    if (id == questions[questionNo].id) {
        score += 1;
        console.log("correct : " + score);
    }
    questionNo++;
    loadQuestion();
})

function hideItems(element) {
    element.style.display = "none";
}
function show(element) {
    element.style.display = "block";
}
function loadQuestion() {
    if (questionNo < questions.length) {
        let qst = questions[questionNo].qst;
        let options = questions[questionNo].options;
        qst_title.innerHTML = qst;
        option_list.innerHTML = "";
        for (let i = 0; i < options.length; i++) {
            option_list.innerHTML += `
            <div class="form-check">
                <input class="form-check-input" type="radio" name=${qst_title} id=${i}>
                <label class="form-check-label" for=${i}>
                    ${options[i]}
                </label>
            </div>

        `;
        }

    }
    else {
        console.log(score)
        hideItems(qst_title);
        hideItems(option_list);
        hideItems(submit);
        show(score_area);
        score_area.innerHTML = ""
        if (score > 8) {
            score_area.innerHTML += `
            <h2> A </h2>
        `;
        } else {

            score_area.innerHTML += `
            <h2>Toute l'équipe du <strong>Club FALCON</strong> souhaite un bon courage  </>
        `;
        }
        hideItems(valider);
        show(play)
    }
    if (questionNo == questions.length - 1) {
        hideItems(submit);
        show(valider);
    }

    // handleOptionClick();
}
function check() {
    for (let i = 0; i != 4; i++) {
        if (document.getElementById(i).checked) {
            return i;
        }
    }
}

function afficher() {
    if (score > 8) {
        swal({
            title: "Bravo !",
            text: `vous avez obtenu : ${score}/10`,
            icon: "success",
            button: "Obtenir ma Lettre"
        })
    } else {
        swal({
            title: "Oops !",
            text: `vous avez obtenu : ${score}/10`,
            icon: "error",
            button: "OK"
        })
    }
}


