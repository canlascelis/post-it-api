import postModel from "../model/post.model.js";
import peopleModel from "../model/people.model.js";
import DB from '../config/index.js';

const post = postModel.Posts;

const createPost = async (req, res) => {
    const { postTitle, postContent, isDeleted } = req.body;
    const { name, isAnonymous } = req.body;

    // new people and new post
        await peopleModel.People.create({
            name: name,
            isAnonymous: isAnonymous,
            Posts: [{
                postTitle: postTitle,
                postContent: postContent,
                isDeleted: isDeleted
            }]
        }, {
            include: postModel.Posts
        })
        .then((data) => {
            res.send({message: 'Successfully posted!'})
            res.status(200)
        })
        .catch((err) => {
            res.send(err)
            res.status(400)
        })
};

const allPost = (req, res) => {
    post.findAll({ where: { isDeleted: false } })
        .then(data => {
            //res.send({res})
            console.log(data.values);
            res.json(data)
            res.status(200)
        })
        .catch(err => {
            console.error(err);
            res.status(400);
            DB.close()
        })
};

// hard delete post by :id
const deletePostByID = (req, res) => {
    const id = req.params.id;

    post.destroy({ where: { id: id } })
        .then(() => {
            res.json({ message: 'Successfully deleted!' })
        })
        .catch(() => {
            res.json({ message: 'error occured please contact the admin' });
        })
};

// soft delete
const updatePostDelete = (req, res) => {
    const id = req.params.id;

    post.update()
}

export default {
    createPost,
    allPost,
    deletePostByID,
    updatePostDelete
};