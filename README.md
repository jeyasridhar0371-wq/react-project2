# 🎲 Random Number Generator

A simple React application that generates a random number within a specified range. This project demonstrates the use of **React Hooks (useState)**, **event handling**, and **conditional rendering**.

## 📌 Project Objective

The objective of this project is to build a Random Number Generator using React that updates the UI dynamically based on user interaction.

## ✨ Features

- Generate a random number between **1 and 100**
- Uses the **useState** hook for state management
- Updates the displayed number instantly
- Displays **"No number generated yet"** before the first button click
- Clean and responsive user interface
- Simple and beginner-friendly React project

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## 📂 Project Structure

```
random-number-generator/
│
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## 🎯 How It Works

- Initially, the application displays:

```
No number generated yet
```

- When the **Generate Random Number** button is clicked:
  - A random number between **1 and 100** is generated.
  - The generated number is stored using the **useState** hook.
  - The UI updates automatically to display the new number.

## 📚 React Concepts Used

- Functional Components
- useState Hook
- Event Handling
- Conditional Rendering
- JSX
- Component Styling

## 📸 Sample Output

```
Random Number Generator

Generated Number:
57

[ Generate Random Number ]
```

Before clicking the button:

```
Random Number Generator

No number generated yet

[ Generate Random Number ]
```

## 💡 Future Enhancements

- Allow users to set the minimum and maximum range
- Display previously generated numbers
- Add animation effects
- Dark/Light mode
- Copy generated number to clipboard
- Prevent consecutive duplicate numbers

---

