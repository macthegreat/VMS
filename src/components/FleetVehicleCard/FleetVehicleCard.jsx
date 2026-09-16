

const FleetVehicleCard = ({name,
plateNumber,
year,
status,
engineHours,
distance,
features,
onViewDetails,
onDelete}) => {
  return (
     <div className="dashboard-card">
      <h2>Vehicle: {name}</h2>
       <p>Plate: {plateNumber}</p>
        <p>Year: {year}</p>
         <p>Status: {status === "working" ? "🟢 Working" :status ==="Maintenance" ? "🟡 Maintenance" : "🔴 Offline"}</p>
          <p>Engine Hours: {engineHours}</p>
           <p>Distance: {distance} km</p>
          <p>features: </p>
           <ul>
        {features.map((feat, index) => (
          <li key={index}>{feat}</li>
        ))}
      </ul>
          <button onClick={()=>{
            onViewDetails(name,plateNumber)
          }}>View</button>
         <button onClick={()=>{
        onDelete(name,plateNumber)
      }}>Delete</button>
           
    </div>

  )
}

export default FleetVehicleCard
