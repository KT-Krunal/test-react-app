import { useState } from "react";
import FeedPost from "../components/FeedPost/FeedPost";
import PageLayout from "../components/PageLayout/PageLayout";
import { useDispatch } from "./../lib/store";
import { addPost, getPosts } from "./../lib/store/slices/postsSlice";
import { useSelector } from "react-redux";

function Feed() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const posts = getPosts();
  const onNewPostClick = () => {
    // dispatch action to set title and content
    dispatch(addPost({title, content, kudosCount: 0 }));
  }
  return (
    <PageLayout>
      <h1 className="text-5xl font-black text-gray-700 tracking-tight border-b border-gray-400 pb-2 mb-8">
        Your feed
      </h1>
      <div className="space-y-4">
      {posts.map((post, index) => (
         <div key={index}>
         <FeedPost>{post.title}</FeedPost>
       </div>
      ))}
        {/* <FeedPost>Welcome to the ClickFunnels Forum</FeedPost> */}
      </div>
      <form name='New Post' onSubmit={() => onNewPostClick()}>
        <div style={{paddingTop: '20px'}}>
          <div style={{paddingTop: '10px'}}>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div style={{paddingTop: '10px'}}>
          <input type='text' value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div style={{paddingTop: '10px', color: 'white', backgroundColor: '#4CAF50', width: '100px'}}>
            <input type='submit' value='Add Post'></input>
          </div>
          </div>
        </form>
    </PageLayout>
  );
}

export default Feed;
