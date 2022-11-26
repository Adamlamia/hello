import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, seRole] = useState("dev"); //to give pre definition and then manipulated
  const [employees, setEmployees] = useState([
    {
      name: "Lamia",
      role: "Project Manager",
      img: "https://picsum.photos/200",
    },
    {
      name: "Adam",
      role: "Design Assistant",
      img: "https://picsum.photos/300",
    },
    {
      name: "Roxane",
      role: "Design Assistant",
      img: "https://picsum.photos/400",
    },
    {
      name: "User 1",
      role: "Employee 1",
      img: "https://picsum.photos/500",
    },
    {
      name: "User 2",
      role: "Employee 2",
      img: "https://picsum.photos/600",
    },
    {
      name: "User 3",
      role: "Employee 3",
      img: "https://picsum.photos/700",
    },
  ]);
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
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4());//to see the unique key given to each child
              return(
                <Employee
                key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                />
                )
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;