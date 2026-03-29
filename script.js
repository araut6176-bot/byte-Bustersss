// 1. Data Store: Career Database
const careerData = {
    software: {
        title: "Software Developer",
        skills: ["Logic", "Coding (Python/JS)", "Problem Solving", "Persistence"],
        jobs: ["Junior Web Developer", "App Developer Intern", "QA Automation Engineer"]
    },
    designer: {
        title: "UI/UX Designer",
        skills: ["Creativity", "Color Theory", "Figma/Adobe", "Empathy"],
        jobs: ["Graphic Design Intern", "Product Designer", "Web Layout Artist"]
    },
    healer: {
        title: "Healthcare Professional",
        skills: ["Empathy", "Biology", "Communication", "Patience"],
        jobs: ["Nursing Assistant", "Medical Lab Tech", "Health Coach"]
    }
};

// 2. Quiz Questions
const questions = [
    { text: "Do you enjoy solving logical puzzles or math?", category: "software" },
    { text: "Do you enjoy drawing or making things look beautiful?", category: "designer" },
    { text: "Do you like helping and taking care of people?", category: "healer" },
    { text: "Are you interested in how computers work?", category: "software" }
];

let currentQuestionIndex = 0;
let scores = { software: 0, designer: 0, healer: 0 };

// 3. Navigation Functions
function startQuiz() {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('quiz-page').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = q.text;
    document.getElementById('q-number').innerText = currentQuestionIndex + 1;
}

// 4. Logic: Handling Answers
function handleAnswer(choice) {
    if (choice === 'yes') {
        const category = questions[currentQuestionIndex].category;
        scores[category]++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// 5. Logic: Calculating and Displaying Results
function showResults() {
    document.getElementById('quiz-page').classList.add('hidden');
    document.getElementById('result-page').classList.remove('hidden');

    // Determine highest score
    let winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const career = careerData[winner];

    // Display Title
    document.getElementById('career-title').innerText = `You should be a ${career.title}!`;

    // Display Skills
    const skillsList = document.getElementById('skills-list');
    career.skills.forEach(skill => {
        let li = document.createElement('li');
        li.innerText = skill;
        skillsList.appendChild(li);
    });

    // Display Jobs
    const jobList = document.getElementById('job-list');
    career.jobs.forEach(job => {
        let div = document.createElement('div');
        div.className = 'job-item';
        div.innerHTML = `<strong>${job}</strong> <br> <small>Hiring Now (Example)</small>`;
        jobList.appendChild(div);
    });
}