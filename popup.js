 
 
  
  var form = document.querySelector('form');
  
 
 
form.addEventListener('submit', async (event) => {

 
  event.preventDefault();
  var text = document.querySelector('.text').value;

  try {
 
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: text}),
    });


    if (response.ok) {
 
      const prediction = (await response.json());
      const resultDiv1 = document.querySelector('.result1');
      const resultDiv2 = document.querySelector('.result2');
      resultDiv1.innerText= `AI : ${prediction.probabilities.ai}`;
      resultDiv2.innerText = `HUMAN : ${prediction.probabilities.human}`;
    } else {
      console.error('Request failed:', response.status);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
});
 