
import './App.css'
import Header from './components/Header/Header'
import DeveloperProfile from './components/DeveloperProfile/DeveloperProfile'
import Skills from './components/Skills/Skills'
import DeveloperCard from './components/DeveloperCard/DeveloperCard'
import DeveloperStats from './components/DeveloperStats/DeveloperStats'
import DeveloperStatus from './components/DeveloperStatus/DeveloperStatus'
import EmployeeCard from './components/EmployeeCard/EmployeeCard'
import VehicleCard from './components/VehicleCard/VehicleCard'
import DashboardCard from './components/DashboardCard/DashboardCard'
import FleetVehicleCard from './components/FleetVehicleCard/FleetVehicleCard'



function App() {
  function handleDelete(brand, model) {
    console.log(`${brand} ${model} Deleted`);
  }
  function onViewDetails (name, plateNumber){
    console.log(`Viewing ${name} - ${plateNumber}`)
  }
  function onDelete (name, plateNumber){
    console.log(`${name} - ${plateNumber} deleted`)
  }

  return (
    <>

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
      <div className="dashboard-card">
        <DashboardCard>
          <h1>Total Vehicles</h1>
          <p>121</p>
        </DashboardCard>
        <DashboardCard>
          <h1>Maintenance Due</h1>
          <p>12</p>
        </DashboardCard>
        <DashboardCard>
          <h1>Active Drivers</h1>
          <p>88</p>
        </DashboardCard>
      </div>
<div className="fleet-card">

  <FleetVehicleCard
  name="Toyota Hilux"
  plateNumber="AA-12345"
  year={2022}
  status={"working"}
  engineHours={1250}
  distance={45320}
  features={[
  "GPS",
  "Geofence",
  "Engine Monitoring"
]}
onViewDetails={onViewDetails}
onDelete={onDelete}


  />
    <FleetVehicleCard
  name="Isuzu NPR"
  plateNumber="AA-67890"
  year={2021}
  status={"Maintenance"}
  engineHours={980}
  distance={32100}
  features={[
  "GPS",
  "Engine Monitoring",
  "Maintenance Tracking"
]}
onViewDetails={onViewDetails}
onDelete={onDelete}

  />
    <FleetVehicleCard
  name="Mercedes Actros"
  plateNumber="AA-24680"
  year={2023}
  status={"Offline"}
  engineHours={640}
  distance={18200}
  features={[
  "GPS",
  "Geofence",
  "Driver Monitoring"
]}
onViewDetails={onViewDetails}
onDelete={onDelete}

  />

</div>
  

    </>
  )


}

export default App
