import { FC } from "react";
import Post from "../Post/Post";

import { IPostListProps } from "./interface";
import "./PostList.scss";

const PostList: FC<IPostListProps> = (props) => {
  return (
    <div className="postList">
      {props.posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default PostList;
