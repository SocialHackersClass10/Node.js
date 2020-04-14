
{
    'use strict';

    const libStrFrmt=require("./string-formating.js");
    const numbers=["12","846","2","1236"];

    numbers.forEach(num=>console.log(libStrFrmt.padLeft(num,4,' ')));

};


;

