const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../Members");


router.get("/", (req, res) => res.json(members));

router.get("/:id", (req, res) => {
    let idx = req.params.id;
    let reqdata = members.filter(member => member.id === parseInt(idx));
    let foundData = members.some(member => member.id === parseInt(idx));


    if (foundData) {
        res.json(reqdata);
    } else {
        res.status(400).json({ msg: `No member with the id of ${idx}` })
    }
});

router.post("/", (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: "Please include name & email" });
    }
    members.push(newMember);
    // res.json(members);
    res.redirect("/");
});


router.put("/:id", (req, res) => {
    let idx = req.params.id;
    let foundData = members.some(member => member.id === parseInt(idx));


    if (foundData) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(idx)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ msg: "Member was updated", member });
            }

        });
    } else {
        res.status(400).json({ msg: `No member with the id of ${idx}` })
    }
});


router.delete("/:id", (req, res) => {
    let idx = req.params.id;
    let reqdata = members.filter(member => member.id === parseInt(idx));
    let foundData = members.some(member => member.id === parseInt(idx));


    if (foundData) {
        res.json({ msg: "Member deleted", members: members.filter(member => member.id !== parseInt(idx)) });
    } else {
        res.status(400).json({ msg: `No member with the id of ${idx}` })
    }
});



module.exports = router;