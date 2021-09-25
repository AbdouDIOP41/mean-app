const mongoose = require('mongoose');
const { isEmail} = require('validator');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema(
    {
        pseudo : {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 65,
            unique : true,
            trim : true
        },
        email : {
            type: String,
            required: true,
            validate : [isEmail],
            lowercase : true,
            unique : true,
            trim : true
        },
        password : {
            type: String,
            required: true,
            minlength: 4,
            max: 1024,
            trim : true
        },
        
    },

    {
        timestamps: true,
      }
)



/*const database = require('@models/database.js');


const users = {

    async getAll() {
        const dbo = await database.getDbo();

        return await dbo.collection('users').find().toArray();
    },

    async search(good) {
        const dbo = await database.getDbo();

        const {_id} = good;

        return await dbo.collection('users').find({_id: new ObjectId(_id)}).toArray();
    },

    async create(good) {
        const dbo = await database.getDbo();
        
        delete good._id;
        delete good.id;
        
        return (await dbo.collection('users').insertOne(good)).ops[0];
    },

    async update(good) {
        const dbo = await database.getDbo();

        const {_id} = good;
        
        delete good._id;
        delete good.id;

        return await dbo.collection('users').findOneAndUpdate({_id:  new ObjectId(_id)},{$set: good},{ returnNewDocument: true });
    },

    async delete(good) {
        const dbo = await database.getDbo();

        const {_id} = good;
        
        await dbo.collection('users').deleteOne({_id: new ObjectId(_id)});
    }

}


module.exports = users;
*/