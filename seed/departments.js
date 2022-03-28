const db = require('../db')
const { Department } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createDepartment = async () => {
    const departments = [
        { departmentTitle: 'FOH' },
        { departmentTitle: 'BOH' }
    ]

    await Department.insertMany(departments)
    console.log('Created departments!')
}

const run = async () => {
    await createDepartment()
    db.close()
}

run()