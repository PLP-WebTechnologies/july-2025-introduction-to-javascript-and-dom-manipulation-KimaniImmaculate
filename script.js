// Part 1: Variables & Conditionals

let hasStartedLearning = true;

if (hasStartedLearning) {
  console.log("A learner has started learning KSL!");
} else {
  console.log("Learner has not started yet.");
}

// Part 2: Functions

// Function 1: Greet learner
function greetLearner(name) {
  if (name) {
    return "Hello " + name + "! Ready to learn some KSL today?";
  } else {
    return "Hello! Please enter your name above 👆.";
  }
}

// Function 2: Show interesting facts
function getInterestingFacts() {
  let facts = [
    "KSL is recognized as a language in the Kenyan Constitution.",
    "It has its own unique grammar and structure.",
    "It helps bridge communication between deaf and hearing people.",
    "Many schools in Kenya now include KSL programs."
  ];
  return facts;
}

// Function 3: Display schools offering KSL
function displayKSLSchools() {
  let schools = [
    "Kenya Institute of Special Education (KISE)",
    "Karen Technical Training Institute for the Deaf",
    "Kakamega School for the Deaf",
    "Kisii School for the Deaf",
    "Machakos School for the Deaf"
  ];
    return schools;
} 

// Part 3: Loops

// Example 1: Loop through facts
function displayFacts() {
  let facts = getInterestingFacts();
  let factsList = document.getElementById("facts-list");
  factsList.innerHTML = ""; // Clear old facts

  for (let i = 0; i < facts.length; i++) {
    let li = document.createElement("li");
    li.textContent = facts[i];
    factsList.appendChild(li);
  }
}

// Example 2: Loop through schools offering KSL
function displaySchools() {
  let schools = displayKSLSchools();
  let schoolsList = document.getElementById("schools-list");
  schoolsList.innerHTML = ""; // Clear old list

  for (let i = 0; i < schools.length; i++) {
    let li = document.createElement("li");
    li.textContent = schools[i];
    schoolsList.appendChild(li);
  }
}

// Part 4: DOM Interactions

document.getElementById("btn-greet").addEventListener("click", function() {
  let nameInput = document.getElementById("name-input").value;
  document.getElementById("greet-output").textContent = greetLearner(nameInput);
});

document.getElementById("btn-interesting").addEventListener("click", displayFacts);

document.getElementById("btn-schools").addEventListener("click", displaySchools);
