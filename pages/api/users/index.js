import React from 'react';
//database fake
const users = [
    {
        name: "akbar",
        email: "akbae@gmail.com",
        passwoard: "121212"
    },
    {
        name: "asdghar",
        email: "asghar@gmail.com",
        passwoard: "3636"
    },
    {
        name: "mamali",
        email: "mamali@gmail.com",
        passwoard: "8611"
    }
]
const handller = (req, res) => {
    console.log(req.method);

    switch (req.method) {
        case 'GET':
            return res.json(users)
            break;

        case 'POST':
            const { name, email, passwoard } = req.body
            users.push({ name, email, passwoard })
            return res.json({ message: "کاربر با موفقیت ثبت نام شد", data: { users } })
            break;

        case 'PUT':
            return res.json({ message: "رمز عبور تغییر یافت" })
            break;

        case 'DELETE':
            return res.json({ message: "DELETE USERS" })
            break;

        default:
            break;
    }
}


export default handller
