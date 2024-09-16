// import { simple , complex } from "./es6mod1.mjs";
// simple();
// complex();

import { simple as complex } from "./es6mod1.mjs"; //we will write complex but it will return simple
complex(); 

import  xyz  from "./es6mod1.mjs";
xyz(); //if we are importing without {} we must add "default" keyword to the function of module from where we are importing or of export module
// after that we can write any name in the import module it will still run the default function 

import * as a from "./es6mod1.mjs"; //import all files
console.log(a.complex);

