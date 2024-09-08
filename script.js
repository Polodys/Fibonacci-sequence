function createSequence() {
  // Getting user input and converting them to integers
  let firstNumber = parseInt(document.getElementById("firstNumber").value);
  let secondNumber = parseInt(document.getElementById("secondNumber").value);
  let numberOfTerms = parseInt(document.getElementById("numberOfTerms").value);
  let c;

  const element = document.getElementById("divDisplayFibonacciSequence");
  element.innerHTML = ''; // Delete previous content

  const ulElement = document.createElement("ul");
  element.appendChild(ulElement);

  // creating the Fibonacci sequence for the first n terms
  for (let i = 1; i <= numberOfTerms; i++) {
    const liElement = document.createElement("li");

    if (i === 1) {
      const texte = document.createTextNode("Terme n° " + i + " : " + firstNumber);
      liElement.appendChild(texte);
      ulElement.appendChild(liElement);
    } else if (i === 2) {
      const texte = document.createTextNode("Terme n° " + i + " : " + secondNumber);
      liElement.appendChild(texte);
      ulElement.appendChild(liElement);
    } else {
      nextNumber = firstNumber + secondNumber;
      firstNumber = secondNumber;
      secondNumber = nextNumber;
      const texte = document.createTextNode("Terme n° " + i + " : " + nextNumber);
      liElement.appendChild(texte);
      ulElement.appendChild(liElement);
    }
  }
}
