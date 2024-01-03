import { m } from "framer-motion";
import { ConceptsArr } from "./types";
import { sortConceptsArr } from "./utils";

const project1Concepts: ConceptsArr = [
  "var",
  "Single-line comments",
  "Less than: <",
  "console.log()",
  "<script> with the `src` attribute",
  "camelCase",
  "Assignment: =",
  "arr.shift()",
  "Logical AND: &&",
  "Decrement: --",
  "return statement",
  "Logical OR: ||",
  "newline",
  "let",
  "Declaring a variable without initializing it",
  "Initializing with a value (string, number, etc.)",
  "array",
  "document.querySelector()",
  "const",
  "Basic object usage ",
  "Basic string usage (single or double quotes, backticks)",
  "Declaring a function",
  "invoke function",
  "event.onclick",
  "el.style",
  "Arguments / parameters",
  "Bracket notation",
  "Dot notation",
  "if statement",
  "Greater than or equal: >=",
  "Subtraction assignment -=",
  "Compound assignment: +=",
  "el.innerText",
  "if...else statement",
  "arr.length",
  "Increment: ++",
  "Concatenation",
  "arr.push()",
  "Greater than: >",
  "Less than or equal: <=",
  "Ternary operator",
  "Strict equality: ===",
  "Logical AND: &&",
  "Strict inequality: !==",
  "Math.random()",
  "arr.pop()",
  "Math.floor()",
  "while loop",
  "Initializing with a value (string, number, etc.)",
  "for loop",
  "arr.indexOf()",
  "Escaped characters: *, \\, etc.",
];

export const rpgGameConcepts = sortConceptsArr(project1Concepts);

const project2Concepts: ConceptsArr = [
  "const",
  "document.querySelector()",
  "Increment: ++",
  "Dot notation",
  "Logical NOT: !",
  "Bracket notation",
  "if statement",
  "camelCase",
  "document.getElementById()",
  "Assignment: =",
  "let",
  "boolean",
  "Declaring a function",
  "Arguments / parameters",
  "return statement",
  "Quantifier: + (matches the preceding item 1 or more times)",
  "Character class / set: [...]",
  "Global flag: g",
  "Match whitespace character: s",
  "str.replace()",
  "Match any digit: d",
  "Case insensitivity flag: i",
  "str.match()",
  "document.querySelectorAll()",
  "el.value",
  "Template literal",
  "arr.length",
  "insertAdjacentHTML",
  "event.preventDefault()",
  "invoke function",
  "Ternary operator",
  "Greater than or equal: >=",
  "Basic string usage (single or double quotes, backticks)",
  "el.innerHTML",
  "str.toLowerCase()",
  "Math.abs()",
  "el.classList",
  "el.remove()",
  "el.add()",
  "for loop",
  "el.value",
  "alert",
  "null",
  "Number()",
  "Initializing with a value (string, number, etc.)",
  "Compound assignment: +=",
  "Array.from()",
  "el.innerHTML",
  "el.innerText",
  "el.addEventListener()",
  "click",
  "submit",
];

export const calorieCounter = sortConceptsArr(project2Concepts);

export const firstTwoProjects = rpgGameConcepts.concat(calorieCounter);

const project3Concepts: ConceptsArr = [
  "const",
  "el.classList",
  "Assignment: =",
  "document.getElementById()",
  "array",
  "Basic object usage ",
  "Basic string usage (single or double quotes, backticks)",
  "new Audio()",
  "Spread syntax: ...",
  "null",
  "let",
  "Arrow function",
  "Arguments / parameters",
  "arr.find()",
  "Strict equality: ===",
  "Logical OR: ||",
  "if...else statement",
  "optional chaining (?.) operator",
  "Strict inequality: !==",
  "el.add()",
  "Initializing with a value (string, number, etc.)",
  "invoke function",
  "audio.play()",
  "el.remove()",
  "audio.pause()",
  "Bracket notation",
  "Dot notation",
  "return statement",
  "arr.sort()",
  "Math.random()",
  "arr.filter()",
  "if statement",
  "Strict equality: ===",
  "document.createElement()",
  "el.createTextNode()",
  "el.id",
  "el.ariaLabel",
  "el.appendChild()",
  "el.addEventListener()",
  "click",
  "Arrow function",
  "array",
  "Ternary operator",
  "el.textContent",
  "document.querySelectorAll()",
  "Template literal",
  "arr.forEach()",
  "el.removeAttribute()",
  "el.setAttribute()",
  "if statement",
  "arr.map()",
  "arr.join()",
  "el.innerHTML",
  "Logical OR: ||",
  "arr.indexOf()",
  "undefined",
];

export const musicPlayer = sortConceptsArr(project3Concepts);
export const firstThreeProjects = firstTwoProjects.concat(musicPlayer);

const project4Concepts: ConceptsArr = [
  "const",
  "break",
  "Initializing with a value (string, number, etc.)",
  "document.getElementById()",
  "Assignment: =",
  "new Date()",
  "date.getDate()",
  "date.getMonth()",
  "date.getFullYear()",
  "date.getHours()",
  "date.getMinutes()",
  "Intl.DateTimeFormat",
  "Template literal",
  "el.textContent",
  "el.addEventListener()",
  "change",
  "el.value",
  "switch",
  "Basic string usage (single or double quotes, backticks)",
  "str.split()",
  "arr.reverse()",
  "arr.join()",
  "Basic object usage ",
];

export const dateFormatter = sortConceptsArr(project4Concepts);
export const firstFourProjects = firstThreeProjects.concat(dateFormatter);

const project5Concepts: ConceptsArr = [
  "const",
  "Initializing with a value (string, number, etc.)",
  "document.getElementById()",
  "let",
  "Basic string usage (single or double quotes, backticks)",
  "alert",
  "Arrow function",
  "if statement",
  "Strict equality: ===",
  "Arguments / parameters",
  "return statement",
  "str.replace()",
  "Global flag: g",
  "Case insensitivity flag: i",
  "str.toLowerCase()",
  "Character class / set: [...]",
  "Match characters in a range: a-z, 0-9, etc.",
  "Template literal",
  "Spread syntax: ...",
  "arr.reverse()",
  "el.appendChild()",
  "el.createTextNode()",
  "arr.join()",
  "el.className",
  "Ternary operator",
  "document.createElement()",
  "click",
  "el.classList",
  "el.addEventListener()",
];

export const palindromeChecker = sortConceptsArr(project5Concepts);
export const firstFiveProjects = firstFourProjects.concat(palindromeChecker);

const project6Concepts: ConceptsArr = [
  "const",
  "array",
  "el.textContent",
  "Initializing with a value (string, number, etc.)",
  "document.getElementById()",
  "Assignment: =",
  "Basic string usage (single or double quotes, backticks)",
  "Basic object usage ",
  "boolean",
  "break",
  "Object.freeze()",
  "Dot notation",
  "Destructuring assignment",
  "el.innerHTML",
  "Default parameters",
  "Arrow function",
  "arr.map()",
  "arr.join()",
  "Template literal",
  "arr.filter()",
  "Compound assignment: +=",
  "Ternary operator",
  "Strict inequality: !==",
  "null",
  "Strict equality: ===",
  "change",
  "el.addEventListener()",
  "el.value",
  "switch",
  "invoke function",
];

export const footballTeamCards = sortConceptsArr(project6Concepts);
export const firstSixProjects = firstFiveProjects.concat(footballTeamCards);

const project7Concepts: ConceptsArr = [
  "const",
  "Initializing with a value (string, number, etc.)",
  "Basic string usage (single or double quotes, backticks)",
  "document.getElementById()",
  "Assignment: =",
  "JSON.parse()",
  "Logical OR: ||",
  "local storage",
  "localStorage.getItem()",
  "localStorage.setItem()",
  "array",
  "let",
  "Basic object usage ",
  "Arrow function",
  "arr.findIndex()",
  "Arguments / parameters",
  "Dot notation",
  "Strict equality: ===",
  "Template literal",
  "str.toLowerCase()",
  "arr.join()",
  "Date.now()",
  "el.value",
  "if...else statement",
  "arr.unshift()",
  "Bracket notation",
  "JSON.stringify()",
  "invoke function",
  "el.innerHTML",
  "arr.forEach()",
  "Destructuring assignment",
  "Compound assignment: +=",
  "el.parentElement",
  "el.remove()",
  "arr.splice()",
  "el.innerText",
  "el.ariaLabel",
  "el.classList",
  "if statement",
  "arr.length",
  "el.addEventListener()",
  "click",
  "Inequality: !=",
  "showModal()",
  "Logical AND: &&",
  "close()",
  "event.preventDefault()",
  "submit",
];

export const todoListApp = sortConceptsArr(project7Concepts);
export const firstSevenProjects = firstSixProjects.concat(todoListApp);

const project8Concepts: ConceptsArr = [
  "const",
  "Assignment: =",
  "Basic string usage (single or double quotes, backticks)",
  "document.getElementById()",
  "Initializing with a value (string, number, etc.)",
  "array",
  "Basic object usage ",
  "Arrow function",
  "Arguments / parameters",
  "if...else statement",
  "Strict equality: ===",
  "Logical OR: ||",
  "return statement",
  "new String()",
  "invoke function",
  "Math.floor()",
  "Remainder / modulo: %",
  "el.innerText",
  "arr.forEach()",
  "el.innerHTML",
  "Template literal",
  "Dot notation",
  "settimeout()",
  "el.textContent",
  "el.remove()",
  "parseInt()",
  "Logical NOT: !",
  "if statement",
  "isNan()",
  "alert",
  "el.value",
  "el.addEventListener()",
  "click",
  "keydown",
  "event.key",
];

export const recursionProject = sortConceptsArr(project8Concepts);
export const firstEightProjects = firstSevenProjects.concat(recursionProject);

const project9Concepts: ConceptsArr = [
  "const",
  "Assignment: =",
  "document.getElementById()",
  "Basic string usage (single or double quotes, backticks)",
  "Arguments / parameters",
  "Arrow function",
  "array",
  "arr.forEach()",
  "while loop",
  "Greater than or equal: >=",
  "Bracket notation",
  "arr.push()",
  "Subtraction assignment -=",
  "arr.join()",
  "return statement",
  "let",
  "Logical NOT: !",
  "if...else statement",
  "Logical OR: ||",
  "str.match()",
  "Global flag: g",
  "Greater than: >",
  "Less than: <",
  "boolean",
  "el.innerText",
  "el.classList",
  "el.add()",
  "invoke function",
  "Declaring a function",
  "el.remove()",
  "event.preventDefault()",
  "el.addEventListener()",
  "submit",
  "click",
  "el.value",
  "parseInt()",
];

export const romanNumeralConverter = sortConceptsArr(project9Concepts);
export const firstNineProjects = firstEightProjects.concat(
  romanNumeralConverter
);

const project10Concepts: ConceptsArr = [
  "const",
  "document.getElementById()",
  "Basic string usage (single or double quotes, backticks)",
  "Assignment: =",
  "Arguments / parameters",
  "event.preventDefault()",
  "Spread syntax: ...",
  "document.getElementsByClassName()",
  "arr.map()",
  "Number()",
  "arr.sort()",
  "return statement",
  "Declaring a function",
  "Arrow function",
  "invoke function",
  "Default parameters",
  "arr.forEach()",
  "el.innerText",
  "arr.length",
  "Increment: ++",
  "for loop",
  "Less than: <",
  "Bracket notation",
  "let",
  "if statement",
  "while loop",
  "Logical AND: &&",
  "Decrement: --",
  "el.addEventListener()",
  "click",
];

export const numberSorter = sortConceptsArr(project10Concepts);
export const firstTenProjects = firstNineProjects.concat(numberSorter);

export const statsCalculator: ConceptsArr = [
  "Arrow function",
  "Arguments / parameters",
  "arr.reduce()",
  "arr.length",
  "arr.slice()",
  "Remainder / modulo: %",
  "arr.sort()",
  "Strict equality: ===",
  "Bracket notation",
  "Math.floor()",
  "return statement",
  "Math.max()",
  "Ternary operator",
  "Math.min()",
  "Basic object usage ",
  "Math.sqrt()",
  "arr.forEach()",
  "Logical OR: ||",
  "arr.filter()",
  "new Set()",
  "arr.join()",
  "if statement",
  "arr.map()",
  "null",
  "Object.values()",
  "Set().size",
  "Object.keys()",
  "Spread syntax: ...",
  "Exponentiation: **",
  "document.querySelector()",
  "const",
  "getElementsByTagName",
  "el.value",
  "str.split()",
  "Global flag: g",
  "Number()",
  "Logical NOT: !",
  "isNan()",
  "el.textContent",
  "Assignment: =",
  "Bracket notation",
  "el.addEventListener()",
  "submit",
  "event.preventDefault()",
];
export const spreadsheetProject: ConceptsArr = [];
export const spamFilter: ConceptsArr = [
  "const",
  "document.getElementById()",
  "Match characters in a range: a-z, 0-9, etc.",
  "array",
  "Case insensitivity flag: i",
  "Assignment: =",
  "Global flag: g",
  "Arrow function",
  "Arguments / parameters",
  "arr.some()",
  "regex.test()",
  "boolean",
  "el.addEventListener()",
  "click",
  "if statement",
  "alert",
  "Strict equality: ===",
  "Basic string usage (single or double quotes, backticks)",
  "return statement",
  "Ternary operator",
  "el.textContent",
];
export const telephoneValidator: ConceptsArr = [];
export const shoppingCart: ConceptsArr = [
  "const",
  "document.getElementById()",
  "let",
  "document.getElementsByClassName()",
  "Assignment: =",
  "array",
  "Strict equality: ===",
  "arr.map()",
  "Basic object usage ",
  "arr.find()",
  "Basic string usage (single or double quotes, backticks)",
  "arr.forEach()",
  "Destructuring assignment",
  "arr.reduce()",
  "el.innerHTML",
  "Template literal",
  "el.textContent",
  "Arrow function",
  "class ClassName / new ClassName()",
  "this",
  "Logical OR: ||",
  "Dot notation",
  "Bracket notation",
  "Concatenation",
  "Ternary operator",
  "return statement",
  "arr.length",
  "alert",
  "if statement",
  "confirm",
  "parseFloat()",
  "num.toFixed()",
  "Spread syntax: ...",
  "el.addEventListener()",
  "click",
  "el.style",
  "Logical NOT: !",
];
export const platformerGamer: ConceptsArr = [];
export const diceGame: ConceptsArr = [];
export const cashRegister: ConceptsArr = [];
export const fccAuthorsPage: ConceptsArr = [
  "const",
  "document.getElementById()",
  "let",
  "Assignment: =",
  "array",
  "Basic string usage (single or double quotes, backticks)",
  "fetch()",
  "res.json()",
  "arr.slice()",
  "el.innerHTML",
  "Template literal",
  "console.error",
  "Arrow function",
  "Compound assignment: +=",
  "if statement",
  "Less than or equal: <=",
  "boolean",
  "el.textContent",
  "el.disabled",
  "Arguments / parameters",
  "arr.forEach()",
  "Destructuring assignment",
  "el.addEventListener()",
  "click",
];
export const fccForumLeaderboard: ConceptsArr = [];
export const randomQuoteMachine: ConceptsArr = [];
