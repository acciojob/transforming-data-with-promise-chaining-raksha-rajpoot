//your JS code here. If required.
document.getElementById("btn").onclick = function () {
  const input = document.getElementById("ip").value;
  const outputDiv = document.getElementById("output");
  outputDiv.innerText = "";

  const number = Number(input);

  if (isNaN(number)) {
    outputDiv.innerText = "Please enter a valid number.";
    return;
  }

  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.innerText = `Result: ${number}`;
      resolve(number);
    }, 2000);
  })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res * 2;
          outputDiv.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000); 
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res - 3;
          outputDiv.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000); 
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res / 2;
          outputDiv.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000); 
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res + 10;
          outputDiv.innerText = `Final Result: ${result}`;
          resolve(result);
        }, 1000); 
      });
    });
};