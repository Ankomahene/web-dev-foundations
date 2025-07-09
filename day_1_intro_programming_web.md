# 🎓 Day 1: Introduction to Programming & the Web

## Slide 1: Welcome & Introduction

- **Title:** Welcome to Foundations of Web Development!
- Brief self-introduction (Who you are, what you do, why you love web development)
- What to expect over the next 6 days (Intro to programming, HTML, CSS, JavaScript, mini projects)
- Share agenda for Day 1

**Activity:** Quick Icebreaker — Ask each participant: "What do you hope to build someday?" This will help connect their learning to real goals.

---

## Slide 2: What is Software?

- **Definition:** Software is a set of instructions written by programmers to make computers perform specific tasks.
- **Types of Software:**
  - Web Applications (Facebook, Gmail)
  - Mobile Apps (WhatsApp, TikTok)
  - Desktop Software (MS Word, Photoshop)
  - System Software (Operating systems like Windows or macOS)
- **Hardware vs Software:** Hardware is the physical part (computer, keyboard); software is the digital part (apps, programs).

**Activity:** Ask students to list 3 apps or programs they use every day.

---

## Slide 3: Who is a Software Developer?

- A person who writes code to create software solutions.
- Common types of developers:
  - Frontend Developer: builds what users see (HTML, CSS, JavaScript)
  - Backend Developer: builds logic and databases
  - Fullstack Developer: both frontend + backend
  - Mobile Developer: builds apps for Android/iOS
  - DevOps Engineer: manages software deployment
- Web developers focus on creating websites and web applications.

**Visual Tip:** Draw a simple diagram showing user ↔ frontend ↔ backend ↔ database

---

## Slide 4: How the Web Works (Simplified)

- Step-by-step:
  1. User types a web address (URL)
  2. Browser sends request to a server
  3. Server sends back files (HTML, CSS, JS)
  4. Browser displays the website
- **Key Terms:**
  - Browser: The app you use to view websites
  - Server: A powerful computer that stores websites
  - Domain: The website name (like google.com)
  - Hosting: Where your website files live

**Activity:** Go to `https://example.com`, open DevTools (F12), and inspect the "Network" tab to see how files load.

---

## Slide 5: Tools of a Web Developer

- **Code Editor:** VS Code — shows syntax, formats your code, and helps you debug.
- **Browser:** Chrome/Firefox — use for testing your website.
- **Terminal (Intro):** Used to run commands, open folders, etc.
- **Playgrounds:**
  - [Replit.com](https://replit.com)
  - [CodePen.io](https://codepen.io)

**Activity:** Walk them through installing and opening VS Code. Open a folder and create a simple `.html` file.

---

## Slide 6: What is Programming?

- Programming = writing instructions for computers.
- Programming languages: JavaScript, Python, Java, etc.
- Markup languages: HTML is not a programming language — it's used for structure.
- **Analogy:** Like writing a recipe — each step must be clear and logical.

**Example:**

```plaintext
Instruction: Make tea
1. Boil water
2. Add tea leaves
3. Wait 5 minutes
4. Pour into cup
```

That's similar to how a program works — step-by-step instructions.

---

## Slide 7: Core Programming Concepts

- **Variables** store information:

```js
let name = "John";
let age = 25;
```

- **Data Types:**
  - String = text (`"Hello"`)
  - Number = numeric values (`10`, `4.5`)
  - Boolean = true/false
- **Operators:** used to perform calculations:

```js
let result = 5 + 3;
```

- **Conditions (if/else):**

```js
if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```

- **Loops:** repeat code multiple times

```js
for (let i = 0; i < 3; i++) {
  console.log("Hello " + i);
}
```

**Activity:** Write pseudocode for "How to make a sandwich" in steps.

---

## Slide 8: JavaScript in the Browser

- Open browser → Right-click → Inspect → Console tab
- Try your first code:

```js
console.log("Hello, world!");
alert("Welcome to Web Dev!");
```

- `let`, `const`: used to declare variables

```js
let user = "Mary";
const school = "Dev Academy";
```

- `prompt()` lets you get input from the user:

```js
let name = prompt("What is your name?");
alert("Hi, " + name);
```

**Activity:** Create a greeting app that asks for the user’s name and age and displays a welcome message.

---

## Slide 9: Hands-on Coding Exercise

**Build:** A basic calculator using prompt + alert

```js
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let sum = Number(num1) + Number(num2);
alert("The sum is: " + sum);
```

- Explain `Number()` to convert input to numbers
- Talk about string concatenation: `"The sum is: " + sum`

**Pair Activity:**

- Change it to subtract or multiply the numbers
- Add error handling (what happens if someone types text?)

---

## Slide 10: Recap & Q&A

- Today you learned:
  - What software is and who builds it
  - How the web works behind the scenes
  - What programming is
  - JavaScript basics using the browser console
  - Built your first mini-app!

**Activity:** Exit ticket — Ask everyone to write down one thing they learned or enjoyed most today.

---

## Slide 11: Homework & Resources

**Homework:**

- Build a greeting app that:
  - Prompts for name and age
  - Displays a custom greeting using `alert()`
- Modify your calculator to support three numbers

**Resources to Share:**

- [W3Schools JavaScript Intro](https://www.w3schools.com/js/js_intro.asp)
- [MDN JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Replit.com](https://replit.com/) – Use this to code without needing to install anything
- [What is Programming? - Video](https://www.youtube.com/watch?v=FCMxA3m_Imc)

---

**Optional Slide:** Share WhatsApp/Discord group link

**Reminder:** Come tomorrow with VS Code installed and ready!

