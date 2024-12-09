const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());

app.get('/api/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM posttable"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message + "from server.js");
    }
});

app.post('/api/posts', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posttable(body, posttime, username) values ($1, $2, $3)    RETURNING*", [post.body, post.posttime, post.username]
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/api/posts/:id', async(req, res) => {
    try {
        console.log("get a post with route parameter  request has arrived");
        const { id } = req.params;
        const posts = await pool.query(
            "SELECT * FROM posttable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE posttable SET (body, posttime, username) = ($2, $3, $4) WHERE id = $1", [id, post.body, post.posttime, post.username]
        );
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM posttable WHERE id = $1", [id]
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/api/posts', async (req, res) => {
    try {
        console.log("delete all posts request has arrived");
        const deleteAll = await pool.query(
            "DELETE FROM posttable"
        );
        res.json(deleteAll);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});
