function generateStudentGrade() {
    try {
        // Get the input element
        const marksInput = document.getElementById("marks");
        // Get the result element
        const resultElement = document.getElementById("result");

        // Parse the input value to a float
        const marks = parseFloat(marksInput.value);

        // Check if input is within valid range
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            // Determine grade based on the specified ranges
            let grade;
            if (marks > 79) {
                grade = 'A';
            } else if (marks >= 60 && marks <= 79) {
                grade = 'B';
            } else if (marks >= 50 && marks <= 59) {
                grade = 'C';
            } else if (marks >= 40 && marks <= 49) {
                grade = 'D';
            } else {
                grade = 'E';
            }

            // Display the result
            resultElement.innerHTML = "Student Grade: " + grade;
        } else {
            resultElement.innerHTML = "Invalid input! Marks should be between 0 and 100.";
        }
    } catch (error) {
        resultElement.innerHTML = "An error occurred.";
        console.error(error);
    }
}
