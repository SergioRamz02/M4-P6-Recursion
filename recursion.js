// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
     // Convertir el regalo buscado a minúsculas
     let normalizedGiftName = giftName.toLowerCase();

    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

   // Caso base: Si encontramos el regalo en la lista
    if(gifts[index].toLowerCase() === normalizedGiftName){
    return `${giftName} esta en la posición ${index}`;
    }

  // Resursión para seguir buscando el regalo.
  return findGift(gifts, giftName, index + 1);
}

// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind)); // Salida esperada:"Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
let giftToFind2 = "Camión";
console.log(findGift(gifts, giftToFind2)); // Salida esperada:"Camión no está en la lista."

//Caso 3
let giftToFind3 = "Pelota";
console.log(findGift(gifts, giftToFind3));

//Caso 4: Cuando el regalo esta en la lista, pero no esta escrito con mayúscula al inicio
let giftToFind4 = "muñeca";
console.log(findGift(gifts, giftToFind4));

