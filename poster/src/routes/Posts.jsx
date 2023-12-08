import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

//import { useState } from "react";
function Posts() {
  //const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
     <Outlet/>
      <main>
        <PostsList />
       
      </main>
    </>
  );
}

export default Posts;
