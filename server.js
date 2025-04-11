import fs from "fs";
// create readable and writeable stream

const readableStream = fs.createReadStream("files/large-file.txt");
const writeableStream = fs.createWriteStream("files/mehedi-file.txt");

let totalBytes = 0;

readableStream.on("data", (chunk) => {
  totalBytes += chunk.length;
  console.log(`Copied ${chunk.length}  bytes`);
});

// pipe the readable stream to the writeable stream

readableStream.pipe(writeableStream);

readableStream.on("end", () => {
  console.log("File copied successfully");
});
