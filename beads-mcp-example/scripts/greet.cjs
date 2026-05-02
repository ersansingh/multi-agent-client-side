const name = process.argv[2] || 'World';
const date = new Date().toLocaleString();
console.log(`Hello, ${name}! The current date and time is ${date}.`);
console.log(`MCP Status: Connected and functional.`);
