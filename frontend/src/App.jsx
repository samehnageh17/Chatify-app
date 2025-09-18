import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ChatPage from "./pages/ChatPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PageLoader from "./pages/PageLoader";
import { useAuthStore } from "./store/UseAthueStore";
import { useEffect } from "react";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(authUser, isCheckingAuth);
  if (isCheckingAuth) return <PageLoader />;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 relative">
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

      <div className="relative z-10 text-center text-white">
        <Routes>
          <Route
            path="/"
            element={authUser ? <ChatPage /> : <Navigate to={"login"} />}
          />
          <Route
            path="/login"
            element={!authUser ? <Login /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!authUser ? <Signup /> : <Navigate to={"/"} />}
          />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
