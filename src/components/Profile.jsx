// Main Profile component that renders multiple ProfileCard components
function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>

      {/* ProfileCard for Alice with custom greeting and children */}
      <ProfileCard
        name="Alice"
        age={38}
        greeting={
          <div>
            <strong>Hi Alice, have a wonderful day !!!</strong>
          </div>
        }
      >
        {/* Children passed to ProfileCard */}
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      {/* ProfileCard for Bob with custom greeting and children */}
      <ProfileCard
        name="Bob"
        age={25}
        greeting={
          <div>
            <strong>Hello Bob, Keep up the great work!!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

export default Profile;

// Reusable ProfileCard component that accepts props
function ProfileCard(props) {
  // Destructure props for cleaner code
  const { name, age, greeting, children } = props;

  return (
    <>
      {/* Display the name */}
      <h2>Name: {name}</h2>

      {/* Display the age */}
      <p>Age: {age}</p>

      {/* Render the greeting JSX */}
      <p>{greeting}</p>

      {/* Render any children (extra JSX) passed between <ProfileCard> tags */}
      <div>{children}</div>
    </>
  );
}
