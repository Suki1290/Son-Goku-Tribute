function goToLink() {
    window.location.href = "https://de.epicdope.com/dragon-ball-was-sind-alle-gokus-formen-in-ordnung/";
  }
  
  document.querySelector("#tribute-link").addEventListener("click", goToLink);
  
  document.getElementById('check-answer').addEventListener('click', () => {
    const answer = document.querySelector('input[name="q1"]:checked');
    if (!answer) {
        alert('Bitte wählen Sie eine Antwort aus.');
        return;
    }

    
    const answerInCaps = answer.value.toUpperCase();

    if (answerInCaps === 'C') {
        document.getElementById('result').textContent = 'Richtig!';
    } else {
        document.getElementById('result').textContent = 'Leider falsch. Versuchen Sie es erneut.';
    }
});






  
  