import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hook";
import { IPost, addPosts } from "../../Store/slices/postSlice";
import axios from "axios";
import { RootState } from "../../Store/store";
import PostList from "../../Components/PostList/PostList";

function MainPage() {
  const posts = useAppSelector((state: RootState) => state.postData.posts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(addPosts(res.data)));
  }, []);

  return (
    <div>
      <PostList posts={posts}></PostList>
    </div>
  );
}

export default MainPage;
