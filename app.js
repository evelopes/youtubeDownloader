const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const app = express()


app.use(cors())

app.listen(3000, () => {
    console.log('SERVER FUNCIONANDO')
})

app.get('/download', (req, res) => {
    let URL = req.query.URL;
    // res.json({ url: URL })
    res.header('Content-Disposition', 'attachment; filename="video.mp4')
    ytdl(URL, {
        format: 'mp4'
    }).pipe(res)
})

