import express from 'express'

function createServer(){
    const app = express();
    app.use(express.json())

    return app
}

export default createServer