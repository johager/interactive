const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

const userId = 4
const clientId = 3

module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`select * from cc_clients c join cc_users u on c.user_id=u.user_id where u.user_id=${userId}`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    updateUserInfo: (req, res) => {
        let {firstName, lastName, phoneNumber, email, address, city, state, zipCode} = req.body

        const qry1 = `update cc_users set first_name='${firstName}', last_name='${lastName}', phone_number=${phoneNumber}, email='${email}' where user_id=${userId}`

        const qry2 = `update cc_clients set address='${address}', city='${city}', state='${state}', zip_code=${zipCode} where user_id=${userId}`
        sequelize.query(`${qry1};${qry2}`)
            .then(() => res.sendStatus(200))
            .catch(err => console.log(err))
    },
    getUserAppt: (req, res) => {
        sequelize.query(`select * from cc_appointments where client_id=${clientId} order by date desc`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    requestAppointment: (req, res) => {
        const {date, service} = req.body

        const qry = `insert into cc_appointments (client_id, date, service_type, notes, approved, completed) values (${clientId}, '${date}', '${service}', '', false, false) returning *`
        console.log(qry)

        sequelize.query(qry)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }
}

// requestAppointment: (req, res) => {
//     const {date, service} = req.body

//     sequelize.query(`
//         INSERT INTO cc_appointments (client_id, date, service_type, notes, approved, completed)
//         VALUES (${clientId}, '${date}', '${service}', '', false, false)
//         RETURNING *;
//     `)
//         .then(dbRes => res.status(200).send(dbRes[0]))
//         .catch(err => console.log(err))
// }