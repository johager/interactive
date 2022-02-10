const bcrypt = require('bcryptjs')
const chats = []

/*
chat = {
    pinHash: safadfsdf...,
    messages: ['hello', 'message2']
}
*/

module.exports = {
    createMessage: (req, res) => {
        console.log('hit createMessage')
        const {pin, message} = req.body

        for (let i=0; i<chats.length; i++) {
            const existing = bcrypt.compareSync(pin, chats[i].pinHash)
            if (existing) {
                chats[i].messages.push(message)
                let chatObjCopy = {...chats[i]}
                delete chatObjCopy.pinHash  // remove pinHash fro the obj before returning
                res.status(200).send(chatObjCopy)
                return
            }
        }

        const salt = bcrypt.genSaltSync(5)
        console.log("   salt:", salt)
        const pinHash = bcrypt.hashSync(pin, salt)
        console.log("pinHash:", pinHash)

        const newChat = {
            pinHash: pinHash,
            messages: [message]
        }
        chats.push(newChat)
        let chatObjCopy = {...newChat}
        delete chatObjCopy.pinHash  // remove pinHash fro the obj before returning
        res.status(200).send(chatObjCopy)
    }
}