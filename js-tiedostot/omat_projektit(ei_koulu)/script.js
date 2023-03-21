const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.querySelector('#question');
const optionButtons = document.querySelector('#option-buttons');
const startButton = document.querySelector('#start-btn');
const submitButton = document.querySelector('#submit-btn');
const resultContainer = document.querySelector('#result-container');
const resultElement = document.querySelector('#result');
const scoreElement = document.querySelector('#score');
const restartButton = document.querySelector('#restart-btn');

let currentQuestionIndex = 0;
let score = 0;

// Quiz questions
const questions = [
	{
		question: 'What is the capital of France?',
		options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
		answer: 'Paris'
	},
	{
		question: 'What is the highest mountain in the world?',
		options: ['Mount Everest', 'K2', 'Makalu', 'Lhotse'],
		answer: 'Mount Everest'
	},
	{
		question: 'What is the currency of Japan?',
		options: ['Yen', 'Dollar', 'Euro', 'Pound'],
		answer: 'Yen'
	},
	{
		question: 'What is the largest country in the world by land area?',
		options: ['Russia', 'Canada', 'China', 'USA'],
		answer: 'Russia'
	}
];

// Start quiz
start
