
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         const missionTarget = document.getElementById("missionTarget");
         let destination = [3]
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[destination].name}</li>
            <li>Diameter: ${json[destination].diameter}</li>
            <li>Star: ${json[destination].star}</li>
            <li>Distance from Earth: ${json[destination].distance}</li>
            <li>Number of Moons: ${json[destination].moons}</li>
         </ol>
         <img src="${json[destination].image}">
         `;
         
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      const faultyItems = document.getElementById("faultyItems");
      const launchStatus = document.getElementById("launchStatus");
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
     
      
      
   
      if (!isNaN(pilotName.value) || pilotName.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      };
      
      if (!isNaN(copilotName.value) || copilotName.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      };
      
      if (isNaN(fuelLevel.value) || fuelLevel.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      };
      
      if (isNaN(cargoMass.value) || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      };
      
      
      if (cargoMass.value > 10000 && fuelLevel.value < 10000) {
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         faultyItems.style.visibility = "visible";
         faultyItems.innerHTML = `
         <ol>
         <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch</li>
         <li id="copilotStatus">Copilot ${copilotName.value} is ready for launch</li>
         <li id="fuelStatus">Fuel level too low for launch</li>
         <li id="cargoStatus">Cargo mass too high for launch </li>
     </ol>`;
     event.preventDefault();
      }

      if (cargoMass.value > 10000 && fuelLevel.value > 10000) {
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         faultyItems.style.visibility = "visible";
         faultyItems.innerHTML = `
         <ol>
         <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch</li>
         <li id="copilotStatus">Copilot ${copilotName.value} is ready for launch</li>
         <li id="fuelStatus">Fuel level ready for launch</li>
         <li id="cargoStatus">Cargo mass too high for launch </li>
     </ol>`;
     event.preventDefault();
      }
      
      if (cargoMass.value < 10000 && fuelLevel.value < 10000){
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         faultyItems.style.visibility = "visible";
         faultyItems.innerHTML = `
         <ol>
         <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch</li>
         <li id="copilotStatus">Copilot ${copilotName.value} is ready for launch</li>
         <li id="fuelStatus">Fuel level too low for launch</li>
         <li id="cargoStatus">Cargo mass low enough for launch </li>
     </ol>`;
     event.preventDefault();
      };

      if (cargoMass && fuelLevel && pilotName && copilotName){
         launchStatus.style.color = "green";
         launchStatus.innerHTML = `Shuttle is ready for launch!`;
         faultyItems.style.visibility = "visible";
         faultyItems.innerHTML = `
         <ol>
         <li id="pilotStatus">Pilot ${pilotName.value} is ready for launch!</li>
         <li id="copilotStatus">Copilot ${copilotName.value} is ready for launch!</li>
         <li id="fuelStatus">Fuel level ready for launch!</li>
         <li id="cargoStatus">Cargo mass low enough for launch!</li>
     </ol>`;
     event.preventDefault();
      };


    
   });
  
});


