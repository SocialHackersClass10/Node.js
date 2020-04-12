
    //
    //      file        string-formating.js
    //
    //      purpose     NODE.JS module
    //
    //      exports     1
    //
    //          1.  function padLeft (val,num,str)
    //              returns formated string of (val) filled left with (str) for (num) length
    //              bad function implementation
    //              since max result length is equal to length(val) plus ( length(str) * 5 )
    //

function padLeft(val, num, str) {
    return '00000'.replace(/0/g, str).slice(0, num - val.length) + val;
};

exports.padLeft=padLeft;

;

