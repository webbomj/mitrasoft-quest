import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hook";
import { IPost, addPosts } from "../../Store/slices/postSlice";
import axios from "axios";
import { RootState } from "../../Store/store";

function MainPage() {
  const count = useAppSelector((state: RootState) => state.postData.posts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(addPosts(res.data)));
  }, []);

  return (
    <div>
      {count.map((post) => (
        <div key={post.id} id={post.id.toString()}>
          {post.userId}
        </div>
      ))}
    </div>
  );
}

export default MainPage;
