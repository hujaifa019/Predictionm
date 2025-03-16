// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  let btn = document.getElementById("theme-toggle");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
});

// Prediction Function
function predict() {
  let symbols = [
    document.getElementById("result1").value,
    document.getElementById("result2").value,
    document.getElementById("result3").value,
    document.getElementById("result4").value,
    document.getElementById("result5").value,
    document.getElementById("result6").value
  ];
  
  // Show Loading Animation
  document.getElementById("loading-screen").style.display = "block";
  document.getElementById("prediction-result").style.display = "none";
  
  // Fake Variation before final result
  let variations = ["Jhandi", "Munda", "Paan", "Hukum", "Chidi", "Eent"];
  let interval = setInterval(() => {
    let randomVar = variations[Math.floor(Math.random() * variations.length)];
    document.getElementById("predicted-symbol").textContent = randomVar;
  }, 500);
  
  // Stop after 3 seconds and show actual prediction
  setTimeout(() => {
    clearInterval(interval);
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("prediction-result").style.display = "block";
    
    // Count most frequent symbol
    let counts = {};
    symbols.forEach(sym => {
      counts[sym] = (counts[sym] || 0) + 1;
    });
    
    let predictedSymbol = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    
    document.getElementById("predicted-symbol").textContent = predictedSymbol || "?";
  }, 3000);
}