function findHousing(housingToFind,housingList)
{
	let i = 0

	while (i < housingList.length) {
  	if (housingList[i].toLowerCase() == housingToFind.toLowerCase()) { 
      return [i + 1, housingToFind]
		}
    i++
	}
  return null
}

//Use console.log to debug you're code ! It is very useful
console.log("I'm debugging")

//Some code to display your function output: (you must modify it but /!\ do not deliver it /!\ ). Only deliver your function
displayResult(findHousing("Igloo", ["Flat", "House", "Hut", "House", "Igloo"]))// Write your code here...
