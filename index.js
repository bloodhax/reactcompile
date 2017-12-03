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
import session from 'express-session';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname);

// app.use(morgan('dev'));
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(serveStatic(path.join(__dirname, 'assets')));

app.use(session({ secret: 'uhack', resave: false, saveUninitialized: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const authMiddleware = (req, res, next) => {
    if (typeof req.session === 'undefined' || (typeof req.session !== 'undefined' && typeof req.session.token === 'undefined')) return res.redirect('/login');
    return next();
};

const constructToken = (user_id) => jwt.sign({ user_id }, 'hfGbe9TGRS4vTIr0bUs4');

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

app.post('/login', (req, res) => {
    axios.post('http://localhost:8700/auth', req.body)
        .then(response => {
            req.session.token = response.data.user_id;
            res.redirect('/user');
        })
        .catch(err => {
            res.redirect('/login')
        });
});

app.get('/signup', (req, res) =>{
    res.render('src/signup/signup', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<Signup />)));
    });
});

app.get('/admin', authMiddleware, (req, res) =>{
    res.render('src/admin/admin', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<Admin />)));
    });
});

app.get('/user', authMiddleware, (req, res) =>{
    res.render('src/user/user', (err, html) => {
        if (err) throw err;
        res.send(html.replace('uhack', renderToString(<User />)));
    });
});

app.get('/request', authMiddleware, (req, res) =>{
    axios.get(`http://localhost:8700/users/${req.session.token}`, { headers: { Authorization: constructToken(req.session.token) } })
        .then(response => {
            res.render('src/request/request', (err, html) => {
                if (err) throw err;
                res.send(html.replace('uhack', renderToString(<Request user={response.data} />)));
            });
        })
        .catch(err => res.redirect('/request'));
});

app.post('/request', authMiddleware, (req, res) => {
    axios.post(`http://localhost:8700/requests`, req.body, { headers: { Authorization: constructToken(req.session.token) } })
        .then(response => {
            console.log(response.data);
            res.redirect('/user');
        })
        .catch(err => console.log(err));
});

app.get('/notification', authMiddleware, (req, res) =>{
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

app.listen(3000, () => {
    winston.info('Server is up');
});