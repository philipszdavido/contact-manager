"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js");
var functions = require("firebase-functions");
var admin = require("firebase-admin");
var cors = require("cors");
var express = require("express");
admin.initializeApp(functions.config().firebase);
var contactsRef = admin.database().ref('/contacts');
exports.addContact = functions.https.onRequest(function (request, response) {
    var contactsRef = admin.database().ref('/contacts');
    cors()(request, response, function () {
        contactsRef.push({
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            email: request.body.email
        });
    });
    response.send({ 'msg': 'Done', 'data': {
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            email: request.body.email
        } });
});
exports.getContactList = functions.https.onRequest(function (request, response) {
    var contactsRef = admin.database().ref('/contacts');
    console.log('getContacts');
    contactsRef.once('value', function (data) {
        response.send({
            'res': data.val()
        });
    });
});
var app = express();
app.use(cors({ origin: true }));
app.put('/:id', function (req, res, next) {
    console.log('put');
    admin.database().ref('/contacts/' + req.params.id).update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });
    res.send(req.body);
    next();
});
app.delete('/:id', function (req, res, next) {
    console.log('delete');
    admin.database().ref('/contacts/' + req.params.id).remove();
    req.send(req.params.id);
    next();
});
app.get('/:id', function (req, res, next) {
    console.log('get');
    admin.database().ref('/contacts/' + req.params.id).once('value', function (data) {
        var sn = data.val();
        res.send({
            'res': sn
        });
        next();
    }, function (err) { return res.send({ res: err }); });
});
exports.getContact = functions.https.onRequest(function (request, response) {
    return app(request, response);
});
exports.updateContact = functions.https.onRequest(function (request, response) {
    return app(request, response);
});
exports.deleteContact = functions.https.onRequest(function (request, response) {
    return app(request, response);
});
