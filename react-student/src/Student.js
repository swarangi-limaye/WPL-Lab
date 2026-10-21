import { useState } from "react";

function Student({ name, course, initialAge }) {
  const [age, setAge] = useState(initialAge);
  return (
    <div className="card">
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>
    </div>
  );
}
export default Student;
