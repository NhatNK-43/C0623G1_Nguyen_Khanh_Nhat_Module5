import './App.css';
import Posts from "./components/posts/Posts";
import PostList from "./components/posts/PostList";
import {Route, Routes} from "react-router-dom";
import {PostCreate} from "./components/posts/PostCreate";
import {ToastContainer} from "react-toastify";
import {NotFound} from "./components/NotFound";
import {PostUpdate} from "./components/posts/PostUpdate";
import {PostDetail} from "./components/posts/PostDetail";
import {PostsCallAPI} from "./components/posts_call_api/PostsCallAPI";
import {PostCallAPICreate} from "./components/posts_call_api/PostCallAPICreate";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PostsCallAPI/>}></Route>
                <Route path="/create-post-call-api" element={<PostCallAPICreate/>}></Route>
                <Route path="/posts" element={<PostList/>}></Route>
                <Route path="/create" element={<PostCreate/>}></Route>
                <Route path="/update/:id" element={<PostUpdate/>}></Route>
                <Route path="/detail/:id" element={<PostDetail/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
