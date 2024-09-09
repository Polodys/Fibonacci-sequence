function createSequence(firstNumber, secondNumber, numberOfTerms) {
  let sequence = [firstNumber, secondNumber];
  for (let i = 2; i < numberOfTerms; i++) {
    let nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  return sequence;
}

function displaySequence() {
  // Getting user inputs and converting them to floats (use of parseFloat rather than perseInt, because if the number is not an integer, I want to display a message and not get an automatic integer conversion)
  let firstNumber = parseFloat(document.getElementById("first-number").value);
  let secondNumber = parseFloat(document.getElementById("second-number").value);
  let numberOfTerms = parseFloat(document.getElementById("number-of-terms").value);

  // Delete previous error messages
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.textContent = '';

  // Data validation
  if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(numberOfTerms) 
    || !Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) || !Number.isInteger(numberOfTerms)) {
    errorMessageElement.textContent = 'Les valeurs saisies doivent être des nombres entiers.'
    return;
  }

  if (numberOfTerms < 3) {
    errorMessageElement.textContent = 'La suite doit comporter au moins 3 termes.'
    return;
  }

  // Fibonacci sequence creation
  let sequence = createSequence(firstNumber, secondNumber, numberOfTerms);

  // Delete previous content
  const element = document.getElementById("div-display-fibonacci-sequence");
  element.innerHTML = "";

  // Display the Fibonacci sequence
  const ulElement = document.createElement("ul");
  element.appendChild(ulElement);
  sequence.forEach((number, index) => {
    const liElement = document.createElement("li");
    const texte = document.createTextNode(`Terme n° ${index + 1} : ${number}`);
    liElement.appendChild(texte);
    ulElement.appendChild(liElement);
  });
}
