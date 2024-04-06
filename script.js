var currentDecimalPlaces = 3; // Default to 3 decimal places

function setDecimalPlaces(decimalPlaces) {
  currentDecimalPlaces = decimalPlaces;
  calculateDepth(currentDecimalPlaces);
}

function calculateDepth(decimalPlaces) {
  var edits = parseInt(document.getElementById('edits').value);
  var totalPages = parseInt(document.getElementById('totalPages').value);
  var articles = parseInt(document.getElementById('articles').value);

  var nonArticles = totalPages - articles;
  var depth = (edits / totalPages) * Math.pow(nonArticles / articles, 2);

  document.getElementById('result').innerHTML = 'Depth: ' + depth.toFixed(currentDecimalPlaces);
}

document.getElementById('articles').addEventListener('input', function() { calculateDepth(currentDecimalPlaces); });
document.getElementById('edits').addEventListener('input', function() { calculateDepth(currentDecimalPlaces); });
document.getElementById('totalPages').addEventListener('input', function() { calculateDepth(currentDecimalPlaces); });

// Call calculateDepth with initial value for decimal places
calculateDepth(currentDecimalPlaces);
