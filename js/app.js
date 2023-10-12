console.log('ok')

const paliBtnDOMElement = document.getElementById('pali-input-btn')
console.dir(paliBtnDOMElement)
const paliTextDOMElement = document.querySelector('.pali-input-text')
console.dir(paliTextDOMElement)

 

paliBtnDOMElement.addEventListener('click', function() {
    console.log(paliTextDOMElement.value)
    if (isPalindrom(paliTextDOMElement.value) === 1) {
        alert('la parola è palindroma')
    } else {
        alert('la parola non è palindroma')
    }
    
    
})  

// funzione verifica parola palindroma
function isPalindrom(inputWord) {
    //let array = []
    let reverseArray = []
    const wordArray = Array.from(inputWord)
    console.log(wordArray)
    /* for (let i = 0; i < wordArray.length; i++) {
        array.push(wordArray[i])
    }
    console.log(array) */
    for (let i = wordArray.length - 1; i >= 0; i--) {
        reverseArray.push(wordArray[i])
    }
    console.log(reverseArray)
    if (wordArray === reverseArray) {
        return 1
    } else {
        return 0
    }
}