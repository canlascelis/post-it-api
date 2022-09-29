import userModel from '../model/user.model.js';
import bcrypt from 'bcrypt';

// TODO: 
async function hashPassword(pwd) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPwd = await bcrypt.hash(pwd ,salt)

        return hashedPwd
    } catch (error) {
        console.log(error);
        throw new error;
    }
}


function hashPassword2(pwd){
    try {
        let saltRound = bcrypt.genSaltSync(10);
        let hashedPwd = bcrypt.hashSync(pwd, saltRound);
        return hashedPwd;
    } catch (error) {
        return error;
    }
}

const user = userModel.Users;

const createUser = async (req, res) => {
    const userName = req.body.userName;
    let password = req.body.password;

    /* await hashPassword(password) 
        .then(hash => password = hash)
        .catch(err => res.send(err)) */

    await user.create({
        userName: userName,
        password: hashPassword2(password)
    })
        .then(() => {
            res.json({ message: 'Successfully created your account!' })
        })
        .catch(err => {
            res.status(400)
            res.send(err);
        })
}

const getAllUser = (req, res) => {
    user.findAll()
    .then((data) => {
        res.json(data);
        res.status(200);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
        res.status(400);
    })
}

export default {
    createUser,
    getAllUser
}