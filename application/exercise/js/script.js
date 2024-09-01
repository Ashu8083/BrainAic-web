let score = 0;
const totalQuestions = 40; // 10 questions per exercise * 4 exercises

// Define questions and correct answers for each exercise
const exercises = {
    'exercise1': [
        {
            question: "What day of the week was January 1, 2000?",
            options: ["Saturday", "Sunday", "Monday", "Tuesday"],
            correctAnswer: "Saturday",
            name: "q1"
        },
        {
            question: "What is the day after Tuesday?",
            options: ["Monday", "Wednesday", "Thursday", "Friday"],
            correctAnswer: "Wednesday",
            name: "q2"
        },
        {
            question: "How many days are there in a leap year?",
            options: ["364", "365", "366", "367"],
            correctAnswer: "366",
            name: "q3"
        },
        // Add remaining 7 questions similarly
        {
            question: "What is the first month of the year?",
            options: ["January", "February", "March", "April"],
            correctAnswer: "January",
            name: "q4"
        },
        {
            question: "What is the last month of the year?",
            options: ["October", "November", "December", "January"],
            correctAnswer: "December",
            name: "q5"
        },
        {
            question: "How many months have 30 days?",
            options: ["4", "5", "6", "7"],
            correctAnswer: "4",
            name: "q6"
        },
        {
            question: "What is the quarter of a year?",
            options: ["3 months", "4 months", "2 months", "1 month"],
            correctAnswer: "3 months",
            name: "q7"
        },
        {
            question: "What day comes after Friday?",
            options: ["Thursday", "Saturday", "Sunday", "Monday"],
            correctAnswer: "Saturday",
            name: "q8"
        },
        {
            question: "How many weeks are there in a year?",
            options: ["50", "52", "54", "48"],
            correctAnswer: "52",
            name: "q9"
        },
        {
            question: "If today is Monday, what day will it be in 10 days?",
            options: ["Wednesday", "Thursday", "Friday", "Saturday"],
            correctAnswer: "Thursday",
            name: "q10"
        }
    ],
    'exercise2': [
        {
            question: "How many degrees are there in a right angle?",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            correctAnswer: "90 degrees",
            name: "q1"
        },
        {
            question: "How many hours are there in a day?",
            options: ["20", "22", "24", "26"],
            correctAnswer: "24",
            name: "q2"
        },
        {
            question: "How many minutes are there in an hour?",
            options: ["50", "60", "70", "80"],
            correctAnswer: "60",
            name: "q3"
        },
        // Add 7 more questions
        {
            question: "How many seconds are there in a minute?",
            options: ["50", "60", "70", "80"],
            correctAnswer: "60",
            name: "q4"
        },
        {
            question: "What is the time difference between GMT and IST?",
            options: ["4 hours", "5 hours", "5 hours 30 minutes", "6 hours"],
            correctAnswer: "5 hours 30 minutes",
            name: "q5"
        },
        {
            question: "In what direction does the sun rise?",
            options: ["North", "South", "East", "West"],
            correctAnswer: "East",
            name: "q6"
        },
        {
            question: "Which month has 28 days?",
            options: ["February", "All months", "April", "June"],
            correctAnswer: "All months",
            name: "q7"
        },
        {
            question: "What is the second month of the year?",
            options: ["January", "February", "March", "April"],
            correctAnswer: "February",
            name: "q8"
        },
        {
            question: "What day is celebrated as New Year's Day?",
            options: ["January 1", "February 14", "December 25", "July 4"],
            correctAnswer: "January 1",
            name: "q9"
        },
        {
            question: "Which day is known as Christmas?",
            options: ["December 25", "January 1", "February 14", "November 11"],
            correctAnswer: "December 25",
            name: "q10"
        }
    ],
    'exercise3': [
        {
            question: "Fill in the blank: This is ___ apple.",
            options: ["a", "an", "the", "some"],
            correctAnswer: "an",
            name: "q1"
        },
        {
            question: "Fill in the blank: He is ___ honest man.",
            options: ["a", "an", "the", "some"],
            correctAnswer: "an",
            name: "q2"
        },
        // Add remaining 8 questions
        {
            question: "Choose the correct option: She is ___ girl.",
            options: ["a", "an", "the", "some"],
            correctAnswer: "a",
            name: "q3"
        },
        {
            question: "Choose the correct option: It is ___ unique opportunity.",
            options: ["a", "an", "the", "some"],
            correctAnswer: "a",
            name: "q4"
        },
        {
            question: "Choose the correct option: ___ sun rises in the east.",
            options: ["A", "An", "The", "Some"],
            correctAnswer: "The",
            name: "q5"
        },
        {
            question: "Choose the correct option: ___ book on the table is mine.",
            options: ["A", "An", "The", "Some"],
            correctAnswer: "The",
            name: "q6"
        },
        {
            question: "Fill in the blank: ___ apples are red.",
            options: ["A", "An", "The", "Some"],
            correctAnswer: "Some",
            name: "q7"
        },
        {
            question: "Choose the correct option: Do you have ___ pen?",
            options: ["a", "an", "the", "some"],
            correctAnswer: "a",
            name: "q8"
        },
        {
            question: "Choose the correct option: She is ___ intelligent person.",
            options: ["a", "an", "the", "some"],
            correctAnswer: "an",
            name: "q9"
        },
        {
            question: "Choose the correct option: ___ book you gave me was interesting.",
            options: ["A", "An", "The", "Some"],
            correctAnswer: "The",
            name: "q10"
        }
    ],
    'exercise4': [
        {
            question: "Man is to woman as king is to ___?",
            options: ["queen", "prince", "princess", "duke"],
            correctAnswer: "queen",
            name: "q1"
        },
        {
            question: "Cat is to kitten as dog is to ___?",
            options: ["puppy", "cub", "kitten", "calf"],
            correctAnswer: "puppy",
            name: "q2"
        },
        // Add remaining 8 questions
        {
            question: "Hot is to cold as wet is to ___?",
            options: ["dry", "damp", "moist", "cool"],
            correctAnswer: "dry",
            name: "q3"
        },
        {
            question: "Day is to night as light is to ___?",
            options: ["dark", "heavy", "bright", "cloudy"],
            correctAnswer: "dark",
            name: "q4"
        },
        {
            question: "Good is to bad as happy is to ___?",
            options: ["sad", "angry", "mad", "sorrowful"],
            correctAnswer: "sad",
            name: "q5"
        },
        {
            question: "Teacher is to student as doctor is to ___?",
            options: ["nurse", "patient", "hospital", "clinic"],
            correctAnswer: "patient",
            name: "q6"
        },
        {
            question: "Bird is to fly as fish is to ___?",
            options: ["swim", "jump", "run", "crawl"],
            correctAnswer: "swim",
            name: "q7"
        },
        {
            question: "Tree is to leaf as flower is to ___?",
            options: ["petal", "stem", "root", "branch"],
            correctAnswer: "petal",
            name: "q8"
        },
        {
            question: "Fire is to heat as ice is to ___?",
            options: ["cold", "warm", "melt", "freeze"],
            correctAnswer: "cold",
            name: "q9"
        },
        {
            question: "Foot is to leg as hand is to ___?",
            options: ["arm", "finger", "palm", "elbow"],
            correctAnswer: "arm",
            name: "q10"
        }
    ]
};

function loadQuestions(exercise) {
    const container = document.getElementById("questions-container");
    exercises[exercise].forEach((questionObj, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `
            <label>${index + 1}. ${questionObj.question}</label><br>
            ${questionObj.options.map((option) => `
                <input type="radio" name="${questionObj.name}" value="${option}"> ${option}<br>
            `).join('')}
        `;
        container.appendChild(questionDiv);
    });
}

function submitExercise(exercise, nextPage) {
    const answers = Array.from(document.querySelectorAll(`input[name^='q']`));
    answers.forEach(answer => {
        if (answer.checked) {
            const question = exercises[exercise].find(q => q.name === answer.name);
            if (question && answer.value === question.correctAnswer) {
                score++;
            }
        }
    });
    localStorage.setItem(exercise, score); // Store score for each exercise
    window.location.href = nextPage; // Navigate to the next exercise or results
}

// Load questions when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage.startsWith('exercise')) {
        const exercise = currentPage.split('.')[0]; // Get the exercise name
        loadQuestions(exercise);
    }
});

// Display overall results
function displayResults() {
    const totalScore = [1, 2, 3, 4].reduce((acc, curr) => acc + parseInt(localStorage.getItem(`exercise${curr}`) || 0), 0);
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = `You scored ${totalScore} out of ${totalQuestions}.`;
}

// Reset all exercises
function resetExercises() {
    score = 0;
    for (let i = 1; i <= 4; i++) {
        localStorage.removeItem(`exercise${i}`);
    }
    window.location.href = 'exercise1.html'; // Redirect to the first exercise
}

// Call displayResults on the results page
if (window.location.pathname.endsWith('results.html')) {
    displayResults();
}
