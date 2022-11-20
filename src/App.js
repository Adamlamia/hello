import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, seRole] = useState("dev"); //to give pre definition and then manipulated
  const showEmployees = true;
  return (
    <div className="App bg-slate-700">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              seRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap">
            <Employee name="Lamia" role="Project Manager" img="https://picsum.photos/200"/>
            <Employee name="Adam" role="Design Assistant" img="https://picsum.photos/200"/>
            <Employee name="Dezz" role={role} img="https://picsum.photos/200"/>
            <Employee name="Roxane" role="Analysist Team" img="https://picsum.photos/200"/>
            <Employee name="Damian" role="Analysist Team" img="https://picsum.photos/200"/>
            <Employee name="Felix" role={role} img="https://picsum.photos/200"/>
            <Employee name="Remy" role="Analysist Team" img="https://picsum.photos/200"/>
            <Employee name="Jerelyne" role="Analysist Team" img="https://picsum.photos/200"/>
            <Employee name="James" role={role} img="https://picsum.photos/200"/>
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
