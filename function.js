
function caseConversion(tipo) {

    let inputString = document.getElementById('txtvalue')

    switch (tipo) {
        // Enclose conversion types 'upper' and 'lower' in single quotes to treat them as strings
        case 'upper':
            inputString.value = inputString.value.toUpperCase()
            break;
        case 'lower':
            inputString.value = inputString.value.toLowerCase()
            break;
        case 'alternated':
            let inputStr = inputString.value
            let result = ''
            for (let i = 0; i < inputStr.length; i++) { // Attention to VAR reference
                if (i % 2 === 0) {
                    result += inputStr[i].toUpperCase()
                } else {
                    result += inputStr[i].toLowerCase()
                }
            }
            inputString.value = result
            break;
        case 'reversed':
            let x = inputString.value
            x = x.split('').reverse().join('') // Correct the variable used for string manipulation from 'inputString' to 'x'
            inputString.value = x
            break;
    }
}