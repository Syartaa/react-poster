import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css'

const PostsList = () => {
  return (
    <>
    <NewPost/>
    <ul className={classes.posts}>
       <Post author="Syarta" body="React.js is awesome!"/>
      <Post author="Jona" body="React.js is bad!"/>

    </ul>
    </>
  );
};

export default PostsList;
