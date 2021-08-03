#!/usr/bin/env node
import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("shu bre")
})

app.listen(3005, () => {
    console.log("listening on port 3005")
})