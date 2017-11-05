import * as firebase from 'firebase/app'
import axios from 'axios'
import chalk from 'chalk'

const url = "https://us-central1-myreddit-clone.cloudfunctions.net"

export const addContact = (answers: any) => {
    console.log(chalk.yellowBright(answers))
    axios.post(url + '/addContact',answers).then((response) => {
        console.log(response.data)
    }, err => console.log(err))
}
export const getContact= (id: number) => {
    axios.get(url + '/getContact/' + id + '/').then((response) => {
        console.log(response.data)
    }, err => console.log(err))
}
export const updateContact= (contact: any) => {
    axios.put(url + '/updateContact/' + contact.id , contact).then((response) => {
        console.log(response.data)
    }, err => console.log(err))
}
export const deleteContact= (id: number) => {
    axios.delete(url + '/deleteContact/' + id).then((response) => {
        console.log(response.data)
    }, err => console.log(err))
}
export const getContactList= () => {
    axios.get(url + '/getContactList').then((response) => {
        var obj = response.data.res
        console.log(chalk.green('**********=== Contacts List===**********'))
        for (var key in obj) {
            console.log(chalk.blue('==============='))
            console.log(chalk.greenBright('id:' +key + '\nFirstname: ' + obj[key].firstname + '\nLastname:' + obj[key].lastname + '\nEmail:' + obj[key].email))
        }
    }, err => console.log(err))
}
export const sendMail= (arg: any) => {

}
