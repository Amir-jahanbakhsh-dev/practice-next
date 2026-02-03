import React from 'react';
import { redirect } from 'next/navigation'
 
const users=require('@/db.json')
const user = (req,res) => {
    const userId=req.query.id
    console.log('userid=',userId);
    users.forEach(user => {
        if (user.id==userId) {
            res.json(user)
        }   
    });
}

export default user;
