const sass = require('sass');
const fs = require('fs');
const path = require('path');

// Define source and destination directories
const srcPath = path.join(__dirname, 'public', 'stylesheets');
const destPath = path.join(__dirname, 'public', 'stylesheets');

// Compile SCSS to CSS
const result = sass.compile(path.join(srcPath, 'style.scss'));

// Write the compiled CSS to the destination file
fs.writeFileSync(path.join(destPath, 'style.css'), result.css);

console.log('SCSS compiled successfully.');
