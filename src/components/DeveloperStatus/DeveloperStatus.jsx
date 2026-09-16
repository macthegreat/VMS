const developerName = "Mekbib"
const role = "Frontend Developer"
const isAvailable = true
const profileImage = "https://example.com/profile.jpg"
const experience = 2


const DeveloperStatus = () => {
  return (
    <div className="developer-card">
      <img src={profileImage} alt={developerName}/>

      <p>{developerName}</p>
      <p>{role}</p>
      <p>Experience: {experience} years</p>
     
   <p className={isAvailable ? "available" : "unavailable"}>
  {isAvailable ? "Available for work" : "Not available for work"}
</p>
   
    </div>
  )
}

export default DeveloperStatus
