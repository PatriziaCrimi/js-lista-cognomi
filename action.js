/* ASSIGNMENT
Creare un array contenente dei cognomi in ordine casuale.
Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
Stampare la lista dei cognomi in ordine alfabetico
e comunicare all'utente la posizione in cui si trova il suo cognome
(dopo averlo riordinato).
*/

// ***** SOLUTION A - Capitalizing only first character of input surname *****
console.log('***** SOLUTION A - Capitalizing only first character of input surname *****');

// Initialization of variables
var surnames_list = ['Smith', 'Johnson', 'Brown', 'Williams', 'Miller', 'Davis', 'Anderson', 'Rodriguez', 'Taylor', 'Jackson', 'Lopez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'White', 'Ford'];
console.log('The Surnames List array is: ');
console.log(surnames_list);
console.log('');

// Enter input: new user surname
var new_surname = prompt('Please enter your surname to be added to our mailing-list.');
// Capitalize first letter --> necessary to sort in alphabetical order
var caps_new_surname = new_surname.charAt(0).toUpperCase() + new_surname.slice(1);

// Adding new surname to the Surname List (array)
surnames_list.push(caps_new_surname);

// Check output in Console
console.log('The new user surname is: ' + caps_new_surname + '.');
console.log('The updated Surnames List array is: ');
console.log(surnames_list);
console.log('');

// Alphabetical ordering
surnames_list.sort();
console.log('The Surnames List array sorted in alphabetical order is: ');
console.log(surnames_list);
console.log('');

// Print position of the new user surname added to the array: FOR & WHILE

// ************* SOLUTION NUMBER 1 - FOR LOOP *************
console.log('*** SOLUTION NUMBER 1 - FOR LOOP ***');
// Print Output (position of new surname)
for (i = 0; i < surnames_list.length; i++) {
  if (surnames_list[i] === caps_new_surname) {
    console.log('The new user surname is situated in position number ' + i + ' within the Surnames List array.');
    i++;
    if (i === 1) {
      console.log('Your surname is the ' + i + 'st in the Surnames List.');
      alert('Your surname is the ' + i + 'st in the Surnames List.');
    } else if (i === 2) {
      console.log('Your surname is the ' + i + 'nd in the Surnames List.');
      alert('Your surname is the ' + i + 'nd in the Surnames List.');
    } else if (i === 3) {
      console.log('Your surname is the ' + i + 'rd in the Surnames List.');
      alert('Your surname is the ' + i + 'rd in the Surnames List.');
    } else if (i >= 4) {
      console.log('Your surname is the ' + i + 'th in the Surnames List.');
      alert('Your surname is the ' + i + 'th in the Surnames List.');
    }
  }
}

// ************* SOLUTION NUMBER 2 - WHILE LOOP *************
console.log('*** SOLUTION NUMBER 2 - WHILE LOOP ***')
// Print Output (position of new surname)
i = 0;
while (i < surnames_list.length) {
  if (surnames_list[i] === caps_new_surname) {
    var new_surname_position = i;
    console.log('The new user surname is situated in position number ' + new_surname_position + ' within the Surnames List array.');
    new_surname_position++;
    if (new_surname_position === 1) {
      console.log('Your surname is the ' + new_surname_position + 'st in the Surnames List.');
      alert('Your surname is the ' + new_surname_position + 'st in the Surnames List.');
    } else if (new_surname_position === 2) {
      console.log('Your surname is the ' + new_surname_position + 'nd in the Surnames List.');
      alert('Your surname is the ' + new_surname_position + 'nd in the Surnames List.');
    } else if (new_surname_position === 3) {
      console.log('Your surname is the ' + new_surname_position + 'rd in the Surnames List.');
      alert('Your surname is the ' + new_surname_position + 'rd in the Surnames List.');
    } else if (new_surname_position >= 4) {
      console.log('Your surname is the ' + new_surname_position + 'th in the Surnames List.');
      alert('Your surname is the ' + new_surname_position + 'th in the Surnames List.');
    }
  }
  i++;
}
console.log('');


// *************** Print Output in HTML - SOLUTION A ***************

document.getElementsByClassName('surname');
// Check array in Console
console.log('');
console.log('ARRAY .getElementsByClassName :');
console.log(document.getElementsByClassName('surname'));
for (i = 0; i < document.getElementsByClassName('surname').length; i++) {
  document.getElementsByClassName('surname')[i].innerHTML = surnames_list[i];
}
console.log('');


// ***** SOLUTION B - Standardizing array characters *****
console.log('***** SOLUTION B - Standardizing array characters *****');

// Initialization of variables
var surnames_list = ['smith', 'Johnson', 'Brown', 'Williams', 'MILLER', 'Davis', 'Anderson', 'Rodriguez', 'taylor', 'Jackson', 'LOPEZ', 'harris', 'Clark', 'lewis', 'Robinson', 'White', 'FORD'];
console.log('The Surnames List array is: ');
console.log(surnames_list);
console.log('');

// Enter input: new user surname
new_surname = prompt('Please enter your surname to be added to our mailing-list.');

// Adding new surname to the Surname List (array)
surnames_list.push(new_surname);

// Check output in Console
console.log('The new user surname is: ' + new_surname + '.');
console.log('The updated Surnames List array is: ');
console.log(surnames_list);
console.log('');

// Standardize array characters (including new input)
var lowercase_surnames_list = [];

for (i = 0; i < surnames_list.length; i++) {
  var lowercase_surname = surnames_list[i].toLowerCase();
  lowercase_surnames_list.push(lowercase_surname);
}
// Check output in console (standardized array)
console.log('The Surnames List array standardized to lowercase is: ');
console.log(lowercase_surnames_list);

// Alphabetical ordering
lowercase_surnames_list.sort();
console.log('The Surnames List array sorted in alphabetical order is: ');
console.log(lowercase_surnames_list);
console.log('');

// Capitalizing only first letter surnames (standardizing array)
for (i = 0; i < lowercase_surnames_list.length; i++) {
  var caps_first_surname = lowercase_surnames_list[i].charAt(0).toUpperCase() + lowercase_surnames_list[i].slice(1);
  surnames_list[i] = caps_first_surname;
}
// Check output in console (standardized array)
console.log('The Surnames List array standardized to capitalized first character (already sorted) is : ');
console.log(surnames_list);

// Print position of the new user surname added to the array: INDEXOF()

// *************** Print Output in HTML - SOLUTION B ***************

// document.getElementsByClassName('surname');
// // Check array in Console
// console.log('');
// console.log('ARRAY .getElementsByClassName :');
// console.log(document.getElementsByClassName('surname'));
// for (i = 0; i < document.getElementsByClassName('surname').length; i++) {
//   document.getElementsByClassName('surname')[i].innerHTML = surnames_list[i];
// }
// console.log('');
