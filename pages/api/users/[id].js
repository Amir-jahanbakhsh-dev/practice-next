import React from 'react';
import { redirect } from 'next/navigation'
import fs from 'fs'
import path from 'path' 
import { type } from 'os';

const user = (req,res) => {
    const pathName=path.join(process.cwd(),'/db.json')
    const data=fs.readFileSync(pathName)
    const db=JSON.parse(data)
    const users=db.users
    const userId=req.query.id
    console.log("::::",db.users);
    // res.json({Message:"ok"})
    users.forEach(user => {
        if (user.id==userId) {
            res.json(user)
        }   
    });
}

export default user;
