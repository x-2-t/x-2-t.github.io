document.querySelector("button").addEventListener("click", gradeQuiz);

displayQ4Choices();
displayQ5Choices();
displayQ8Choices();
displayQ10Choices();

let score = 0;

let attempts = localStorage.getItem("total_attempts");

if (attempts === null) {
    attempts = 0;
} else {
    attempts = Number(attempts);
}



function isFormValid() {

    let isValid = true;
    let q1Response = document.querySelector("#q1").value; // cks the textbox and retrieves the entry with .value
    let validationFdbk = document.querySelector("#validationFdbk");

    // cks if the textbox is empty
    if (q1Response === "") {
        isValid = false;
        validationFdbk.textContent = "Question 1 was not answered";
    }

    return isValid;
}



function setMarkImage(index, imageName, altText) {
    let markContainer = document.querySelector(`#markImg${index}`);
    markContainer.textContent = "";

    let img = document.createElement("img");
    img.src = `img/${imageName}`;
    img.alt = altText;
    markContainer.appendChild(img);
    img.width = 30;
}



function rightAnswer(index) {
    let feedback = document.querySelector(`#q${index}Feedback`);
    feedback.textContent = "Correct!";
    feedback.className = "bg-success text-white";
    setMarkImage(index, "right.png", "Gold medal");
    score += 10;
}



function wrongAnswer(index) {
    let feedback = document.querySelector(`#q${index}Feedback`);
    feedback.textContent = "Incorrect!";
    feedback.className = "bg-warning text-white";
    setMarkImage(index, "wrong.png", "X mark");
}




function gradeQuiz() {
    //console.log("Grading quiz...");
    document.querySelector("#validationFdbk").textContent = "";

    if (!isFormValid()) {
        return;
    }

    score = 0
    let q1Response = document.querySelector("#q1").value.toLowerCase();


    // Question 1 textbox - Capital of CA 
    if (q1Response === "sacramento") {
        rightAnswer(1);
    } else {
        wrongAnswer(1);
    }

    // Question 2 dropdown - Longest river
    let q2Response = document.querySelector("#q2").value;

    if (q2Response === "mo") {
        rightAnswer(2);
    } else {
        wrongAnswer(2);
    }

    // Question 3 checkbox - Mount Rushmore
    if (document.querySelector("#Jefferson").checked &&
        document.querySelector("#Roosevelt").checked &&
        !document.querySelector("#Jackson").checked &&
        !document.querySelector("#Franklin").checked) {
        rightAnswer(3);
    } else {
        wrongAnswer(3);
    }


    // Question 4 radio - Snallest State
    let selectedQ4 = document.querySelector("input[name=q4]:checked");

    //prevents an error if the user submits without selecting a radio button
    if (selectedQ4 !== null && selectedQ4.value === "Rhode Island") {
        rightAnswer(4);
    } else {
        wrongAnswer(4);
    }



    // Question 5 radio - Deepest lake
    let selectedQ5 = document.querySelector("input[name=q5]:checked");

    if (selectedQ5 !== null && selectedQ5.value === "Oregon - Crater Lake") {
        rightAnswer(5);
    } else {
        wrongAnswer(5);
    }


    // Question 6 textbox - Golden Gate
    let q6Response = document.querySelector("#q6").value.toLowerCase();

    if (q6Response === "san francisco") {
        rightAnswer(6);
    } else {
        wrongAnswer(6);
    }



    // Question 7 dropdown - cheese
    let q7Response = document.querySelector("#q7").value;

    if (q7Response === "wi") {
        rightAnswer(7);
    } else {
        wrongAnswer(7);
    }


    // Question 8 radio - snakes
    let selectedQ8 = document.querySelector("input[name=q8]:checked");

    if (selectedQ8 !== null && selectedQ8.value === "Alaska") {
        rightAnswer(8);
    } else {
        wrongAnswer(8);
    }


    // Question 9 checkbox - Time zone
    if (document.querySelector("#Eastern").checked &&
        document.querySelector("#Pacific").checked &&
        document.querySelector("#Mountain").checked &&
        !document.querySelector("#Mars").checked) {
        rightAnswer(9);
    } else {
        wrongAnswer(9);
    }


    // Question 10 radio - Tallest mouintain
    let selectedQ10 = document.querySelector("input[name=q10]:checked");

    if (selectedQ10 !== null && selectedQ10.value === "Alaska - Denali") {
        rightAnswer(10);
    } else {
        wrongAnswer(10);
    }





    document.querySelector("#totalScore").textContent = `Total Score: ${score}`;

    //displays the total score msg in red if < 80 and green if > 80
    //bootstrap alerts danger- red and success-green
    if (score < 80) {
        document.querySelector("#totalScore").className = "text-danger";
    } else {
        document.querySelector("#totalScore").className = "text-success";
    }
    //displays congratulatory msg if total score is over 80
    if (score > 80) {
        document.querySelector("#totalScore").textContent = `Congratulations! Your total score is ${score}`;
    }

    attempts++;
    document.querySelector("#totalAttempts").textContent = `Total Attempts: ${attempts}`;
    localStorage.setItem("total_attempts", attempts);
}





function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}



// -------------- RADIO BUTTON SECTION -----------------------


// Q4 creates and randomizes radio button choices
function displayQ4Choices() {
    let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
    shuffleArray(q4ChoicesArray);

    let choicesContainer = document.querySelector("#q4Choices");
    choicesContainer.textContent = "";

    for (let choice of q4ChoicesArray) {
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "q4";
        input.id = choice;
        input.value = choice;

        let label = document.createElement("label");
        label.htmlFor = choice;
        label.textContent = choice;
        label.className = "me-3"; // add spacing between radio buttons

        choicesContainer.appendChild(input);
        choicesContainer.appendChild(label);
        choicesContainer.appendChild(document.createTextNode(" "));
    }
}



// Q5 creates and randomizes radio button choices
function displayQ5Choices() {
    let q5ChoicesArray = ["Oregon - Crater Lake", "California - Lake Tahoe", "Michigan - Lake Superior", "Utah - Great Salt Lake"];
    shuffleArray(q5ChoicesArray);

    let choicesContainer = document.querySelector("#q5Choices");
    choicesContainer.textContent = "";

    for (let choice of q5ChoicesArray) {
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "q5";
        input.id = choice;
        input.value = choice;

        let label = document.createElement("label");
        label.htmlFor = choice;
        label.textContent = choice;
        label.className = "me-3";

        choicesContainer.appendChild(input);
        choicesContainer.appendChild(label);
        choicesContainer.appendChild(document.createTextNode(" "));
    }
}


// Q8 creates an randomizes radio button choices
function displayQ8Choices() {
    let q8ChoicesArray = ["Alaska", "Florida", "Colorado", "Washington"];
    shuffleArray(q8ChoicesArray);

    let choicesContainer = document.querySelector("#q8Choices");
    choicesContainer.textContent = "";

    for (let choice of q8ChoicesArray) {
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "q8";
        input.id = choice;
        input.value = choice;

        let label = document.createElement("label");
        label.htmlFor = choice;
        label.textContent = choice;
        label.className = "me-3";

        choicesContainer.appendChild(input);
        choicesContainer.appendChild(label);
        choicesContainer.appendChild(document.createTextNode(" "));
    }
}


// Q10 creates an randomizes radio button choices
function displayQ10Choices() {
    let q10ChoicesArray = ["Alaska - Denali", "California - Mount Whitney", "North Carolina - Mount Mitchell"];
    shuffleArray(q10ChoicesArray);

    let choicesContainer = document.querySelector("#q10Choices");
    choicesContainer.textContent = "";

    for (let choice of q10ChoicesArray) {
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "q10";
        input.id = choice;
        input.value = choice;

        let label = document.createElement("label");
        label.htmlFor = choice;
        label.textContent = choice;
        label.className = "me-3"; 

        choicesContainer.appendChild(input);
        choicesContainer.appendChild(label);
        choicesContainer.appendChild(document.createTextNode(" "));
    }
}




