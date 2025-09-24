const fs = require("fs");

function filereadasync(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

filereadasync("abcd.txt", (err, data) => {
  if (err) {
    console.log("Error handling:", err.message);
  } else {
    console.log("The data in the file is:", data);
  }

  const no=data.split
});
