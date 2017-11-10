// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(name) {return name.toLowerCase()})
}


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

function attributesToPhrase(drivers){
  return drivers.map(function(driver) {return `${driver.name} is from ${driver.hometown}`})
}
