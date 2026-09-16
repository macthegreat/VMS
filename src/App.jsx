
import './App.css'
import Header from './components/Header/Header'
import DeveloperProfile from './components/DeveloperProfile/DeveloperProfile'
import Skills from './components/Skills/Skills'
import DeveloperCard from './components/DeveloperCard/DeveloperCard'
import DeveloperStats from './components/DeveloperStats/DeveloperStats'
import DeveloperStatus from './components/DeveloperStatus/DeveloperStatus'
import EmployeeCard from './components/EmployeeCard/EmployeeCard'
import VehicleCard from './components/VehicleCard/VehicleCard'



function App() {
 function handleDelete (brand,model){
   console.log(`${brand} ${model} Deleted`);
 }

  return (
    <>
  <Header />
  <DeveloperProfile />
  <Skills />
  <DeveloperCard />
  <DeveloperStats/>
  <DeveloperStatus/>
  <div className="employee">
  
    <EmployeeCard
  name="Mekbib Kassahun"
  role="Frontend Developer"
  department="Engineering"
  experience={3}
  isAvailable={true}
  skills={["JavaScript", "React", "Git"]}
/>
<EmployeeCard
  name="Abebe Kebede"
  role="Backend Developer"
  department="Engineering"
  experience={2}
  isAvailable={false}
  skills={["C#", ".NET", "PostgreSQL"]}
/>
  </div>
  <div className="vehicle-info">
   
    <VehicleCard
    brand="Toyota"
    model="Hilux"
    year={2022}
    onDelete={handleDelete}
    />
    
    <VehicleCard
    brand="Isuzu"
    model="NPR"
    year={2021}
    onDelete={handleDelete}
    />
    <VehicleCard
    brand="Mercedes"
    model="Actros"
    year={2023}
    onDelete={handleDelete}
    />
    

  </div>
  
    </>
  )
 
 
}

export default App
