import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin';
import * as cors from 'cors'

admin.initializeApp(functions.config().firebase)

exports.addContact = functions.https.onRequest((request: any, response: any) => {
    //var ref = admin.database().ref('/users')
        var contactsRef = admin.database().ref('/contacts')
        cors()(request, response, () => {
            contactsRef.push({
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                email: request.body.email
            })
        })
        response.send('DONE');
});
exports.getContactList = functions.https.onRequest((request: any, response: any) => {
    response.send("Hello from Firebase!");
});
exports.updateContact = functions.https.onRequest((request: any, response: any) => {
    response.send("Hello from Firebase!");
});
exports.deleteContact = functions.https.onRequest((request: any, response: any) => {
    response.send("Hello from Firebase!");
});
