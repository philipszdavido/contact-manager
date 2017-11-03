import * as firebase from 'firebase/app'
import axios from 'axios'
import chalk from 'chalk'
const url = "https://us-central1-myreddit-clone.cloudfunctions.net"
//curl -X POST https://us-central1-myreddit-clone.cloudfunctions.net/addContact -H "Content-Type:application/json" --data '{"name":"Keyboard Cat"}'
var app: any = firebase.initializeApp({
    apiKey: 'AIzaSyBxS0t2BgC13y1hfmYDast9AQqbqaDqA_4',
    authDomain: 'myreddit-clone.firebaseapp.com',
    databaseURL: 'https://myreddit-clone.firebaseio.com',
    projectId: 'myreddit-clone',
    storageBucket: 'myreddit-clone.appspot.com',
    messagingSenderId: '59436513718'
})

export const addContact = (answers: any) => {
    console.log(chalk.yellowBright(answers))
    axios.post(url + '/addContact',answers).then((response) => {
        console.log(response.data)
    }, err => console.log(err))
}
export const getContact= (name: string) => {

}
export const updateContact= (id: number) => {

}
export const deleteContact= (id: number) => {

}
export const getContactList= () => {

}
export const sendMail= (arg: any) => {

}
