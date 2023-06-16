const ageUser = prompt("Ваш рік народження?")
const cityUser = prompt("В якому місті проживаєте?");
const sportUser = prompt("Який Ваш улюблений вид спорту?");
const citys = ['Київ', 'Вашингтон', 'Лондон'];
const sports = ['Footbool', 'Tenis', 'Swimming'];
const sportsman = ['А.Шевченко', 'Світоліна', 'М. Романчук'];

let user = '';

//вік користувача
let newAge = new Date().getFullYear();
let age = newAge - ageUser;

//якщо корист. не вказав дані
if(ageUser === null || cityUser === null || sportUser === null){
  user = `"Шкода, що Ви не захотіли ввести свій(є):"\n`;

  if(ageUser === null){
    user += `Ваш рік народження!\n`;
  }
  if(cityUser === null){
    user += 'Ваше місто!\n';
  }
  if(sportUser === null){
    user += 'Ваш вид спорту! \n'
  }
}
  else if(ageUser){
  user = (`Вам - ${age} років! \n`)
    
 //місто user
switch (cityUser){
  case citys[0]:
  case citys[1]:
  case citys[2]:
    user += `Ти живеш у столиці ${cityUser}! \n`;
  break;
  default:
    user += `Ти живеш у місті ${cityUser}! \n`;
  break;
}
switch (sportUser) {
  case sports[0]:
    user += `“Круто! Хочеш стати як - ${sportsman[0]}!” \n`;
  break;
    case sports[1]:
    user += `“Круто! Хочеш стати як - ${sportsman[1]}!” \n`;
  break;
    case sports[2]:
    user += `“Круто! Хочеш стати як ${sportsman[2]}!” \n`;
  break;
  default:
    user += `Ваш улюблений вид спорту: ${sportUser}! \n`;
  break;
} 
  
  } 
alert(user);
