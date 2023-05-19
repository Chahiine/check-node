const fs = require("fs");

// Create a file named "welcome.txt" with the content "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error creating file:", err);
    return;
  }
  console.log("File created: welcome.txt");
});
