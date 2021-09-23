#!/usr/bin/env node

console.log("Hello!");
console.log(process.argv)
console.log(require('express') ? "express exists" : "express missing");
