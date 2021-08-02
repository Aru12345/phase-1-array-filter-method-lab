// Code your solution here
/*function findMatching(drivers,string){
 for(const elements of drivers){
   if(elements ===string){
     return string.toUpperCase()
   }
 }
}*/
function findMatching(names,string){
   return names.filter(match=>match.toLowerCase()===string.toLowerCase())
}
function fuzzyMatch(names,string){
  return names.filter(letter=>letter.charAt(0)===string.charAt(0))
}
function matchName(names,string){
  return names.filter(nameProperty=>nameProperty.name===string)
}