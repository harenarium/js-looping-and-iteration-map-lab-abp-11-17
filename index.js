// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(name) {return name.toLowerCase()})
}

/* these two also work
function nameToAttributes(drivers){
  const newArr = []
  for(const fullname of drivers){
    let spaceSwitch = true
    let firstName = ""
    let lastName = ""
    for (const char of fullname){
      if (char === " "){
        spaceSwitch = false
        continue
      }
      spaceSwitch ? firstName = firstName + char : lastName = lastName + char
    }
    newArr.push({'firstName':firstName,'lastName':lastName})
  }
  return newArr
}


function nameToAttributes(drivers){
  return drivers.map(function(fullName) {const firstName = fullName.split(' ')[0]; const lastName = fullName.split(' ')[1]; return {'firstName':firstName,'lastName':lastName}})
}
*/ 

function nameToAttributes(drivers){
  return drivers.map(function(fullName) {return {'firstName':fullName.split(' ')[0],'lastName':fullName.split(' ')[1]}})
}




function attributesToPhrase(drivers){
  return drivers.map(function(driver) {return `${driver.name} is from ${driver.hometown}`})
}
