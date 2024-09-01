// Prevent Tab Switching
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        alert('Tab switching is not allowed during the test!');
        // Optionally, you can log this event or disqualify the user.
    }
});

// Access Webcam
const video = document.getElementById('webcam');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing webcam:', error);
        alert('Webcam access is required for this test.');
    });

// Quiz logic
const sections = {
calendar: [
{ question: 'What day of the week was January 1, 2000?', answers: ['Saturday', 'Friday', 'Sunday', 'Monday'], correct: 0 },
{ question: 'How many days are there in a leap year?', answers: ['365', '366', '367', '368'], correct: 1 },
{ question: 'If today is Wednesday, what will be the day after 15 days?', answers: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], correct: 3 },
{ question: 'What day of the week was March 3, 2014?', answers: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], correct: 0 },
{ question: 'Which month of the year has the least number of days?', answers: ['February', 'April', 'June', 'November'], correct: 0 },
{ question: 'If July 4 is a Monday, what day of the week was July 1?', answers: ['Friday', 'Saturday', 'Sunday', 'Thursday'], correct: 1 },
{ question: 'Which day is the first day of the week in most calendars?', answers: ['Sunday', 'Monday', 'Saturday', 'Tuesday'], correct: 0 },
{ question: 'How many months have 31 days in a year?', answers: ['6', '7', '8', '9'], correct: 1 },
{ question: 'How many days are there between March 15 and April 15?', answers: ['30', '31', '28', '29'], correct: 1 },
{ question: 'What is the day after tomorrow if today is Thursday?', answers: ['Saturday', 'Sunday', 'Monday', 'Friday'], correct: 0 },
{ question: 'How many months have 28 days?', answers: ['1', '12', '2', 'None'], correct: 1 },
{ question: 'Which day is observed as New Year’s Day according to the Gregorian calendar?', answers: ['December 31', 'January 1', 'February 1', 'March 1'], correct: 1 },
{ question: 'How many days are there between February 1 and February 28 in a non-leap year?', answers: ['27', '28', '26', '29'], correct: 1 },
{ question: 'Which month of the year has 30 days?', answers: ['April', 'February', 'March', 'August'], correct: 0 },
{ question: 'Which day is celebrated as International Women’s Day?', answers: ['March 8', 'April 7', 'March 10', 'May 10'], correct: 0 }
],
clock: [
{ question: 'If the time is 2:00 PM, what will be the angle between the hour and minute hands?', answers: ['60°', '90°', '120°', '150°'], correct: 1 },
{ question: 'What is the angle between the hour hand and the minute hand at 3:15?', answers: ['0°', '7.5°', '90°', '360°'], correct: 1 },
{ question: 'If the time is 6:00 PM, what will be the angle between the hour and minute hands?', answers: ['180°', '90°', '120°', '150°'], correct: 0 },
{ question: 'What will be the angle between the hands of a clock at 4:20?', answers: ['100°', '110°', '120°', '130°'], correct: 1 },
{ question: 'How many times do the hands of a clock coincide in a day?', answers: ['22', '24', '12', '48'], correct: 0 },
{ question: 'At what time between 3 and 4 o\'clock will the hands of a clock coincide?', answers: ['3:15', '3:27', '3:32', '3:33'], correct: 3 },
{ question: 'If the time is 9:00, what is the angle between the hour and minute hands?', answers: ['90°', '180°', '270°', '360°'], correct: 1 },
{ question: 'How many times are the hands of a clock at right angles in a day?', answers: ['22', '24', '44', '48'], correct: 2 },
{ question: 'At what time between 8 and 9 o\'clock will the hands of a clock be in opposite directions?', answers: ['8:30', '8:35', '8:40', '8:45'], correct: 3 },
{ question: 'If the time is 7:20, what is the angle between the hour and minute hands?', answers: ['80°', '85°', '90°', '100°'], correct: 2 },
{ question: 'How many times do the hands of a clock form a straight line in a day?', answers: ['22', '24', '44', '48'], correct: 2 },
{ question: 'What is the reflex angle between the hands of a clock at 10:25?', answers: ['150°', '165°', '190°', '210°'], correct: 2 },
{ question: 'At what time between 2 and 3 o\'clock are the hands of a clock opposite to each other?', answers: ['2:15', '2:30', '2:45', '2:50'], correct: 2 },
{ question: 'How many degrees does the hour hand move in one hour?', answers: ['15°', '30°', '45°', '60°'], correct: 1 },
{ question: 'What is the angle between the hands of a clock at 7:25?', answers: ['102.5°', '120°', '135°', '147.5°'], correct: 0 }
],
grammar: [
{ question: 'Which article is missing: ___ apple a day keeps the doctor away?', answers: ['A', 'An', 'The', 'No article needed'], correct: 1 },
{ question: 'Which article is missing: ___ earth revolves around the sun.', answers: ['A', 'An', 'The', 'No article needed'], correct: 2 },
{ question: 'Which article is missing: She is ___ engineer.', answers: ['A', 'An', 'The', 'No article needed'], correct: 1 },
{ question: 'Which article is missing: He wants to become ___ doctor.', answers: ['A', 'An', 'The', 'No article needed'], correct: 1 },
{ question: 'Which article is missing: ___ dog is man’s best friend.', answers: ['A', 'An', 'The', 'No article needed'], correct: 2 },
{ question: 'Which article is missing: This is ___ best day of my life.', answers: ['A', 'An', 'The', 'No article needed'], correct: 2 },
{ question: 'Which article is missing: ___ honesty is the best policy.', answers: ['A', 'An', 'The', 'No article needed'], correct: 2 },
{ question: 'Which article is missing: I am reading ___ interesting book.', answers: ['A', 'An', 'The', 'No article needed'], correct: 1 },
{ question: 'Which article is missing: He is ___ honest person.', answers: ['A', 'An', 'The', 'No article needed'], correct: 1 },
{ question: 'Which article is missing: ___ moon is beautiful tonight.', answers: ['A', 'An', 'The', 'No article needed'], correct: 2 },
{ question: 'Which article is missing: She bought ___ new car.', answers: ['A', 'An', 'The', 'No article needed'], correct: 0 },
{ question: 'Which article is missing: ___ Eiffel Tower is in Paris.', answers: ['A', 'An', 'The', 'No article needed'], correct: 2 },
{ question: 'Which article is missing: I want to visit ___ Mount Everest.', answers: ['A', 'An', 'The', 'No article needed'], correct: 2 },
{ question: 'Which article is missing: He ate ___ apple.', answers: ['A', 'An', 'The', 'No article needed'], correct: 1 },
{ question: 'Which article is missing: ___ stars are shining brightly.', answers: ['A', 'An', 'The', 'No article needed'], correct: 2 }
],
gk: [
{ question: 'Who was the first President of India?', answers: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Rajendra Prasad', 'Indira Gandhi'], correct: 2 },
{ question: 'What is the capital of France?', answers: ['London', 'Paris', 'Berlin', 'Madrid'], correct: 1 },
{ question: 'Which planet is known as the Red Planet?', answers: ['Earth', 'Mars', 'Jupiter', 'Venus'], correct: 1 },
{ question: 'What is the largest ocean on Earth?', answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'], correct: 3 },
{ question: 'Who wrote the play "Romeo and Juliet"?', answers: ['William Shakespeare', 'Charles Dickens', 'Mark Twain', 'Jane Austen'], correct: 0 },
{ question: 'What is the chemical symbol for water?', answers: ['O2', 'H2O', 'CO2', 'NaCl'], correct: 1 },
{ question: 'Who painted the Mona Lisa?', answers: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'], correct: 2 },
{ question: 'What is the currency of Japan?', answers: ['Dollar', 'Euro', 'Yen', 'Pound'], correct: 2 },
{ question: 'Which is the smallest continent by land area?', answers: ['Asia', 'Australia', 'Europe', 'Africa'], correct: 1 },
{ question: 'Who discovered penicillin?', answers: ['Alexander Fleming', 'Marie Curie', 'Isaac Newton', 'Albert Einstein'], correct: 0 },
{ question: 'What is the tallest mountain in the world?', answers: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'], correct: 1 },
{ question: 'Which is the longest river in the world?', answers: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correct: 1 },
{ question: 'Who was the first man to step on the moon?', answers: ['Yuri Gagarin', 'Buzz Aldrin', 'Michael Collins', 'Neil Armstrong'], correct: 3 },
{ question: 'What is the hardest natural substance on Earth?', answers: ['Gold', 'Iron', 'Diamond', 'Silver'], correct: 2 },
{ question: 'Who is known as the "Father of the Nation" in India?', answers: ['Subhas Chandra Bose', 'Bhagat Singh', 'Mahatma Gandhi', 'Sardar Patel'], correct: 2 }
]
};

let currentSection = null;
let currentQuestionIndex = 0;
let score = 0;
let totalScore = 0;
let totalQuestions = 0;
let completedSections = 0;
const totalSections = Object.keys(sections).length;

const navPanel = document.getElementById('nav-panel');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const finalResultContainer = document.getElementById('final-result-container');
const sectionTitle = document.getElementById('section-title');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultEl = document.getElementById('result');
const finalResultEl = document.getElementById('final-result');

document.querySelectorAll('.start-quiz').forEach(button => {
    button.addEventListener('click', startSection);
});

function startSection(event) {
    const section = event.target.getAttribute('data-section');
    currentSection = sections[section];
    currentQuestionIndex = 0;
    score = 0;
    totalQuestions = currentSection.length;

    navPanel.style.display = 'none';
    quizContainer.style.display = 'block';
    sectionTitle.textContent = section.charAt(0).toUpperCase() + section.slice(1);
    showQuestion();
}

function showQuestion() {
    const currentQuestion = currentSection[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answersEl.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-button');
        button.addEventListener('click', () => selectAnswer(index));
        answersEl.appendChild(button);
    });

    nextBtn.style.display = 'none';
    submitBtn.style.display = 'none';

    if (currentQuestionIndex === totalQuestions - 1) {
        submitBtn.style.display = 'block';
    }
}

function selectAnswer(selectedIndex) {
    const currentQuestion = currentSection[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    if (currentQuestionIndex < totalQuestions - 1) {
        nextBtn.style.display = 'block';
    } else {
        submitBtn.style.display = 'block';
    }

    Array.from(answersEl.children).forEach((button, index) => {
        button.disabled = true;
        if (index === currentQuestion.correct) {
            button.style.backgroundColor = 'green';
        } else if (index === selectedIndex) {
            button.style.backgroundColor = 'red';
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

submitBtn.addEventListener('click', showResult);

function showResult() {
    totalScore += score;
    completedSections++;

    resultEl.textContent = `You scored ${score} out of ${totalQuestions}.`;
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    if (completedSections === totalSections) {
        showFinalResult();
    } else {
        setTimeout(() => {
            resultContainer.style.display = 'none';
            navPanel.style.display = 'block';
        }, 3000);
    }
}

function showFinalResult() {
    finalResultEl.textContent = `You scored ${totalScore} out of ${totalSections * totalQuestions}.`;
    resultContainer.style.display = 'none';
    finalResultContainer.style.display = 'block';
}

