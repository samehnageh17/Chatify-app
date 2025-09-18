import { Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 relative">
      {/* تأثير دوائر ضوء */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

      {/* المحتوى */}
      <div className="relative z-10 text-center text-white">
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
