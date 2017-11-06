#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills");
var commander = require("commander");
var inquirer = require("inquirer");
var chalk_1 = require("chalk");
var actions = require("./logic");
var questions_1 = require("./questions");
commander
    .version('1.0.0')
    .description('Contact Management System');
commander
    .command('addContact')
    .alias('a')
    .description('Add a contact')
    .action(function () {
    console.log(chalk_1.default.yellow('=========*** Contact Management System ***=========='));
    inquirer.prompt(questions_1.questions).then(function (answers) { return actions.addContact(answers); });
});
commander
    .command('getContact')
    .alias('g')
    .description('Get Contact')
    .action(function () {
    console.log(chalk_1.default.yellow('=========*** Contact Management System ***=========='));
    inquirer.prompt(questions_1.getIdQuestions).then(function (answers) { return actions.getContact(answers.id); });
});
commander
    .command('updateContact')
    .alias('u')
    .description('Update Contact')
    .action(function () {
    console.log(chalk_1.default.yellow('=========*** Contact Management System ***=========='));
    inquirer.prompt(questions_1.updateContactQuestions).then(function (answers) { return actions.updateContact(answers); });
});
commander
    .command('deleteContact')
    .alias('d')
    .description('Delete a contact')
    .action(function () {
    console.log(chalk_1.default.yellow('=========*** Contact Management System ***=========='));
    inquirer.prompt(questions_1.getIdQuestions).then(function (answers) { return actions.deleteContact(answers.id); });
});
commander
    .command('getContactList')
    .alias('l')
    .description('Get Contact List')
    .action(function () {
    console.log(chalk_1.default.yellow('=========*** Contact Management System ***=========='));
    actions.getContactList();
});
if (!process.argv.slice(2).length /* || !/[arudl]/.test(process.argv.slice(2))*/) {
    commander.outputHelp();
    process.exit();
}
commander.parse(process.argv);
