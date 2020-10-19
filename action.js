/* ASSIGNMENT
Creare un array contenente dei cognomi in ordine casuale.
Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
Stampare la lista dei cognomi in ordine alfabetico
e comunicare all'utente la posizione in cui si trova il suo cognome
(dopo averlo riordinato).
*/

// Initialization of variables
var surnames_list = ['Smith', 'Johnson', 'Brown', 'Williams', 'Miller', 'Davis', 'Anderson', 'Rodriguez', 'Taylor', 'Jackson', 'White', 'Lopez', 'Harris', 'Clark', 'Lewis', 'Robinson'];
console.log('The Surnames\' List array is: ');
console.log(surnames_list);

// Enter input: new user surname
var new_surname = prompt('Please enter your surname to be added to our mailing-list.');

// Adding new surname to the Surname List (array)
surnames_list.push(new_surname);

// Check output in Console
console.log('The new user surname is: ' + new_surname + '.');
console.log('The updated Surnames\' List array is: ');
console.log(surnames_list);

// Alphabetical ordering
surnames_list.sort();
console.log(surnames_list);


// ************* SOLUTION NUMBER 1 - FOR LOOP *************
console.log('*** SOLUTION NUMBER 1 - FOR LOOP ***')
// Print Output: Position of the new user surname added to the array
for (var i = 0; i < surnames_list.length; i++) {
  if (surnames_list[i] === new_surname) {
    console.log('The new user surname is situated in position number ' + i + ' within the Surnames\' List array.');
    i++;
    if (i === 1) {
      console.log('Your surname is the ' + i + 'st in the Surnames\' List.');
      alert('Your surname is the ' + i + 'st in the Surnames\' List.');
    } else if (i === 2) {
      console.log('Your surname is the ' + i + 'nd in the Surnames\' List.');
      alert('Your surname is the ' + i + 'nd in the Surnames\' List.');
    } else if (i === 3) {
      console.log('Your surname is the ' + i + 'rd in the Surnames\' List.');
      alert('Your surname is the ' + i + 'rd in the Surnames\' List.');
    } else if (i >= 4) {
      console.log('Your surname is the ' + i + 'th in the Surnames\' List.');
      alert('Your surname is the ' + i + 'th in the Surnames\' List.');
    }
  }
}
console.log('');


// ************* SOLUTION NUMBER 2 - WHILE LOOP *************
console.log('*** SOLUTION NUMBER 2 - WHILE LOOP ***')
i = 0;
while (i < surnames_list.length) {
  if (surnames_list[i] === new_surname) {
    var new_surname_position = i;
    console.log('The new user surname is situated in position number ' + new_surname_position + ' within the Surnames\' List array.');
    new_surname_position++;
    if (new_surname_position === 1) {
      console.log('Your surname is the ' + new_surname_position + 'st in the Surnames\' List.');
      alert('Your surname is the ' + new_surname_position + 'st in the Surnames\' List.');
    } else if (new_surname_position === 2) {
      console.log('Your surname is the ' + new_surname_position + 'nd in the Surnames\' List.');
      alert('Your surname is the ' + new_surname_position + 'nd in the Surnames\' List.');
    } else if (new_surname_position === 3) {
      console.log('Your surname is the ' + new_surname_position + 'rd in the Surnames\' List.');
      alert('Your surname is the ' + new_surname_position + 'rd in the Surnames\' List.');
    } else if (new_surname_position >= 4) {
      console.log('Your surname is the ' + new_surname_position + 'th in the Surnames\' List.');
      alert('Your surname is the ' + new_surname_position + 'th in the Surnames\' List.');
    }
  }
  i++;
}
