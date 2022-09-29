import commentModel from '../model/comment.model.js';
import DB from '../config/index.js';

const comment = commentModel.Comment;

const createComment = async (req, res) => {
    comment.create({
        
    })
};

const getAllComments = async (req, res) => {

};

export default { createComment, getAllComments };