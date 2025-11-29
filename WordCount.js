        // Function to calculate and display word count for a specified section
      function displayWordCount(sectionId, outputId) {
        // Get the text content from the specified section
        const text = document.getElementById(sectionId).textContent;
        // Split text into words based on spaces and filter out any empty strings
        const wordArray = text.trim().split(/\s+/);
        // Count the words
        const wordCount = wordArray.length;
        // Return the word count for summing purposes
        return wordCount;
      }
      // Function to calculate and display total word count from selected sections
      function displayTotalWordCount() {
        // Calculate word count for each section and accumulate the total
        const AbstractCount = displayWordCount("Abstract");
        const AnalysisCount = displayWordCount("Analysis");
        const EvaluationCount = displayWordCount("Evaluation_and_conclusion");

        let italicSum = 0;
        document.querySelectorAll("i").forEach(i => {
          const words = i.textContent.trim().split(/\s+/).length;
          italicSum += words;
        });

        // Calculate the sum of all selected sections
        const totalWordCount = AbstractCount + AnalysisCount + EvaluationCount - italicSum;
        // Display the total word count
        document.getElementById("totalWordCount").innerText = `Total word count: ${totalWordCount}`;
      }
      // Run the function for specific sections and display total count when the page loads
      window.onload = displayTotalWordCount;
