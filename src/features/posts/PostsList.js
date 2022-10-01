import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostList = () => {

  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const postError = useSelector(getPostsError);

  

  useEffect(() => {

    if(postStatus === 'idle'){
      dispatch(fetchPosts());
    }

  }, [dispatch, postStatus])


  let content;
  if (postStatus === 'loading') {
      content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
      const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
      content = orderedPosts.map((post, index) => <PostsExcerpt key={index} post={post} />)
  } else if (postStatus === 'failed') {
      content = <p>{postError}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
