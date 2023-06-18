import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hook";
import { IPost, addPosts } from "../../Store/slices/postSlice";
import axios from "axios";
import { RootState } from "../../Store/store";
import PostList from "../../Components/PostList/PostList";
import Pagination from "../../Components/Navigator/Pagination";

export const POSTONPAGE = 10;

function MainPage() {
  const posts = useAppSelector((state: RootState) => state.postData.posts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch(addPosts(res.data));
        return res.data.length;
      });
  }, []);

  const paginatePage = Math.ceil(posts.length / POSTONPAGE);

  return (
    <div>
      <Pagination paginatePage={paginatePage ?? 0}></Pagination>
      <PostList posts={posts}></PostList>
    </div>
  );
}

export default MainPage;
