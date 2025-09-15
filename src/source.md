---

## 🔗 Tailwind CSS Documentation

For quick reference to all Tailwind utility classes, visit:

[Tailwind CSS Docs](https://tailwindcss.com/docs/)
# ✅ `React JSX` Notes

## ❌ Not Rendered in DOM

React does **not** render the following values:
- `null`
- `NaN`

## ✅ Rendered in DOM

- `0` → Shown
- `""` (empty string) → Blank but rendered

---

## 📦 Fragment Usage Example

```jsx
import { Fragment } from "react";
export const App = () => {
  return (
    <Fragment>
<!-- Removed {% endraw %} tag -->
      <Beta />
      <Beta />
    </Fragment>
  );
};
```
---

## � **Template Literals** (Backticks ``)

### 🎯 **What Are Template Literals?**

Template literals are a way to create strings using **backticks (`)** instead of quotes. They allow you to:

- **Embed variables** directly in strings
- **Create multi-line strings**
- **Execute JavaScript expressions** inside strings

### 🔄 **Regular Strings vs Template Literals**

#### ❌ **Old Way (String Concatenation)**

```jsx
const name = "John";
const age = 25;
const message =
  "Hello, my name is " + name + " and I am " + age + " years old.";
```

#### ✅ **New Way (Template Literals)**

```jsx
const name = "John";
const age = 25;
<!-- Removed {% endraw %} tag -->

### 🧠 **Key Syntax:**

| Syntax                | Purpose                | Example                 |
| --------------------- | ---------------------- | ----------------------- |
| **Backticks** `` ` `` | Wrap the entire string | `` `Hello World` ``     |
| **${variable}**       | Insert variable value  | `` `Name: ${name}` ``   |
| **${expression}**     | Execute JavaScript     | `` `Total: ${5 + 3}` `` |
<!-- Removed {% endraw %} tag -->
---

{% endraw %}

### 🎨 **Template Literals in React JSX**

#### **1. Dynamic Class Names**

```jsx
const rating = 9.2;
const ratingClass = rating >= 8.5 ? "superhit" : "average";

{% endraw %}

// ✅ Template literal for multiple classes
<span className={`rating ${ratingClass}`}>{rating}</span>;

// Result: <span className="rating superhit">9.2</span>
```
<!-- Removed {% endraw %} tag -->
#### **2. Dynamic Styling**

{% endraw %}

```jsx
const isActive = true;
const backgroundColor = "#ff6b6b";

// ✅ Template literal in style
<!-- Removed {% endraw %} tag -->
  style={{
    backgroundColor: `${isActive ? backgroundColor : "#ccc"}`,
    border: `2px solid ${backgroundColor}`,
  }}
>
  Click Me

{% endraw %}
</button>;
```
<!-- Removed {% endraw %} tag -->
#### **3. Multi-line Strings**

```jsx
const summary = `In a world where gates connect Earth to dangerous dimensions, 
hunters with special abilities fight monsters. 

{% endraw %}
<!-- Removed {% endraw %} tag -->

<p>{summary}</p>;

#### **4. Complex Expressions**

<!-- Removed {% endraw %} tag -->

```jsx
const price = 99.99;

{% endraw %}
const discount = 0.15;

<p>
  Price: ${`$${(price * (1 - discount)).toFixed(2)}`}
  <span>Save ${`$${(price * discount).toFixed(2)}`}</span>
</p>;

{% endraw %}
```

---

### 🔍 **Real Examples from Your Code**

{% endraw %}

#### **Example 1: Conditional CSS Classes**

```jsx
// Your SeriesCard component
const rating_condition = rating >= 8.5 ? "superhit" : "average";

// ✅ Template literal combining static + dynamic classes
<span className={`rating ${rating_condition}`}>{rating}</span>;

// Breakdown:
// - `rating ` → Static class (with space)
// - `${rating_condition}` → Dynamic class ("superhit" or "average")
// - Result: "rating superhit" or "rating average"
```
#### **Example 2: Dynamic URLs**

```jsx
const movieId = 123;
const baseUrl = "https://api.movies.com";

// ✅ Template literal for API endpoint
const apiUrl = `${baseUrl}/movies/${movieId}/details`;
// Result: "https://api.movies.com/movies/123/details"
```
#### **Example 3: Dynamic Alt Text**

```jsx
const movieName = "Stranger Things";

// ✅ Template literal for accessibility
<img src={img_url} alt={`${movieName} poster`} width="40%" height="40%" />;
```

---

### 💡 **Pro Tips**

| Tip                   | Description                         | Example                                              |
| --------------------- | ----------------------------------- | ---------------------------------------------------- |
| **Spaces Matter**     | Include spaces in template literals | `` `rating ${condition}` ``                          |
| **Nested Templates**  | Use templates inside templates      | `` `${isActive ? `active ${theme}` : 'inactive'}` `` |
| **Function Calls**    | Call functions inside ${}           | `` `Result: ${calculateTotal()}` ``                  |
| **Ternary Operators** | Use conditionals directly           | `` `${age >= 18 ? 'Adult' : 'Minor'}` ``             |

---

### ✅ Ternary Operator

<button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
```

### ✅ Variable

```jsx
let canWatch = "Not Available";
if (age >= 18) canWatch = "Watch Now";

<button>{canWatch}</button>;
```
```jsx

<button>{watch()}</button>;
```

---

## 🎥 NetflixSeries Component

## 🧩 CSS Modules in React

### 🎯 What Are CSS Modules?

CSS Modules are a way to write CSS that is scoped to a specific component, preventing style conflicts and making your styles more maintainable.

### 🚀 Key Features

- **Locally scoped**: Class names are unique to the file/component.
- **No global pollution**: Styles do not leak to other components.
- **Easy to use**: Import as an object and reference classes as properties.

---

### 📦 Usage Example

#### 1. Create a CSS Module file

`Netflix.module.css`

````css
.card {
### `NetflixSeries.jsx`

```jsx
const NetflixSeries = () => {
  const name = "Solo Leveling";
.superhit {
  const rating = "9.5";
  const summary = `In a world where gates connect Earth...`;
.average {

  const returnGenre = () => "Adventure, Action-Drama";
````
```jsx

export const SeriesCard = ({ data }) => {

  const watch = () => (age >= 18 ? "Watch Now" : "Not Available");

  return (
    <>
      <div>
        <img src="image.png" alt="poster" width="40%" height="40%" />
        <h3>Rating: {rating}</h3>
```

---

### 🧠 How It Works

- **Import**: `import styles from "./Netflix.module.css";`
- **Usage**: `className={styles.card}` or `className={styles.superhit}`
- **Result**: Class names are transformed to unique values (e.g., `card_xyz123`)

---


| Tip              | Description                                              |
| ---------------- | -------------------------------------------------------- |


### 📝 Example: Conditional Styling with CSS Modules

```jsx
<span
  className={`${styles.rating} ${
    rating >= 8.5 ? styles.superhit : styles.average
  }`}
>
  {rating}
```

---

## 🧠 Recap: Why CSS Modules?

- Prevents style conflicts
- Makes components portable
- Encourages modular design

---

        <p>Summary: {summary}</p>
        <p>Genre: {returnGenre()}</p>
        <button>{watch()}</button>
      </div>
    </>

);
};

// ✅ Default Export (Main/Parent Component)
export default NetflixSeries;

// ✅ Named Exports (Child/Additional Components)
export const Header = () => <p>Copyright @AayushDada</p>;
export const Footer = () => <p>Copyright @AayushDada</p>;

````

### `App.jsx`

```jsx
// ✅ Mixed Import: Default + Named Exports
import NetflixSeries, { Footer, Header } from "./components/NetflixSeries";

export const App = () => {
  return (
    <>
      {/* <Header /> */}
      <NetflixSeries />
      {/* <Footer /> */}
  );
};
````

### 🧠 Import Syntax Breakdown

| Import Type | Syntax                                     | Description                    |
| ----------- | ------------------------------------------ | ------------------------------ |
| **Default** | `import NetflixSeries`                     | Main component (no `{}`)       |
| **Named**   | `import { Header, Footer }`                | Additional exports (with `{}`) |
| **Mixed**   | `import NetflixSeries, { Header, Footer }` | Both in one line               |

#### **Key Points:**

- **Default Export**: One per file, usually the main component
- **Named Exports**: Multiple per file, supporting components
- **Curly Braces `{}`**: Indicate named exports, not default
- **Parent/Child**: Conceptual - default is main, named are additional

---

## 📮 `Props` Explained Step-by-Step

### 🎯 **What Are Props?**

Props (properties) are a way for **parent components** to send data to **child components**.

### 🔄 **How Props Work:**

#### **Step 1: Parent Component Sends Data**

```jsx
// Parent component (App.jsx)
const App = () => {
  const movieData = {
    title: "Stranger Things",
    rating: 9.2,
    genre: "Sci-Fi",
  };

  return (
    <div>
      {/* ✅ Sending data to child component */}
      <SeriesCard data={movieData} />
  );
};
```

#### **Step 2: Child Component Receives Data**

```jsx
// Child component (SeriesCard.jsx)
export const SeriesCard = (props) => {
  // ✅ props = { data: { title: "Stranger Things", rating: 9.2, genre: "Sci-Fi" } }
  console.log(props); // Check what we received

  // Extract data from props
  const { img_url, name, rating } = props.data;

  return <h2>{name}</h2>; // Display the data
};
```

---

## 🧹 **Clean Destructuring** (Making Code Simpler)

### ❌ **Old Way (Verbose)**

```jsx
const SeriesCard = (props) => {
  // Step 1: Get props object
  console.log(props); // { data: { title: "...", rating: 9.2 } }

  // Step 2: Extract data from props.data
  const { img_url, name } = props.data;

  // Step 3: Use the data
  return <h2>{name}</h2>;
};
```

### ✅ **Clean Way (Direct Destructuring)**

```jsx
const SeriesCard = ({ data }) => {
  // ✅ Direct destructuring: { data } extracts data from props
  console.log(data); // { title: "...", rating: 9.2 }

  // ✅ Extract all properties at once
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  return (
    <li>
      <img src={img_url} width="40%" height="40%" />
      <h2>Name: {name}</h2>
      <p>Summary: {description}</p>
      <p>Cast: {cast}</p>
      <p>Genre: {genre}</p>
      <a href={watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
```

### 🔍 **Destructuring Breakdown:**

| Code                    | Meaning                         |
| ----------------------- | ------------------------------- |
| `(props)`               | Receive entire props object     |
| `({ data })`            | Extract only `data` from props  |
| `const { name } = data` | Extract `name` from data object |

---

## 👨‍👩‍👧 **Props + `children` Example**

### 📤 **Parent Component:**

```jsx
<ProfileCard name="Alice" age={38} greeting={<strong>Hi Alice!</strong>}>
  {/* ✅ Everything between tags becomes 'children' */}
  <p>Hobbies: Reading, Hiking</p>
  <button>Contact</button>
</ProfileCard>
```

### 📥 **Child Component:**

```jsx
  // - name: "Alice"
  // - greeting: <strong>Hi Alice!</strong>
  // - children: <p>Hobbies...</p> + <button>Contact</button>

  return (
    <>
      <h2>Name: {name}</h2> {/* Alice */}
      <p>Age: {age}</p> {/* 38 */}
      <p>{greeting}</p> {/* <strong>Hi Alice!</strong> */}
      <div>{children}</div> {/* All content between tags */}
    </>
  );
};
```

### 🧠 **Key Concept:**

- **Regular Props**: `name`, `age`, `greeting` (passed as attributes)
- **Children Props**: Content between opening and closing tags

---

## 🧠 React Recap

| Concept            | Description                                   |
| ------------------ | --------------------------------------------- |
| JSX Rendering      | Skips `false`, `null`, `undefined`, `NaN`     |
| Fragment           | Use `<></>` or `<Fragment>` to group elements |
| Conditional Render | Use ternary, variable, or function            |
| Props              | Data from parent to child                     |
| Destructuring      | Cleaner code with `({ prop })`                |
| `props.children`   | Access nested JSX passed to component         |

<br><br>

# 🎨 `Inline Styling` in SeriesCard

This component uses inline styling for certain UI elements.

## 📌 Button Styling

The Watch Now button uses an inline style object defined as:

```jsx
const btn_style = {
  padding: "1.2rem 2.4rem",
  border: "none",
  fontSize: "1.6rem",
  backgroundColor: "var(--btn-hover-bg-color)",
  color: "var(--bg-color)",
};
```

## This is applied to the button like so:

```jsx
<button style={btn_style}>Watch Now</button>
```

## 📌 Heading Styling

A heading also uses inline styles:

```jsx
<h3 style={{ fontSize: "18px" }}>Rating: {rating}</h3>




Dynamic: Can be modified based on props or state.

## ⚠️ Limitations

No support for pseudo-classes like :hover or media queries.

Not ideal for large, consistent design systems.

## 🖼️ Rendered Output Includes:

A card with:

- Thumbnail image (img_url)

- Title (name)

- Rating, Description, Cast, and Genre

- External link button (Watch Now)

<hr>
<br>

## 🎯 `Conditional Styling` with JSX – SeriesCard Component

✅ Objective
Apply different styles based on rating using template literals and a variable-based approach to keep JSX clean and readable.

## 📦 Updated Code Snippet

```jsx
export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: "var(--btn-hover-bg-color)",
    color: "var(--bg-color)",
  };

  // ✅ Conditional class name based on rating
  const rating_condition = rating >= 8.5 ? "superhit" : "average";

  return (
    <li className="card">
      <div>
      </div>
      <div className="card-content">
        <h2>Name: {name}</h2>
        <h3 style={{ fontSize: "18px" }}>
          Rating:
          <span className={`rating ${rating_condition}`}>{rating}</span>
        </h3>
        <p>Summary: {description}</p>
        <p>Cast: {cast}</p>
        <p>Genre: {genre}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
```

---

## ⚡ React useState Hook

### 🎯 What is useState?

`useState` is a React Hook that lets you add state to functional components. State is data that can change over time and cause your component to re-render.

### 🚀 Basic Usage

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initial value is 0
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

### 🧠 How It Works

- `useState(0)` returns an array: `[currentValue, updateFunction]`
- `count` is the current value
- `setCount` is the function to update the value

### 💡 Pro Tips

- You can use any data type (number, string, array, object)
- Calling the update function re-renders the component

---

---

## 🌟 Styled-Components & Advanced Conditional Styling

### 🎯 What are Styled-Components?

Styled-components is a library for React that lets you write CSS directly in your JavaScript files using tagged template literals. It enables dynamic, component-scoped styles and supports conditional logic based on props.

### 🚀 Basic Usage

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
<Button rating={rating}>Watch Now</Button>;
```

### 🧠 Conditional Styling with Props

- You can use props in styled-components to change styles dynamically.
- Example: `background-color` changes based on the `rating` prop.

### 💡 Pro Tips

- Use styled-components for reusable, dynamic styles.
- Combine with CSS Modules for local scoping and global themes.
- You can style any HTML element or custom React component.

---

---

## 🌀 Tailwind CSS in React

### 🎯 What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It provides low-level utility classes that let you style elements directly in your JSX.

### 🚀 How to Use Tailwind in React

- Install Tailwind and add `@import "tailwindcss";` to your main CSS file (e.g., `src/index.css`).
- Use Tailwind utility classes in your JSX elements.

### 📦 Example Usage

```jsx
<div className="flex flex-col gap-6 p-6">
  <h2>Name: {name}</h2>
  <p className="text-3xl font-bold underline">Summary: {description}</p>
</div>
```

### 🧠 Key Features

- Utility classes for layout, spacing, typography, colors, and more
- Responsive design with breakpoints
- Easily combine with other styling methods (CSS Modules, styled-components)

### 💡 Pro Tips

- Use Tailwind for rapid prototyping and consistent design
- Classes can be combined for complex styles
- Works well with React's component structure

---

## 🧠 Key Concepts (Overall)

- JSX skips rendering `false`, `null`, `undefined`, `NaN`
- Fragments group elements: `<></>` or `<Fragment>`
- Conditional rendering: ternary, variable, or function
- Props: parent-to-child data
- Destructuring props for cleaner code
- `props.children` for nested JSX
- Inline styling for quick, scoped styles
- Template literals for dynamic classes/styles
- CSS Modules for locally scoped styles
- useState for state in functional components
- styled-components for dynamic, prop-based styling
- Tailwind CSS for utility-first styling
