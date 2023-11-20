import './App.css';
import Posts from "./components/posts/Posts";
import PostList from "./components/posts/PostList";
import {Route, Routes} from "react-router-dom";
import {PostCreate} from "./components/posts/PostCreate";
import {ToastContainer} from "react-toastify";
function App() {
    return (
        <>
            <Routes>
                <Route path="/postlist" element={<PostList/>}></Route>
                <Route path="/create" element={<PostCreate/>}></Route>
                {/*<Route path="*" element={<Page404/>}></Route>*/}
            </Routes>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
