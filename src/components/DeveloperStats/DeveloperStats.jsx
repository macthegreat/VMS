const firstName = "Mekbib"
const lastName = "Kassahun"
const yearsCoding = 3
const skills = ["JavaScript", "React", "Node.js"]
const isLearning = true

const DeveloperStats = () => {
  return (
    <div>
      <p>{firstName} {lastName}</p>
       <p>Years coding: {yearsCoding}</p>
       <p>Number of skills: {skills.length}</p>
       <p>Primary skill: {skills[0]}</p>
       <p>Status: {isLearning ? "Currently learning" : "Not currently learning"}</p>
    </div>
  )
}

export default DeveloperStats
