// exo4.js
const fs = require('fs');

// Get the parameters from command line arguments
const fileName = process.argv[2]; // First argument is the filename
const textToWrite = process.argv.slice(3).join(' '); // Join the rest as the text

// Check if both parameters are provided
if (!fileName || !textToWrite) {
    console.error("Please provide a filename and text as arguments.");
    process.exit(1);
}

// Write the text to the specified file
fs.writeFile(fileName, textToWrite, 'utf8', (err) => {
    if (err) {
        console.error("Error writing to the file:", err);
        process.exit(1);
    }
    console.log("The file has been saved!");

    // Read and display the contents of the file
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            process.exit(1);
        }
        console.log(data);
    });
});
