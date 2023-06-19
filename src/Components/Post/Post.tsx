import { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Avatar from "../Avatar/Avatar";

import { IPostProps } from "./interface";
import "./Post.scss";

const Post: FC<IPostProps> = ({ post }) => {
  return (
    <Card className="post">
      <div className="post__container">
        <div className="post__avatar">
          <Avatar id={post.userId}></Avatar>
        </div>
        <Card.Body className="post__body">
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button>Комментарии</Button>
        </Card.Body>
      </div>
    </Card>
  );
};

export default Post;
