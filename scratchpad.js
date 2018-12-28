/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
/************************************************************
12/27/2018
************************************************************/

(function(){
  "use strict";
  /* Start of your code*/
  function greetMe(yourName){
    alert('Hello '+yourName);
  }
  greetMe('World');
  /*End of your code */
/***********************************************************
  Declaration Exercises
***********************************************************/
var a;
console.log('The value of a is '+a);

console.log('The value of b is '+b);
var b;

console.log('The value of c is' +c);
/*
Exception: ReferenceError: c is not defined
@Scratchpad/2:1:1
*/
let x;
console.log('The value of x is '+x);
/*
Exception: SyntaxError: redeclaration of let x
@Scratchpad/2:1:1
greetMe@Scratchpad/2:14:5
@Scratchpad/2:16:3
@Scratchpad/2:10:2
*/
  
console.log('The value of y is' +y);
 let y;
/*
Exception: ReferenceError: can't access lexical declaration `y' before initialization
@Scratchpad/2:1:1
*/
/***************************************
  Evaluation Exercises
***************************************/
  
/************************************************************************  
The "undefined" can be used to determin whether a variable has a value.
*************************************************************************/  
var input;
  if(input === undefined){
    console.log('input has no value.');
  } else{
    console.log("input has a value of " + input);
  }
  
/*********************************************************
 The "undefined" acts as FALSE in the boolean context.
 *********************************************************/  
var myArray=[];
  if(!myArray[0]){
    console.log("FALSE");
  }else{
    console.log("TRUE");
  }
/*******************************************************************
The "undefied" converts to NaN when used in a numerical context.  
********************************************************************/
var a;
console.log(a+2);

/********************************************************************
 The null value behaves as 0 in numeric context and as FALSE in boolean
 context.
**********************************************************************/
var n=null;
 if (!n){
   console.log("In Boolean context, null is "+"FALSE.");
 }else{
   console.log("TRUE");
 } 
 console.log("In numerical context, null is " +n*32+"."");

 /*************************************************
 Global variable vs Local Variable
 ***********************************************/
if (true){
   let x=5;
 console.log("Declared by let, the value of x inside the function is "+x+'.');
 }
console.log("the value of x outside the function is "+x+'.');
  
/************************
Variable Hoisting
************************/
  