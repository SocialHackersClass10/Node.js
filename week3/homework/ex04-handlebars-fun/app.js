
{
    'use strict';

    const hndlBars = require("handlebars");
    const template = hndlBars.compile('{{hbPrefix}} is great to {{hbSuffix}}');

    const prefixes = [ "shark", "popcorn",
                       "poison", "fork", "cherry", "toothbrush", "cannon" ];
    const suffixes = [ "watch movie with", "spread some love",
                       "put on cake", "clean toilets", "go to the moon",
                       "achieve world piece","help people learn programing" ];
    const max_loop = Math.floor((prefixes.length+suffixes.length)/2);

    console.log(' ');
    for (let i=0; i<max_loop; i++) {console.log(template(getRandomData()))};
    console.log(' ');

    function getRandomData() {
        function getRandomNumberBetween(minValue,maxValue) {
            return (Math.floor(Math.pow(10,14)*Math.random()*
                            Math.random())%(maxValue-minValue+1))+minValue};
        const prefixIdx=getRandomNumberBetween(1,prefixes.length)-1;
        const suffixIdx=getRandomNumberBetween(1,suffixes.length)-1;
        const prefixStr=prefixes[prefixIdx]; prefixes.splice(prefixIdx,1);
        const suffixStr=suffixes[suffixIdx]; suffixes.splice(suffixIdx,1);
        return {hbPrefix:prefixStr,hbSuffix:suffixStr};
    };
};


;

