

const EmployeeCard = ({name , role, department , experience, isAvailable ,skills
}) => {
  return (
<div>
    <p>{name}</p>
    <p>{role}</p>
    <p>{department}</p>
    <p>{experience}</p>
    <p>Status: {isAvailable ? "Available" : "Not Available"}</p>
    <p>Skills:{skills[0]}</p>
    <p>{skills[1]}</p>
    <p>{skills[2]}</p>
    </div>
  )
}

export default EmployeeCard
