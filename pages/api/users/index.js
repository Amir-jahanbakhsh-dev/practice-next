import React from 'react';
import fs from 'fs'
import path from 'path' 

const handller = (req, res) => {
    console.log(req.method);
        const pathName=path.join(process.cwd(),'/db.json')
        const data=fs.readFileSync(pathName)
        const db=JSON.parse(data)
        const users=db.users
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
