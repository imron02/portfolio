/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const { log } = console;

// Define paths (relative to the scripts directory)
const srcDir = path.join(__dirname, "..", "assets", "images-src");
const outputDir = path.join(__dirname, "..", "assets", "images");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to generate images at different scales
async function generateImages() {
  try {
    // Read all files in the source directory
    const files = fs.readdirSync(srcDir);

    for (const file of files) {
      const filePath = path.join(srcDir, file);
      const fileName = path.parse(file).name;
      const ext = path.parse(file).ext;

      // Skip unsupported files (only process SVG, JPG, JPEG, PNG)
      const supportedExtensions = [".svg", ".jpg", ".jpeg", ".png"];
      if (!supportedExtensions.includes(ext.toLowerCase())) {
        log(`Skipping unsupported file: ${file}`);
        continue;
      }

      // Define output file names
      const outputFileOriginal = path.join(outputDir, `${fileName}.png`);
      const outputFile2x = path.join(outputDir, `${fileName}@2x.png`);
      const outputFile3x = path.join(outputDir, `${fileName}@3x.png`);

      // Skip if all output files already exist
      if (
        fs.existsSync(outputFileOriginal) &&
        fs.existsSync(outputFile2x) &&
        fs.existsSync(outputFile3x)
      ) {
        log(`Skipping already processed file: ${file}`);
        continue;
      }

      // Load the image using sharp
      const image = sharp(filePath);

      // Get the original image metadata
      const metadata = await image.metadata();

      // Generate original size image (file.png)
      if (!fs.existsSync(outputFileOriginal)) {
        const originalImage = await image.toBuffer();
        fs.writeFileSync(outputFileOriginal, originalImage);
      }

      // Generate @2x image (file@2x.png)
      if (!fs.existsSync(outputFile2x)) {
        const image2x = await image
          .clone() // Clone the image to avoid conflicts
          .resize(
            Math.round(metadata.width * 2),
            Math.round(metadata.height * 2),
          )
          .toBuffer();
        fs.writeFileSync(outputFile2x, image2x);
      }

      // Generate @3x image (file@3x.png)
      if (!fs.existsSync(outputFile3x)) {
        const image3x = await image
          .clone() // Clone the image to avoid conflicts
          .resize(
            Math.round(metadata.width * 3),
            Math.round(metadata.height * 3),
          )
          .toBuffer();
        fs.writeFileSync(outputFile3x, image3x);
      }

      log(`Generated images for: ${fileName}`);
    }

    log("All images generated successfully!");
  } catch (error) {
    log("Error generating images:", error);
  }
}

// Run the script
generateImages();
