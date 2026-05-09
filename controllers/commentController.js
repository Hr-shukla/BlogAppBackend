//import modle 
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");


exports.createComment = async(req,res)=>{
    try{
        //fetch
        const {post,user,body} = req.body;

        //create a comment object
        const comment = new Comment({
            post,
            user,
            body,
        });

        // save the new comment in db
        const savedComment = await comment.save();

        // find the post by id and add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        ) .populate("comments")
          .exec();


        res.json({
            post: updatedPost,
        });
    }
    catch(error){
            return res.status(500).json({
                error:" ERROR WHILE CREATING COMMENT" ,
            });
    }
};