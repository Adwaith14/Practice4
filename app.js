//Nuclear Facility Alert System
let coreTemp = 1100;
let coolentFlowActive = false;
let backupGen = true;
let reactorPressure = 800;
let isManualOverrideEngaged = false;
let systemMessage = "S";
let alertLevel = "Normal" //Warning,Normal,Evacuate, SCRAM
let radiationLeak = false;
let containmentSealsEngaged = true;
if (isManualOverrideEngaged === true) {
   systemMessage = "Manual Control engaged by chief engineer";
   alertLevel = "Normal";
} else if (radiationLeak === true) {
   alertLevel = "Evacuate";
   containmentSealsEngaged = true;
   systemMessage = "Critical: Containment Breach!!!!Evacuate Immediately!!!!"
} else {
   if ((coolentFlowActive === false) && (coreTemp > 1500 || reactorPressure > 1000)) {
      alertLevel = "SCRAM";
      systemMessage = "CRITICAL:Temperature rising Rapidly.....Evacuate Immediately"
   } else if ((coreTemp > 1000 || reactorPressure > 800)) {
      alertLevel = "Warning";
      systemMessage = "Warning:Temperature exceeding Normal Limits!!!"
   } else {
      if ((backupGen === true) && (coreTemp > 750)) {
         alertLevel = "Warning";
         systemMessage = "Warning:System On Generator, Temperature Raising rapidly!!!"
      } else {
         alertLevel = "Normal";
         systemMessage = "Plant is in Normal State"
      }
   }
}
console.log(`Alert Level: ${alertLevel}`);
console.log(`System Message: ${systemMessage}`)