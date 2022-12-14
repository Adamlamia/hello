import EditEmployee from "./EditEmployee";

function Employee(params) {
  return (
    <div className="min-w-[350px] max-w-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={params.img}
        alt="Employee's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{params.name}</p>
          <p className="text-slate-500 font-medium">
            {params.role ? params.role : "No role"}
          </p>
        </div>
        <EditEmployee
          id={params.id}
          name={params.name}
          role={params.role}
          updateEmployee={params.updateEmployee}
        />
      </div>
    </div>
  );
}
export default Employee;
