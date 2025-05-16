function analyzeSentiment() {
    const text = document.getElementById("text-input").value.toLowerCase();
    const resultDiv = document.getElementById("result");
  
    const positiveWords = ["good", "happy", "awesome", "great", "fantastic", "love", "amazing"];
    const negativeWords = ["bad", "sad", "terrible", "hate", "horrible", "worst", "angry"];
  
    let score = 0;
  
    positiveWords.forEach(word => {
      if (text.includes(word)) score++;
    });
  
    negativeWords.forEach(word => {
      if (text.includes(word)) score--;
    });
  
    let sentiment = "Neutral 😊";
    if (score > 0) sentiment = "Positive 😀";
    else if (score < 0) sentiment = "Negative 😞";
  
    resultDiv.innerText = `Sentiment: ${sentiment}`;
  }
  