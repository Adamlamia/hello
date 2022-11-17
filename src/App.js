import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, seRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              seRole(e.target.value);
            }}
          />
          <Employee name="Lamia" role="Leader" />
          <Employee name="Adam" role="Learner" />
          <Employee name="Dezz" role={role} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
