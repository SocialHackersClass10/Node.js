
{
    'use strict';

    //  changes from exercise 01 :
    //          replace old erroneous function with new npm-installed function
    //
    //
    //  here    comment out the old import
    //
    //  const libStrFrmt=require("./string-formating.js");
    //
    //
    //  here    add new import
    //
    const npmPadLeft=require('left-pad');

    const numbers=["12","846","2","1236"];

    //  changes from exercise 01 :
    //          replace old erroneous function with new npm-installed function
    //
    //
    //  here    comment out the old function call
    //
    //  numbers.forEach(num=>console.log(libStrFrmt.padLeft(num,4,' ')));
    //
    //
    //  here    substitute with the new function evocation
    //
    numbers.forEach(num=>console.log(npmPadLeft(num,8)));

};


;

