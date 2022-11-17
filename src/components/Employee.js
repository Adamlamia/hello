function Employee(params) {
    return (
        <>
            <h3>Employee {params.name}</h3>
            <h4>{params.role ? params.role : "no role"}</h4>

        </>
    )
}
export default Employee;