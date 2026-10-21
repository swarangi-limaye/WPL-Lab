import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Student Information</h1>
      <Student name="Riya" course="B.Tech" initialAge={20} />
    </div>
  );
}
export default App;
