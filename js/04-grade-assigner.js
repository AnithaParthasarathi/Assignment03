let score = parseInt(prompt("Enter your score (1-100):"));

if (score < 1 || score > 100 || isNaN(score)) {
    document.write("Only numbers between 1 and 100 are accepted.");
} else if (score >= 90) {
    document.write("You received an A");
} else if (score >= 80) {
    document.write("You received a B");
} else if (score >= 70) {
    document.write("You received a C");
} else if (score >= 60) {
    document.write("You received a D");
} else {
    document.write("You received an F");
}
