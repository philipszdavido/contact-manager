#!/usr/bin/env node

import * as commander from 'commander'
import * as inquirer from 'inquirer'
import * as loadjsonfile from 'load-json-file'
import * as writejsonfile from 'write-json-file'
import chalk from 'chalk'
import * as progress from 'progress'
import * as actions from './logic';

let questions: Array<Object> = [
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
        name: 'email',
        message: 'Enter Your Email Address'
    }
]
let sendMailQuestions: Array<Object> = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the contact Firstname or Lastname'
    },
    {
        type: 'input',
        name: 'msg',
        message: 'Type Your Message'
    }
]

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
    .command('getContact <name>')
    .alias('g')
    .description('Get Contact')
    .action(name => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        actions.getContact(name)
    })
commander
    .command('updateContact <_id>')
    .alias('u')
    .description('Update Contact')
    .action(id => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        actions.updateContact(id)
    })
commander
    .command('deleteContact <_id>')
    .alias('d')
    .description('Delete a contact')
    .action(id => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        var bar = new progress(':bar', {total: 10})
        bar.tick()
        actions.deleteContact(id)
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
