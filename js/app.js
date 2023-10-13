//console.log("ok");
// pari dispari DOM element
const paliBtnDOMElement = document.getElementById("pali-input-btn");
console.dir(paliBtnDOMElement);
const paliTextDOMElement = document.querySelector(".pali-input-text");
console.dir(paliTextDOMElement);

// pari e dispari DOM element
const evenOddDOMElement = document.getElementById('even-odd')
const playBtnDOMElement = document.getElementById('play-btn')
const numberDOMElement = document.getElementById('input-number')

// verifica parola palindroma
paliBtnDOMElement.addEventListener("click", function () {
  console.log(paliTextDOMElement.value);
  if (isPalindrom(paliTextDOMElement.value)) {
    alert("la parola è palindroma");
  } else {
    alert("la parola non è palindroma");
  }
});

//pari o dispari?!
playBtnDOMElement.addEventListener('click', function() {
    const evenOdd = evenOddDOMElement.value.toLowerCase()
    const numberInput = numberDOMElement.value
    if ((evenOdd === "pari" || evenOdd === "dispari") && (numberInput > 0 && numberInput < 6)) {
        console.log('dato valido')
        const cpuGenNumber = Math.floor(Math.random() * 5) + 1
        console.log(cpuGenNumber)
        if ((isSumEven(numberInput, cpuGenNumber)) && evenOdd === "pari") {
            alert('hai vinto!')
        } else if (isSumOdd(numberInput, cpuGenNumber) && evenOdd === "dispari") {
            alert('hai vinto')
        } else {
            alert('hai perso')
        }
            
        
    } else {
        alert('dato inserito non valido')
    }
    
})

// funzione verifica parola palindroma
function isPalindrom(inputWord) {
  inputWord = inputWord.toLowerCase()
  let reverseArray = [];
  const wordArray = Array.from(inputWord);
  console.log(wordArray);
  
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reverseArray.push(wordArray[i]);
  }
  console.log(reverseArray);
  if (arrayEquals(wordArray, reverseArray)) {
    return true;
  } else {
    return false;
  }
}
// funzione di confronto array // Samuel //
function arrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let uguali = true;
    for (let index = 0; index < arr1.length; index++) {
      if (arr1[index] !== arr2[index]) {
        uguali = false;
      }
    }
    return uguali;
  }
}

// funzione isEven

function isSumEven(num1, num2) {
    let sum = num1 + num2
    if ((sum % 2) === 0) {
        return true
    } else {
        return false
    }
}

// funzione isOdd

function isSumOdd(num1, num2) {
    let sum = num1 + num2
    if ((sum % 2) !== 0) {
        return true
    } else {
        return false
    }
}

// funzione ispalindrome2 //correzione

function isPalindrome2(parola) {
    parola = parola.toLowerCase()
    let parolaRovesciata = ''
    for (let i = parola.length - 1; i >= 0; i--) {
        const char = parola.charAt(i)
        parolaRovesciata += char
    }

    if (parola === parolaRovesciata) {
        return true
    } else {
        return false
    }
}

// metodo split('') taglia una stringa e ne ricavi un array , se --> ('(spazio)') spezzeta frasi in base agli spazi

// metodo reverse() --> metodo degli array ribalta l'ordine degli elementi degli array
// metodo join('') --> uniscce tutti gli elementi di un array
// metodo split('') e metodo join('') sono uno l'opposto dell'altro

// dicitura (!isEven()) = se la funzione ritorna false

// gridElement = '' --> svuota l'elemento prima riempito