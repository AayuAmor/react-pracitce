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

## 🧩 19. Event Propagation

### 🎯 What is Event Propagation?

Event propagation is the process by which events (like clicks) move through the DOM hierarchy. In React, just like in the browser, events bubble up from the innermost (child) element to the outermost (parent) element. You can control this behavior using the `stopPropagation()` method on the event object.

### 📦 Usage Example (Bubble Phase)

```jsx
import "./EV.css";
export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("Grand Parent Clicked. !!");
  };

  const handleParentClick = (event) => {
    console.log("Parent Clicked !!.");
    event.stopPropagation(); // Prevents bubbling to grandparent
  };

  const handleChildrenClick = (event) => {
    event.stopPropagation();
    console.log(event);
    console.log("Child Clicked");
  };

  return (
    <section className="main-div">
      <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParentClick}>
          <button className="c-div" onClick={handleChildrenClick}>
            Click Me !!
          </button>
        </div>
      </div>
    </section>
  );
};
```

#### How Bubble Phase Works

- Clicking the button triggers `handleChildrenClick`, which calls `event.stopPropagation()`, so the event does not bubble up to parent or grandparent.
- If you click the parent div, `handleParentClick` runs and also calls `event.stopPropagation()`, so the event does not reach the grandparent.
- If you click the grandparent div directly, only `handleGrandParent` runs.

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Event Propagation Interview Questions</span>**

- **What is event propagation in React?**
  - _Event propagation is the process where an event moves from the target element up through its ancestors (bubbling) or down (capturing). React uses bubbling by default._
- **How do you stop an event from bubbling up in React?**
  - _Call `event.stopPropagation()` inside your event handler._
- **Why might you want to stop event propagation?**
  - _To prevent parent elements from responding to an event that was already handled by a child._
- **What parameter must you accept in your event handler to use stopPropagation()?**
  - _You must accept the event object (commonly named `event` or `e`) as a parameter._
- **Does React use native DOM events or something else?**
  - _React uses SyntheticEvent, which wraps native events for cross-browser compatibility, but propagation works the same way._

---

### 🌀 Capture vs Bubble Phase in Event Propagation

In React (and the DOM), events can be handled in two phases:

- **Capture phase**: The event travels from the root down to the target element. In React, you handle this with `onClickCapture` (or any `on<Event>Capture`).
- **Bubble phase**: The event travels from the target element up to the root. In React, you handle this with the regular `onClick` (or any `on<Event>`).

#### 📦 Usage Example (Capture Phase)

```jsx
return (
  <section className="main-div">
    <div className="g-div" onClickCapture={handleGrandParent}>
      <div className="p-div" onClickCapture={handleParentClick}>
        <button className="c-div" onClickCapture={handleChildrenClick}>
          Click Me !!
        </button>
      </div>
    </div>
  </section>
);
```

#### How Capture Phase Works

- With `onClickCapture`, the event is handled during the capture phase, so the outermost handler (grandparent) runs first, then parent, then child.
- With regular `onClick`, the event is handled during the bubble phase, so the innermost handler (child) runs first, then parent, then grandparent.

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Capture vs Bubble Phase Interview Questions</span>**

- **What is the difference between the capture and bubble phase in event propagation?**
  - _Capture phase goes from root to target; bubble phase goes from target to root. React supports both with `on<Event>Capture` and `on<Event>`._
- **How do you handle events in the capture phase in React?**
  - _Use `onClickCapture` (or similar) instead of `onClick`._
- **Which handler runs first if both onClick and onClickCapture are present?**
  - _The `onClickCapture` handler runs first (capture phase), then `onClick` (bubble phase)._
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

### ❓ Common Props Doubts

- **Can I name props anything I want?**
  - _Yes! The prop name is your choice. Just use the same name when passing and receiving it. For example, `<Card info={data} />` and `export const Card = ({ info }) => ...`._
- **Is destructuring props required?**
  - _No, it's optional. You can use `props.title` or destructure as `{ title }`. Destructuring just makes code cleaner when using many props._
- **What are props, really?**
  - _Props are just properties (values or functions) passed from a parent to a child component. They let components communicate and share data._
- **Can I access the key prop inside a child component?**
  - _No. The `key` prop is special—React uses it internally for list rendering. If you need the id or another value, pass it as a separate prop._
- **Is the key prop required when using map?**
  - _Yes, you should always provide a unique `key` when rendering lists with `.map()`. This helps React track items efficiently._
- **What happens if I use a non-unique or changing key?**
  - _React may mix up components, lose state, or cause bugs. Always use a stable, unique value for `key` (like an id)._

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

### What is SyntheticBaseEvent ?

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

## 🧩 16. Event Handling as Props

### 🎯 What is Event Handling as Props?

Event handling as props is a React pattern where event handler functions are passed from a parent component to a child component via props. This allows the parent to control what happens when an event occurs in the child, enabling better code reuse and separation of concerns.

### 📦 Usage Example

```jsx
// Parent Component
export const EventProps = () => {
  const handleOnClick = (userName) => {
    console.log(`Hay ${userName}, Welcome`);
  };
  const handleHover = (userName) => {
    console.log(`Thanks For Hover me ${userName}`);
  };

  return (
    <WelcomeUser
      onClick={() => handleOnClick("Aayush")}
      onMouseEnter={() => handleHover("Aayush")}
    />
  );
};

// Child Component
const WelcomeUser = (props) => {
  const handleNewClick = () => {
    console.log(`Hello Bro, You Clicked Me For More..`);
    props.onClick();
  };

  return (
    <>
      <button onClick={() => props.onClick()}>Click Me!!</button>
      <button onMouseEnter={() => props.onMouseEnter()}>Hover Me!!!</button>
      <button onClick={() => handleNewClick()}>Click Me For More !!</button>
    </>
  );
};
```

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Event Handling as Props Interview Questions</span>**

- **What does it mean to pass an event handler as a prop in React?**
  - _It means sending a function from a parent to a child component via props, so the child can call it when an event occurs._
- **Why would you pass event handlers as props instead of defining them in the child?**
  - _This allows the parent to control the behavior, making components more reusable and keeping business logic in one place._
- **How does the child component use an event handler received as a prop?**
  - _The child attaches the function to an event (like onClick) and calls it, optionally passing arguments._
- **Can the child component modify the event handler function it receives?**
  - _No, but it can wrap or call it with different arguments. The function itself is controlled by the parent._

## 🧩 18. Event Propagation

### � Capture vs Bubble Phase in Event Propagation

In React (and the DOM), events can be handled in two phases:

- **Capture phase**: The event travels from the root down to the target element. In React, you handle this with `onClickCapture` (or any `on<Event>Capture`).
- **Bubble phase**: The event travels from the target element up to the root. In React, you handle this with the regular `onClick` (or any `on<Event>`).

#### 📦 Usage Example (Capture Phase)

```jsx
return (
  <section className="main-div">
    <div className="g-div" onClickCapture={handleGrandParent}>
      <div className="p-div" onClickCapture={handleParentClick}>
        <button className="c-div" onClickCapture={handleChildrenClick}>
          Click Me !!
        </button>
      </div>
    </div>
  </section>
);
```

#### How it works

- With `onClickCapture`, the event is handled during the capture phase, so the outermost handler (grandparent) runs first, then parent, then child.
- With regular `onClick`, the event is handled during the bubble phase, so the innermost handler (child) runs first, then parent, then grandparent.

#### Interview Q&A

**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Capture vs Bubble Phase Interview Questions</span>**

- **What is the difference between the capture and bubble phase in event propagation?**
  - _Capture phase goes from root to target; bubble phase goes from target to root. React supports both with `on<Event>Capture` and `on<Event>`._
- **How do you handle events in the capture phase in React?**
  - _Use `onClickCapture` (or similar) instead of `onClick`._
- **Which handler runs first if both onClick and onClickCapture are present?**
  - _The `onClickCapture` handler runs first (capture phase), then `onClick` (bubble phase)._

### �🎯 What is Event Propagation?

Event propagation is the process by which events (like clicks) move through the DOM hierarchy. In React, just like in the browser, events bubble up from the innermost (child) element to the outermost (parent) element. You can control this behavior using the `stopPropagation()` method on the event object.

### 📦 Usage Example

```jsx
import "./EV.css";
export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("Grand Parent Clicked. !!");
  };

  const handleParentClick = (event) => {
    console.log("Parent Clicked !!.");
    event.stopPropagation(); // Prevents bubbling to grandparent
  };

  const handleChildrenClick = (event) => {
    event.stopPropagation();
    console.log(event);
    console.log("Child Clicked");
  };

  return (
    <section className="main-div">
      <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParentClick}>
          <button className="c-div" onClick={handleChildrenClick}>
            Click Me !!
          </button>
        </div>
      </div>
    </section>
  );
};
```

### 🔎 How it works

- Clicking the button triggers `handleChildrenClick`, which calls `event.stopPropagation()`, so the event does not bubble up to parent or grandparent.
- If you click the parent div, `handleParentClick` runs and also calls `event.stopPropagation()`, so the event does not reach the grandparent.
- If you click the grandparent div directly, only `handleGrandParent` runs.

<br>
**<span style="color: #FFD600; font-size: 1.5em; font-weight: 900;">Event Propagation Interview Questions</span>**

- **What is event propagation in React?**
  - _Event propagation is the process where an event moves from the target element up through its ancestors (bubbling) or down (capturing). React uses bubbling by default._
- **How do you stop an event from bubbling up in React?**
  - _Call `event.stopPropagation()` inside your event handler._
- **Why might you want to stop event propagation?**
  - _To prevent parent elements from responding to an event that was already handled by a child._
- **What parameter must you accept in your event handler to use stopPropagation()?**
  - _You must accept the event object (commonly named `event` or `e`) as a parameter._
- **Does React use native DOM events or something else?**
  - _React uses SyntheticEvent, which wraps native events for cross-browser compatibility, but propagation works the same way._

## 🧩 19. Pro Tips

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
