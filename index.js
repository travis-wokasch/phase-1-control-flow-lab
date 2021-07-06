function scuberGreetingForFeet(ride){
  if (ride <= 400){
  return "This one is on me!"
  }
  else if (400 < ride && ride < 2500){
    return "I will gladly take your thirty bucks."
  }
  else if (ride > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case tip = 'generous' :
      return 'Thank you so much.'
     case tip = 'not as generous' :
       return 'Thank you.'
     default:
       return "Bye."
  }
}