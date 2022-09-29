import peopleModel from "../model/people.model.js";

const people = peopleModel.People;

const newPeople = async (req, res) => {
    let { name, isAnonymous } = req.body;

    await people.create({
        name: name,
        isAnonymous: isAnonymous
    })
    .then(() => {
        res.send({message: 'Successfully created!'})
        res.status(200)
    })
    .catch((err) => {
        res.send(err)
        res.status(400)
    })
}

const getAllPeople = async (req, res) => {
    await people.findAll()
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
}


export default { newPeople, getAllPeople };