//ESERCIZIO 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  isTheSamePerson(user) {
    return this.age > user.age ? this.firstName + " è più vecchio di " + user.firstName : this.firstName + " è più giovane di " + user.firstName;
  }
}

const user1 = new User("Mario", "Rossi", 30, "Umbria");

const user2 = new User("Luca", "Verdi", 27, "Lazio");

const user3 = new User("Giovanni", "Neri", 40, "Veneto");

console.log(user1.isTheSamePerson(user3));

//ESERCIZIO 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  isTheSameOwner(pet) {
    return this.ownerName === pet.ownerName
      ? `${this.petName} ha lo stesso padrone di ${pet.petName}`
      : `${this.petName} non ha lo stesoso padrone di ${pet.petName}`;
  }
}
//seleziono il form e la lista
const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

//seleziono ciò che l'utente scrive nei rispettivi input
const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

//creo un array che conterrà tutte le istanze di Pet così da poter confrontare tra loro le istanze
//per usare il metodo isTheSameOwner()
const pets = [];

// al click del bottone si creano nuove istanze di Pet composte dalle informazioni che l'utente scrive nei rispettivi input
petForm.addEventListener("submit", function (event) {
  event.preventDefault(); //per prevenire l'invio del form

  //creo la nuova istaanza di Pet
  const newPet = new Pet(petName.value, ownerName.value, species.value, breed.value);

  //aggiungo le nuove istanze all'array pets
  pets.push(newPet);

  //ogni click del bottone genererà un nuovo elemento della lista
  const liText = `Pet Name: ${newPet.petName}, Owner Name: ${newPet.ownerName}, Species: ${newPet.species}, Breed: ${newPet.breed}`;

  //creo l'elemento li e il testo all'interno sarà il contenuto della variabile creata in precedenza
  const li = document.createElement("li");
  li.textContent = liText;

  //appendo l'elemento li alla lista vuota precedentemente creata nell'index
  petList.appendChild(li);

  //resetto il form
  petForm.reset();

  //compareOwner;
});

//funzione per comparare due padroni di due istanze diverse
/*const compareOwner = function () {
  if (pets.length >= 2) {
    const pet1 = pets[0];
    const pet2 = pets[1];

    const sameOwner = pet1.isTheSameOwner(pet2);
    console.log(sameOwner);
    return sameOwner;
  } else {
    console.log("Devi inserire almeno un altro animale");
  }
};
*/
