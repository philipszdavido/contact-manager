import axios from 'axios'
import chalk from 'chalk'
import * as ora from 'ora'

const url: string = "https://us-central1-myreddit-clone.cloudfunctions.net"

export const addContact = (answers: any) => {
    (async () => {
        try {
            const spinner = ora('Adding contact ...').start();
            let response = await axios.post(`${url}/addContact`,answers)
            spinner.stop()
            console.log(chalk.magentaBright('New contact added'))
        } catch (error) {
            console.log(error)
        }
    })()
}
export const getContact = (id: number) => {
    ( async ()=>{
        try {
            const spinner = ora('Fetching contact ...').start();
            let response = await axios.get(`${url}/getContact/${id}/`)
            spinner.clear()
            spinner.stop()
            var obj = response.data
            for (var key in obj) {
                console.log(chalk.blue('==============='))
                console.log(chalk.greenBright(`id: ${id} \nFirstname: ${obj[key].firstname} \nLastname: ${obj[key].lastname} \nPhone Number: ${obj[key].phone} \nEmail: ${obj[key].email}`))
            }            
        } catch (error) {
            console.log(error)
        }
    })()
}
export const updateContact= (contact: any) => {
    (async () => {
        try {
            const spinner = ora('Updating contact ...').start();
            let response = await axios.put(`${url}/updateContact/${contact.id}` , contact)
            spinner.stop()
            console.log(chalk.cyanBright('Contact updated'))
        } catch (error) {
            console.log(error)
        }
    })()
}
export const deleteContact= (id: number) => {
    (async () => {
        try {
            const spinner = ora('Deleting contact ...').start();
            let response = await axios.delete(`${url}/deleteContact/${id}`)
            spinner.stop()
            console.log(chalk.bgMagentaBright('Contact deleted'))
        } catch (error) {
            console.log(error)
        }
    })()
}
export const getContactList= () => {
    (async () => {
        try {
            const spinner = ora('Fetching All Contacts ...').start();
            let response = await axios.get(`${url}/getContactList`)
            spinner.stop()
            var obj = response.data.res
            console.log(chalk.green('**********=== Contacts List===**********'))
            for (var key in obj) {
                console.log(chalk.blue('==============='))
                console.log(chalk.greenBright(`id: ${key} \nFirstname: ${obj[key].firstname} \nLastname: ${obj[key].lastname} \nPhone Number: ${obj[key].phone} \nEmail: ${obj[key].email}`))
            }
        } catch (error) {
            console.log(error)
        }
    })()
}
