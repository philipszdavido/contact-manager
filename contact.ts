#!/usr/bin/env node
import './polyfills.ts'
import * as commander from 'commander'
import * as inquirer from 'inquirer'
import * as loadjsonfile from 'load-json-file'
import * as writejsonfile from 'write-json-file'
import chalk from 'chalk'
import * as progress from 'progress'
import * as actions from './logic';
import { getIdQuestions, questions, sendMailQuestions, updateContactQuestions } from './questions'

commander
    .version('1.0.0')
    .description('Contact Management System')

commander
    .command('addContact')
    .alias('a')
    .description('Add a contact')
    .action(() => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        inquirer.prompt(questions).then((answers) => actions.addContact(answers))
    })

commander
    .command('getContact')
    .alias('g')
    .description('Get Contact')
    .action(() => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        inquirer.prompt(getIdQuestions).then((answers) => actions.getContact(answers.id))
        
    })
commander
    .command('updateContact')
    .alias('u')
    .description('Update Contact')
    .action(() => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        inquirer.prompt(updateContactQuestions).then((answers) => actions.updateContact(answers))
    })
commander
    .command('deleteContact')
    .alias('d')
    .description('Delete a contact')
    .action(() => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        /*var bar = new progress(':bar', {total: 10})
        bar.tick()*/
        inquirer.prompt(getIdQuestions).then((answers) => actions.deleteContact(answers.id))
    })
commander
    .command('getContactList')
    .alias('l')
    .description('Get Contact List')
    .action(() => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        actions.getContactList()
    })

commander
    .command('sendMail')
    .alias('s')
    .description('Send Mail To Contact')
    .action(() => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        inquirer.prompt(sendMailQuestions).then((answers) => actions.sendMail(answers))
    })

if(!process.argv.slice(2).length/* || !/[arudl]/.test(process.argv.slice(2))*/) {
    commander.outputHelp()
    process.exit()
}
commander.parse(process.argv)
