"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Enter first name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Enter Lastname'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Enter Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Your Email Address'
    }
];
exports.getIdQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter the contact id'
    }
];
exports.updateContactQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter the contact id'
    }
].concat(exports.questions);
