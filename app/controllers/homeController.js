'use strict';

process.app.get('/', (req, res) => res.render('default', {title: 'Scott Gamon'}))

process.app.get('/vanity', (req, res) => res.render('vanity', {title: 'Scott Gamon - Vanity'}))

