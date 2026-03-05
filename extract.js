const fs = require('fs');
const html = fs.readFileSync('home.html', 'utf8');
const regex = /<img[^>]+src="([^"]+\.(?:png|jpg|jpeg|webp))"[^>]*alt="([^"]*)"/gi;
let match;
while ((match = regex.exec(html)) !== null) {
    if (match[1].includes('frameruser')) {
        console.log(`${match[1]} | ${match[2]}`);
    }
}
