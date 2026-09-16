const name = "Mekbib"
const role = "Frontend Developer"
const experience = 2
const isAvailable = true

const DeveloperCard = () => {
  return (
    <>
      <p>{name}</p>
      <p>
        {role}
      </p>
      <p>Experience: {experience}</p>
      <p>Available: {isAvailable ? "Yes" : "No"}</p>
    </>
  )
}

export default DeveloperCard
