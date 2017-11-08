
# Contact Manager

This is a command-line contact management system app built with TypeScript, Node.js, Firebase Realtime Database and Firebase Cloud Functions.

### Technologies:
- JavaScript
- Node.js

### Features
- Add a contact
- Delete a contact
- Send a stored contact a text message
- View message log
- Send a stored contact an email
- View all contacts
- Search for a specific number

### Installation
* Git clone this repo [here](https://github.com/philipszdavido/contact-manager).
* install ts-node globally `npm i ts-node -g` to be able to run the ts scripts directly.
* Move into the folder 
```sh
    cd contact-manager
```
* Run `npm install` to install node dependencies.

### Usage
  Usage:  [options] [command]

  Contact Management System


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    addContact|a       Add a contact
    getContact|g       Get Contact
    updateContact|u    Update Contact
    deleteContact|d    Delete a contact
    getContactList|l   Get Contact List
## USING THE APP
**_If you're on a Mac or Linux, you can run all the commands below without the `node` prefix._**

**If you're using the app for the first time, run:**
```
node add init
```

###### Adding
```
node add -n <contact name> -p <phone number> -e <email>
```
*You can add either a phone number or email but never none of both*

*You can also add a phone number or email to a contact that didn't have them*

###### Deleting
**You can either delete a particular contact or delete everything in your contact list**

*To delete all entries:*
```
node delete deleteall
```
*To delete particular contact:*
```
node delete <contact name>
```

###### Searching
```
node search <contact name>
```

###### Viewing Contacts
**To view all contacts, run:**
```
node viewall
```
*You can run `viewall` with the `-sort` flag if you want contacts ordered alphabetically:*
```
node viewall -sort
```

###### Texting
```
node text <contact name> -m "message body"
```
**Sent messages are stored in a log.**
*To view all messages in log:*
```
node text log
```
*To view all messages sent to a particular contact:*
```
node text log <contact name>
```

###### Sending Email
```
node mail <contact name> -m "message body"
```
**To use the mail.js file, please provide your API KEY from SendGrid.com**

**To use a different `from email` from mine, input it in the `from` field in the code**

### Contribute
1. Fork this repository
2. Clone it to your local machine
3. Create a branch for the feature you want to implement
4. Push your changes to your repository
5. Submit a pull request

- Issue Tracker: https://github.com/philipszdavido/contact-manager/issues
- Source Code: https://github.com/philipszdavido/contact-manager

### Support
If you are having issues, please let me know.
Mail me at: kurtwanger40@gmail.com

### License
The project is licensed under the MIT license.
