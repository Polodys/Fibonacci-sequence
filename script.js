function createSequence(firstNumber, secondNumber, numberOfTerms) {
  let sequence = [firstNumber, secondNumber];
  for (let i = 2; i < numberOfTerms; i++) {
    let nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  return sequence;
}

function displaySequence() {
  // Getting user input and converting them to integers
  let firstNumber = parseInt(document.getElementById("firstNumber").value);
  let secondNumber = parseInt(document.getElementById("secondNumber").value);
  let numberOfTerms = parseInt(document.getElementById("numberOfTerms").value);

  // Fibonacci sequence creation
  let sequence = createSequence(firstNumber, secondNumber, numberOfTerms);

  // Delete previous content
  const element = document.getElementById("divDisplayFibonacciSequence");
  element.innerHTML = "";

  // Display the Fibonacci sequence for the first n terms
  const ulElement = document.createElement("ul");
  element.appendChild(ulElement);
  sequence.forEach((number, index) => {
    const liElement = document.createElement("li");
    const texte = document.createTextNode(`Terme n° ${index + 1} : ${number}`);
    liElement.appendChild(texte);
    ulElement.appendChild(liElement);
  });
}
