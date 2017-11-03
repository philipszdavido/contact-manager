import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin';
import * as cors from 'cors'

admin.initializeApp(functions.config().firebase)

exports.addContact = functions.https.onRequest((request: any, response: any) => {
    //var ref = admin.database().ref('/users')
    var corsFn = cors();
    corsFn(request, response, function() {
        var contactsRef = admin.database().ref('/contacts')
        contactsRef.set({
            firstname: 'nnamdi',
            lastname: 'chidume',
            email: 'kurtwanger40@gmail.com'
        })
        response.send(request.body);
    });
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
