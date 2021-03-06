//* Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";

//* Material UI components, hooks, and icons
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FaceIcon from "@material-ui/icons/Face";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

//* Custom components
import Replies from "./Replies";
import ReplyForm from "./ReplyForm";

//* Exported component
const PostItem = ({ post, posts, setPosts }) => {
  const { name, title, body, replies, _id, date, likes } = post;

  const [likesCount, setLikesCount] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  const [postReplies, setPostReplies] = useState([]);

  useEffect(() => {
    setLikesCount(likes);
    setPostReplies(replies);
  }, []);

  const incrementLikes = async () => {
    console.log(post);
    const res = await axios.put(`/api/forum/${_id}`);
    console.log(res);

    setLikesCount(res.data.likes);
  };

  const decrementLikes = async () => {
    console.log(post);
    const res = await axios.put(`/api/forum/dec/${_id}`);
    console.log(res);

    setLikesCount(res.data.likes);
  };

  const handleClick = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);

    if (!isChecked) {
      incrementLikes();
    } else if (isChecked) {
      decrementLikes();
    } else {
      return;
    }
  };

    //* Returns JSX to DOM
  return (
    <div>
      <Container>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={8}>
            <Paper
              style={{ padding: "1rem", marginBottom: "1rem" }}
              elevation={3}
            >
              <h1>{title}</h1>
              <div style={{ color: "#606060" }}>
                <FaceIcon
                  style={{ margin: "0", padding: "0" }}
                  fontSize="small"
                />{" "}
                {name}
              </div>
              <div style={{ color: "#606060" }}>
                <Moment format="MM/DD/YYYY">{date}</Moment> at {""}
                <Moment format="h:mm A">{date}</Moment>
              </div>

              <p style={{ lineHeight: "1.9" }}>{body}</p>
              <Replies postReplies={postReplies} />
            </Paper>

            <FormControlLabel
              onClick={handleClick}
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={isChecked ? <Favorite /> : <FavoriteBorder />}
                  name="checkedH"
                />
              }
              label={`${likesCount} likes`}
            />
            <ReplyForm
              _id={_id}
              post={post}
              setPostReplies={setPostReplies}
              postReplies={postReplies}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PostItem;
