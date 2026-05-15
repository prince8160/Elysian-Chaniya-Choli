const { execSync } = require('child_process');
try {
  console.log(execSync('find . -name "*.jpg" -o -name "*.png" -o -name "*.webp"', { encoding: 'utf8' }));
} catch (e) {
  console.log('Error', e.message);
}
