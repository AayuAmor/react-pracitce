# React Revision Guide

## Table of Contents

### Basics

1. [JSX](#1-jsx)
2. [Components in React](#2-components-in-react)
3. [Dynamic Values](#3-dynamic-values)
4. [Conditional Rendering](#4-conditional-rendering)
5. [Import and Export](#5-import-and-export)
6. [Loops in JSX](#6-loops-in-jsx)

### Props

7. [Props](#7-props)
8. [React Destructuring Props](#8-react-destructuring-props)

### CSS

9. [Add CSS Styling](#9-add-css-styling)
10. [Inline CSS in React](#10-inline-css-in-react)
11. [Conditional Styling for Dynamic UIs](#11-conditional-styling-for-dynamic-uis)
12. [CSS Modules](#12-css-modules)
13. [Styled Components](#13-styled-components)
14. [Tailwind CSS in React](#14-tailwind-css-in-react)

### Events

15. [Event Handling in React](#15-event-handling-in-react)

### Pro Tips

16. [Pro Tips](#16-pro-tips)

---

## 🧩 1. JSX

### 🎯 What is JSX?

JSX (JavaScript XML) lets you write HTML-like code inside JavaScript. It makes UI code more readable and expressive.

### 🚀 Key Features

- **HTML-like syntax**: Write elements as you would in HTML.
- **JS expressions**: Use `{}` to embed JavaScript (variables, functions, etc.).
- **Not rendered**: `null`, `NaN`, `false`, `undefined` (these are ignored in output)
- **Rendered**: `0`, `""` (these are rendered)

### 📦 Usage Example

```jsx
const userName = "Aayush";
<h1>Hello, {userName}!</h1>;
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">$JSX Interview Questions$</span>**

- **What is JSX and why is it used in React?**
  - _JSX is a syntax extension for JavaScript that lets you write HTML-like code in React. It makes UI code more readable and allows embedding JavaScript expressions directly in markup._
- **What happens if you return `null` or `false` in JSX?**
  - _React ignores `null` and `false` in JSX, so nothing is rendered for those values._
- **Can you use loops or if statements directly inside JSX?**
  - _You cannot use statements like `for` or `if` directly in JSX, but you can use expressions (like ternary or `.map()`) inside curly braces._

---

---

## 🧩 2. Components in React

### 🎯 What are Components?

Components are reusable, independent pieces of UI. They must start with an uppercase letter and return JSX.

### 🚀 Key Features

- **Reusable**: Use the same component in multiple places.
- **Compositional**: Build complex UIs by combining components.
- **Functional or Class**: Most modern React code uses functional components.

### 📦 Usage Example

```jsx
function Welcome() {
  return <h2>Welcome!</h2>;
}
export default Welcome;

// Usage in another file
import Welcome from "./Welcome";
<Welcome />;
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Components Interview Questions</span>**

- **What is a React component?**
  - _A React component is a reusable, self-contained piece of UI that returns JSX and can accept props._
- **Why must component names start with an uppercase letter?**
  - _React treats lowercase tags as HTML elements. Custom components must start with uppercase so React knows to treat them as components._
- **What is the difference between functional and class components?**
  - _Functional components are functions that return JSX. Class components use ES6 classes and can have lifecycle methods and state (before hooks)._

---

---

## 🧩 3. Dynamic Values

### 🎯 What are Dynamic Values?

You can embed JavaScript expressions inside JSX using curly braces `{}`. This allows you to display variables, call functions, or compute values on the fly.

### 📦 Usage Example

```jsx
const age = 21;
<p>Age: {age}</p>;

const getGreeting = () => "Hello!";
<h2>{getGreeting()}</h2>;
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Dynamic Values Interview Questions</span>**

- **How do you embed a JavaScript variable in JSX?**
  - _Wrap the variable in curly braces, e.g., `{age}`._
- **Can you call a function inside JSX? Give an example.**
  - _Yes, you can call a function inside curly braces, e.g., `<h2>{getGreeting()}</h2>`._
- **What is the difference between using `{}` and `""` in JSX?**
  - _Curly braces evaluate JavaScript expressions; quotes create string literals._

---

---

## 🧩 4. Conditional Rendering

### 🎯 What is Conditional Rendering?

Show or hide parts of the UI based on conditions. Use ternary operators, logical `&&`, or functions to decide what to render.

### 📦 Usage Example

```jsx
// Ternary
{
  isLoggedIn ? <Home /> : <Login />;
}

// Logical AND
{
  count > 0 && <span>Items: {count}</span>;
}

// Function-based
function renderStatus(status) {
  if (status === "loading") return <Loader />;
  if (status === "error") return <ErrorMsg />;
  return <Content />;
}
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Conditional Rendering Interview Questions</span>**

- **How do you conditionally render content in React?**
  - _Use ternary operators, logical AND (`&&`), or functions inside curly braces in JSX._
- **What is the difference between using a ternary and logical AND (`&&`) in JSX?**
  - _Ternary returns one of two values; logical AND only renders the right side if the left is true._
- **How would you render nothing for a certain condition?**
  - _Return `null`, `false`, or `undefined` in JSX to render nothing._

---

---

## 🧩 5. Import and Export

### 🎯 Why Import/Export?

Share code between files by exporting and importing components, functions, or variables.

### 📦 Usage Example

```jsx
// Default export
export default App;
import App from "./App";

// Named export
export const Header = () => <header>Header</header>;
import { Header } from "./Header";
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Import/Export Interview Questions</span>**

- **What is the difference between default and named exports?**
  - _Default exports allow one export per file; named exports allow multiple exports per file._
- **How do you import multiple named exports from a file?**
  - _Use curly braces: `import { A, B } from './file'`._
- **Why is it important to use export/import in React projects?**
  - _It enables modular code, code reuse, and better organization._

---

---

## 🧩 6. Loops in JSX

### 🎯 Why Loops in JSX?

Render lists of elements by mapping over arrays. Each child must have a unique `key` prop.

### 📦 Usage Example

```jsx
const movies = [
  { id: 1, name: "Inception" },
  { id: 2, name: "Interstellar" },
];
<ul>
  {movies.map((movie) => (
    <li key={movie.id}>{movie.name}</li>
  ))}
</ul>;
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Loops Interview Questions</span>**

- **Why do you need a unique `key` prop when rendering lists?**
  - _Keys help React identify which items have changed, are added, or are removed._
- **What happens if you forget to add a key in a `.map()` loop?**
  - _React will warn you and may have trouble efficiently updating the list._
- **Can you use `for` loops directly in JSX?**
  - _No, but you can use `.map()` or prepare arrays before returning JSX._

---

---

## 🧩 7. Props

### 🎯 What are Props?

Props (properties) let you pass data from parent to child components. Props are read-only and help make components reusable.

### 📦 Usage Example

```jsx
// Parent
<Card title="Hello" rating={5} />;

// Child (Card.jsx)
export const Card = (props) => (
  <h2>
    {props.title} - {props.rating}
  </h2>
);
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Props Interview Questions</span>**

- **What are props in React?**
  - _Props are inputs to components, passed from parent to child, and are read-only._
- **Are props mutable or immutable?**
  - _Props are immutable; you cannot change them inside the child component._
- **How do you pass a function as a prop?**
  - _Pass the function reference as a prop, e.g., `<Child onClick={handleClick} />`._

---

---

## 🧩 8. React Destructuring Props

### 🎯 Why Destructure Props?

Destructuring makes code cleaner and easier to read, especially with many props.

### 📦 Usage Example

```jsx
// Instead of (props)
export const Card = ({ title, rating }) => (
  <h2>
    {title} - {rating}
  </h2>
);
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Destructuring Props Interview Questions</span>**

- **What is destructuring in the context of React props?**
  - _Destructuring is extracting values from objects/arrays, e.g., `({ title })` instead of `(props)`._
- **Why is destructuring props considered a best practice?**
  - _It makes code cleaner and easier to read, especially with many props._
- **How do you destructure nested props?**
  - _Use nested destructuring: `({ data: { name, rating } })`._

---

---

## 🧩 9. Add CSS Styling

### 🎯 How to Add CSS?

Import CSS files for global or component-specific styles. Use class names as usual.

### 📦 Usage Example

```jsx
// App.css
.main-title {
  color: #007bff;
  font-size: 2rem;
}

// In your component
import './App.css';
<h1 className="main-title">Hello</h1>
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">CSS Interview Questions</span>**

- **How do you add global CSS to a React project?**
  - _Import the CSS file in your JS file, e.g., `import './App.css'`._
- **What is the difference between global and component-scoped CSS?**
  - _Global CSS affects the whole app; component-scoped CSS only affects one component._
- **Can you use CSS preprocessors like SASS with React?**
  - _Yes, you can use SASS, LESS, etc., by configuring your build tools._

---

---

## 🧩 10. Inline CSS in React

### 🎯 Why Inline CSS?

Use the `style` prop for quick, component-scoped styles. The value is a JS object with camelCase keys.

### 📦 Usage Example

```jsx
<h2 style={{ color: "red", fontSize: "20px" }}>Hello</h2>;

const btnStyle = {
  padding: "1rem 2rem",
  backgroundColor: "#333",
  color: "#fff",
};
<button style={btnStyle}>Click Me</button>;
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Inline CSS Interview Questions</span>**

- **How do you apply inline styles in React?**
  - _Use the `style` prop with a JS object, e.g., `style={{ color: 'red' }}`._
- **Why are CSS property names camelCased in React inline styles?**
  - _Because JavaScript object keys cannot have dashes, so `font-size` becomes `fontSize`._
- **What are the limitations of inline styles?**
  - _No pseudo-classes, media queries, or global styles; not ideal for large projects._

---

---

## 🧩 11. Conditional Styling for Dynamic UIs

### 🎯 Why Conditional Styling?

Change styles or classes based on data or state for dynamic UIs.

### 📦 Usage Example

```jsx
const rating = 9.2;
<span className={`rating ${rating >= 8.5 ? 'superhit' : 'average'}`}>{rating}</span>

// Inline style
<button style={{ backgroundColor: isActive ? 'green' : 'gray' }}>Toggle</button>
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Conditional Styling Interview Questions</span>**

- **How do you apply conditional classes in React?**
  - _Use template literals or ternary operators to set className based on conditions._
- **What is the difference between conditional class and conditional inline style?**
  - _Conditional class changes the CSS class; conditional inline style changes the style object directly._
- **How would you highlight an item in a list based on a condition?**
  - _Apply a special class or style if the condition is met, e.g., `className={isActive ? 'active' : ''}`._

---

---

## 🧩 12. CSS Modules

### 🎯 What Are CSS Modules?

CSS Modules are a way to write CSS that is scoped to a specific component, preventing style conflicts and making your styles more maintainable.

### 🚀 Key Features

- **Locally scoped**: Class names are unique to the file/component.
- **No global pollution**: Styles do not leak to other components.
- **Easy to use**: Import as an object and reference classes as properties.

---

### 📦 Usage Example

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">CSS Modules Interview Questions</span>**

- **What are CSS Modules and why are they useful?**
  - _CSS Modules scope CSS to a component, preventing style conflicts and global pollution._
- **How do you use a CSS Module in a React component?**
  - _Import the module as an object and use its properties as class names, e.g., `className={styles.card}`._
- **How do CSS Modules prevent style conflicts?**
  - _They generate unique class names for each component._

#### 1. Create a CSS Module file

`Netflix.module.css`

```css
.card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
}
.superhit {
  color: green;
  font-weight: bold;
}
.average {
  color: orange;
}
```

#### 2. Use in Component

```jsx
import styles from "./Netflix.module.css";

const NetflixSeries = () => {
  const name = "Solo Leveling";
  const rating = 9.5;
  const summary = `In a world where gates connect Earth...`;
  const returnGenre = () => "Adventure, Action-Drama";

  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <h3 className={rating >= 8.5 ? styles.superhit : styles.average}>
        Rating: {rating}
      </h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
    </div>
  );
};
```

---

---

## 🧩 13. Styled Components

### 🎯 What are Styled Components?

Styled-components is a library for React that lets you write CSS directly in your JavaScript files using tagged template literals. It enables dynamic, component-scoped styles and supports conditional logic based on props.

### 📦 Usage Example

```jsx
import styled from "styled-components";

const Button = styled.button`
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 100rem;
  font-size: 1.6rem;
  background-color: ${(props) => (props.rating >= 8.5 ? "#51de51" : "#ffff00")};
  color: var(--btn-color);
  font-weight: bold;
  cursor: pointer;
`;

// Usage in JSX
<Button rating={9.2}>Watch Now</Button>;
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Styled Components Interview Questions</span>**

- **What is styled-components and how does it differ from CSS Modules?**
  - _Styled-components let you write CSS in JS and use props for dynamic styling; CSS Modules are static CSS files._
- **How do you pass props to a styled component?**
  - _Pass props as you would to any component; styled-components can use them in their template literals._
- **What are the benefits of using styled-components?**
  - _Scoped styles, dynamic styling, and no class name collisions._

---

---

## 🧩 14. Tailwind CSS in React

### 🎯 What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It provides low-level utility classes that let you style elements directly in your JSX.

### 📦 Usage Example

```jsx
<div className="flex flex-col gap-6 p-6">
  <h2 className="text-2xl font-bold text-blue-500">Hello</h2>
  <p className="text-3xl font-bold underline">Summary: ...</p>
</div>
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Tailwind CSS Interview Questions</span>**

- **What is Tailwind CSS and how is it used in React?**
  - _Tailwind is a utility-first CSS framework; use its classes directly in your JSX._
- **What are the advantages of utility-first CSS frameworks?**
  - _Faster prototyping, consistent design, and less custom CSS._
- **How do you combine Tailwind with other styling methods?**
  - _You can use Tailwind with CSS Modules or styled-components for advanced use cases._

---

---

## 🧩 15. Event Handling in React

### 🎯 What is Event Handling?

Event handling in React lets you respond to user actions (like clicks, typing, etc.) using functions called event handlers. You attach these handlers to JSX elements using props like `onClick`, `onChange`, etc.

### 📦 Usage Example

```jsx
const handleClick = () => alert('Button clicked!');
<button onClick={handleClick}>Click</button>

// Passing arguments
<button onClick={() => handleClick('Aayush')}>Click Me</button>
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Event Handling Interview Questions</span>**

- **How do you handle events in React?**
  - _Attach event handlers like `onClick` to JSX elements and define the handler as a function._
- **How do you pass arguments to event handlers?**
  - _Use an inline arrow function: `onClick={() => handleClick(arg)}`._
- **What is the difference between native DOM events and React synthetic events?**
  - _React wraps native events in SyntheticEvent for cross-browser compatibility and performance._

---

---

## 16. SyntheticBaseEvent

React wraps browser events in a Synthetic Event for cross-browser consistency. Use event objects in handlers just like native events.

```jsx
<button
  onClick={(e) => {
    console.log(e.type); // 'click'
    console.log(e.target); // the button
  }}
>
  Click
</button>
```

---

## 🧩 16. Pro Tips

- Destructure props for readability
- Use conditional rendering for dynamic UIs
- Use `.map()` for lists
- Use utility CSS (Tailwind) for fast styling
- Use event handlers for interactivity
- Prefer functional components

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Pro Tips Interview Questions</span>**

- **Why is it recommended to use functional components in React?**
  - _They are simpler, easier to test, and work well with hooks._
- **What are the benefits of using `.map()` for rendering lists?**
  - _.map() is declarative, concise, and works well with React's virtual DOM diffing._
- **How do you keep your React codebase maintainable and scalable?**
  - _Use modular components, clear props, and consistent styling practices._
