
{
    'use strict';

    const fs = require("fs");

    exports.list=function(req,res) {
        try {
            const thePath=getBlogFolder();
            const theData=fs.readdirSync(thePath)
                        .filter(lmnt=>fs.lstatSync(thePath+lmnt).isFile());
            res.status(200).json(theData).end();
        } catch(anError) {
            res.status(500).end(handleRequestError('list',anError));
        };
    };

    exports.create=function(req,res) {
        try {
            const theData=req.body;
            if (invalidRequestData(theData)) {
                return res.status(400).end('Invalid blog post data.');
            };
            const blogFileName=getBlogFolder()+String(theData.title).trim();
            if (fs.existsSync(blogFileName)) {
                return res.status(400).end('Blog post title not unique.');
            };
            fs.writeFileSync(blogFileName,theData.content);
            res.status(201).end('Blog post created.');
        } catch(anError) {
            res.status(500).end(handleRequestError('create',anError));
        };
    };

    exports.read=function(req,res) {
        try {
            const theTitle=String(req.params.title).trim();
            if (invalidValue(theTitle,true)) {
                return res.status(400).end('Invalid blog post Title.');
            };
            const blogFileName=getBlogFolder()+theTitle;
            if (!existFile(blogFileName)) {
                return res.status(404).end('Blog post does not exist.');
            };
            const theData={ title  :theTitle,
                            content:fs.readFileSync(blogFileName,'utf8') };
            res.status(200).json(theData).end();
        } catch(anError) {
            res.status(500).end(handleRequestError('read',anError));
        };
    };

    exports.update=function(req,res) {
        try {
            const theData=req.body;
            if (invalidRequestData(theData)) {
                return res.status(400).end('Invalid blog post data.');
            };
            const blogFileName=getBlogFolder()+String(theData.title).trim();
            if (!existFile(blogFileName)) {
                return res.status(404).end('Blog post does not exist.');
            };
            fs.writeFileSync(blogFileName,theData.content);
            res.status(200).end('Blog post updated.');
        } catch(anError) {
            res.status(500).end(handleRequestError('update',anError));
        };
    };

    exports.delete=function(req,res) {
        try {
            const theTitle=String(req.params.title).trim();
            if (invalidValue(theTitle,true)) {
                return res.status(400).end('Invalid blog post Title.');
            };
            const blogFileName=getBlogFolder()+theTitle;
            if (!existFile(blogFileName)) {
                return res.status(404).end('Blog post does not exist.');
            };
            fs.unlinkSync(blogFileName);
            res.status(200).end('Blog post deleted.');
        } catch(anError) {
            res.status(500).end(handleRequestError('delete',anError));
        };
    };

    function existFile(fileName) {
        return (fs.existsSync(fileName))&&(fs.lstatSync(fileName).isFile());
    };

    function invalidRequestData(checkData) {
        return (   invalidValue(checkData)
                || invalidValue(checkData.title,true)
                || invalidValue(checkData.content,true) );
    };

    function invalidValue(theValue,chkEmpty=false) {
        const isEmptyStr=()=>((chkEmpty)&&(String(theValue).trim()===''));
        return (theValue==null)||(theValue==undefined)||(isEmptyStr());
    };

    function getBlogFolder() {
        const blogFolder='./posts/';
        if (!fs.existsSync(blogFolder)) {fs.mkdirSync(blogFolder)};
        return blogFolder;
    };

    function handleRequestError(aReq,anErr) {
        const errorMsg=`Server error: request ${aReq} - message ${anErr}`;
        console.log(errorMsg);
        return errorMsg;
    };

};


;

