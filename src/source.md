
# ✅ React JSX & Props Notes

## ❌ Not Rendered in DOM
React does **not** render the following values:
- `false`
- `null`
- `undefined`
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
      <Beta />
      <Beta />
      <Beta />
      <Beta />
    </Fragment>
  );
};
```

---

## 🔁 Conditional Rendering Examples

### ✅ Ternary Operator
```jsx
<button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
```

### ✅ Variable
```jsx
let canWatch = "Not Available";
if (age >= 18) canWatch = "Watch Now";

<button>{canWatch}</button>
```

### ✅ Function
```jsx
const watch = () => (age >= 18 ? "Watch Now" : "Not Available");

<button>{watch()}</button>
```

---

## 🎥 NetflixSeries Component

### `NetflixSeries.jsx`
```jsx
const NetflixSeries = () => {
  const name = "Solo Leveling";
  const rating = "9.5";
  const summary = \`In a world where gates connect Earth...\`;
  const age = 21;

  const returnGenre = () => "Adventure, Action-Drama";

  const watch = () => (age >= 18 ? "Watch Now" : "Not Available");

  return (
    <>
      <div>
        <img src="image.png" alt="poster" width="40%" height="40%" />
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {summary}</p>
        <p>Genre: {returnGenre()}</p>
        <button>{watch()}</button>
      </div>
    </>
  );
};

export default NetflixSeries;

export const Header = () => <p>Copyright @AayushDada</p>;
export const Footer = () => <p>Copyright @AayushDada</p>;
```

### `App.jsx`
```jsx
import NetflixSeries, { Footer, Header } from "./components/NetflixSeries";

export const App = () => {
  return (
    <>
      {/* <Header /> */}
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      {/* <Footer /> */}
    </>
  );
};
```

---

## 📮 Props Summary

Props allow **parent components** to pass data to **child components**.

```jsx
<SeriesCard data={item} />
```

```jsx
export const SeriesCard = (props) => {
  const { img_url, name, rating } = props.data;
  return <h2>{name}</h2>;
};
```

---

## 🧹 Clean Destructuring

### ❌ Old
```jsx
const SeriesCard = (props) => {
  const { img_url, name } = props.data;
};
```

### ✅ Clean
```jsx
const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  return (
    <li>
      <img src={img_url} width="40%" height="40%" />
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
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

---

## 👨‍👩‍👧 Props + `children` Example

### Parent:
```jsx
<ProfileCard
  name="Alice"
  age={38}
  greeting={<strong>Hi Alice!</strong>}
>
  <p>Hobbies: Reading, Hiking</p>
  <button>Contact</button>
</ProfileCard>
```

### Child:
```jsx
const ProfileCard = ({ name, age, greeting, children }) => {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
};
```

---

## 🧠 React Recap

| Concept             | Description                                        |
|---------------------|----------------------------------------------------|
| JSX Rendering        | Skips `false`, `null`, `undefined`, `NaN`         |
| Fragment             | Use `<></>` or `<Fragment>` to group elements     |
| Conditional Render   | Use ternary, variable, or function                |
| Props                | Data from parent to child                         |
| Destructuring        | Cleaner code with `({ prop })`                   |
| `props.children`     | Access nested JSX passed to component             |
