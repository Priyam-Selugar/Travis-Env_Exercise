
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  
    console.log("Microservices rock!");
    const my_pass = process.env.PASS-TRA;
    console.log(`My favorite food is ${my_pass}`);
    
  
}

main();
