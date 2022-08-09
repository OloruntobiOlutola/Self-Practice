const express = require('express');

const app = express();

app.use(express.json());

app.get("/path", (req, res) => {
    //console.log("Working fine");
    //res.send(`Hello ${req.params.name}`)

    const {fullname, twitterUrl, linkedinUrl, phoneNum, DOB, desc} = req.body;
    res.send(`Hello ${fullname}, you submitted the following detatails 
        \nTwitter Url: ${twitterUrl}\nLinkein Url: ${linkedinUrl}
        \nPhone Number: ${phoneNum}\nDate of Birth: ${DOB}
        \nThe word that describe's you: ${desc}
        \nThank You!`)

})

app.post("/", (req, res) => {
    const {fullname, twitterUrl, linkedinUrl, phoneNum, DOB, desc} = req.body;
    res.status(201).json({
        status: "success",
        data: {
            fullname,
            twitterUrl,
            linkedinUrl,
            phoneNum,
            DOB,
            desc
        }
    })
})

app.listen(3000, () => {
    console.log("Working fine");
})