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
            <Employee name="Lamia" role="Project Manager" img="\src\img\projectLeader.jpg"/>
            <Employee name="Adam" role="Design Assistant"  />
            <Employee name="Dezz" role={role} />
            <Employee name="Roxane" role="Analysist Team"/>
            <Employee name="Damian" role="Analysist Team"  />
            <Employee name="Felix" role={role} />
            <Employee name="Remy" role="Analysist Team"/>
            <Employee name="Jerelyne" role="Analysist Team"  />
            <Employee name="James" role={role} />
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
