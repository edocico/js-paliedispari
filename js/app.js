//console.log("ok");

const paliBtnDOMElement = document.getElementById("pali-input-btn");
console.dir(paliBtnDOMElement);
const paliTextDOMElement = document.querySelector(".pali-input-text");
console.dir(paliTextDOMElement);

paliBtnDOMElement.addEventListener("click", function () {
  console.log(paliTextDOMElement.value);
  if (isPalindrom(paliTextDOMElement.value)) {
    alert("la parola è palindroma");
  } else {
    alert("la parola non è palindroma");
  }
});

// funzione verifica parola palindroma
function isPalindrom(inputWord) {
  
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
