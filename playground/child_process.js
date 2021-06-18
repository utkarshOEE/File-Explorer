const {execSync} = require('child_process');

try{
    const result = execSync(`du -sh "D:/A/Web/20/zz"`).toString();
    console.log(result);
}catch(err){
    console.log(`Error: ${err}`);
} 