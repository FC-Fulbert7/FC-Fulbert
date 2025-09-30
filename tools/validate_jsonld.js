const fs = require('fs');
const path = require('path');

function extractJsonLd(html){
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const matches = [];
  let m;
  while((m = re.exec(html))){
    matches.push(m[1].trim());
  }
  return matches;
}

function checkFile(filePath){
  const html = fs.readFileSync(filePath,'utf8');
  const scripts = extractJsonLd(html);
  if(scripts.length===0){
    console.log(filePath + ': NO JSON-LD FOUND');
    return;
  }
  scripts.forEach((s, i) => {
    try{
      JSON.parse(s);
      console.log(filePath + ' - JSON-LD #' + (i+1) + ': OK');
    }catch(e){
      console.error(filePath + ' - JSON-LD #' + (i+1) + ': INVALID -> ' + e.message);
    }
  });
}

const files = [
  path.join(__dirname,'..','index.html'),
  path.join(__dirname,'..','events','evt-2025-10-12-u15.html'),
  path.join(__dirname,'..','events','evt-2025-09-21-seniors-win.html')
];
files.forEach(checkFile);
