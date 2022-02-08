import './App.css';
import { PostListPage } from './Components/Posts/postListPage/PostListPage';
import { UserDetailPage } from './Components/Users/userDetailPage/UserDetailPage';
import { UserListPage } from './Components/Users/userListPage/UserListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='posts' element={<PostListPage/>}/>
        <Route path='users' element={<UserListPage/>}/>
        <Route path='users/:userid' element={<UserDetailPage/>}/>
        <Route path="*" element={<p>There's nothing here!</p>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
