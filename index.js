const express = require('express');

const app = express();

app.use(express.json());

app.get("/path", (req, res) => {
    console.log("Working fine");
    res.status(200).json({
        status: 'success',
        message: 'From the get method'
    })
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
