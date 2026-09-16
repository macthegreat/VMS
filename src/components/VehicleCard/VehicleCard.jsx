

const VehicleCard = ({brand, model, year, onDelete}) => {
  return (
    <div>
      <p>{brand}</p>
      <p>{model}</p>
      <p>Year: {year}</p>
      <button onClick={()=>{
        onDelete(brand,model)
      }}>Delete</button>
    </div>
  )
}

export default VehicleCard
