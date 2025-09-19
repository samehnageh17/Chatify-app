import { MailIcon, MessageCircleIcon, UserIcon, Lock } from "lucide-react";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LoaderIcon } from "react-hot-toast";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };
  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
        <BorderAnimatedContainer>
          {/* Form column -Left side */}
          <div className="md:w-1/2 p-8 flex h-full items-center justify-center md:border-r border-slate-600/30">
            <div className="w-full max-w-md">
              {/* Heading text */}
              <div className="text-center mb-8">
                <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                <h2 className="text-2xl font-bold text-slate-200 mb-2">
                  Create Acount
                </h2>
                <p className="text-slate-400 ">Sing up for a new account </p>
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FUll name */}
                <div>
                  <label className="auth-input-label">Full Name</label>
                  <div className="relative">
                    <UserIcon className="auth-input-icon" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="input"
                      placeholder="Sameh Nageh"
                    />
                  </div>
                </div>
                {/* Email */}
                <div>
                  <label className="auth-input-label">Email</label>
                  <div className="relative">
                    <MailIcon className="auth-input-icon" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="input"
                      placeholder="samehnageh@gmail.com"
                    />
                  </div>
                </div>
                {/* password */}
                <div>
                  <label className="auth-input-label">Password</label>
                  <div className="relative">
                    <Lock className="auth-input-icon" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="input"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                {/* submit button */}
                <button
                  className="auth-btn"
                  type="submit"
                  disabled={isSigningUp}
                >
                  {isSigningUp ? (
                    <LoaderIcon className="w-full h-5 animate-spin text text-center" />
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>
              {/* Link to login */}
              <div className="mt-6 text-center">
                <Link to="/login" className="auth-link">
                  Already have an account ?Login
                </Link>
              </div>
            </div>
            {/* form right side */}
            <div className=" flex-1 hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div>
                <img
                  src="/"
                  alt="People using mobile devices"
                  className="w-full h-auto object-contain"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-cyan-400">
                    Start Your Journey Today
                  </h3>

                  <div className="mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Free</span>
                    <span className="auth-badge">Easy Setup</span>
                    <span className="auth-badge">Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}
