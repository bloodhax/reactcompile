import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import serveStatic from 'serve-static';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/home/App';
import Login from './src/login/Login'
import Signup from './src/signup/Signup'
import Admin from './src/admin/Admin'
import User from './src/user/User'
import Request from './src/request/Request'
import Notification from './src/notification/Notification'
import Transaction from './src/transaction/Transaction'
import Feedback from './src/feedback/Feedback'

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname);

app.use(morgan('dev'));
app.use(serveStatic(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('src/home/index', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<App />)));
    });
});

app.get('/login', (req, res) =>{
    res.render('src/login/login', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<Login />)));
    });
});

app.get('/signup', (req, res) =>{
    res.render('src/signup/signup', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<Signup />)));
    });
});

app.get('/admin', (req, res) =>{
    res.render('src/admin/admin', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<Admin />)));
    });
});

app.get('/user', (req, res) =>{
    res.render('src/user/user', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<User />)));
    });
});

app.get('/request', (req, res) =>{
    res.render('src/request/request', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<Request />)));
    });
});

app.get('/notification', (req, res) =>{
    res.render('src/notification/notification', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<Notification />)));
    });
});

app.get('/transaction', (req, res) =>{
    res.render('src/transaction/transaction', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<Transaction />)));
    });
});

app.get('/feedback', (req, res) =>{
    res.render('src/feedback/feedback', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<Feedback />)));
    });
});

var people = [];

app.get('/api/people', (req, res) => {
    console.log(people);
    res.send(people);
});

app.delete('/api/people', (req, res) => {
    
    for(var i = 0; i < people.length; i++){
        
        if(req.query.id == people[i].id){
            people.splice(i, 1);
            res.send(people);
        }
    }
    
});

app.post('/api/people', (req, res) => {
    people.push({
        id: people.length + 1,
        name: req.body.name,
        age: req.body.age
    });

    res.send(people);
});

app.listen(3000, () => {
    winston.info('Server is up');
});