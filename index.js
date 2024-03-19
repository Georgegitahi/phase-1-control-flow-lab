function scuberGreetingForFeet(somevalue){
  let result
  if (somevalue <= 400) {
    result = "This one is on me!";
}
  else if (somevalue > 400  && somevalue <2000){
    result ='That will be twenty bucks.';
  }
  else if (somevalue > 2000){
    result = 'I will gladly take your thirty bucks.';
  }
   if (somevalue > 2500){
    result = 'No can do.';
  }
return result
}
function ternaryCheckCity(city){
  let result
  if (city === "NYC"){
    result= "Ok, sounds good."
  }
  else if (city ==="Pittsburgh" ){
    result = "No go."
  }
  return result
}

function switchOnCharmFromTip(tip){
  let result 
  if (tip ==='generous'){
  result = 'Thank you so much.'
  }
  else if ( tip === 'not as generous'){
    result= 'Thank you.'
  }
  else if (tip === 'thanks for everything'){
    result='Bye.'
  }
  return result
}