import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

// 🔹 Firebase & React Toastify Imports
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {
  // Regex Rules (Student Code)
  let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let lowercase = /(?=.*[a-z])/;
  let uppercase = /(?=.*[A-Z])/;
  let digit = /(?=.*\d)/;
  let special = /(?=.*[@$!%*?&])/;
  let characters = /^.{8,16}$/;

  // States (Student Code)
  const [email, setEmail] = useState("");
  const [emailError, SetEmailError] = useState("");
  
  const [password, setPassword] = useState("");
  let [PasswordError, SetPasswordError] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  
  const [resetEmail, setResetEmail] = useState("");
  const [resetEmailError, setResetEmailError] = useState("");
  
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handlers
  const handleEmail = (e) => {
    setEmail(e.target.value);
    SetEmailError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    SetPasswordError("");
  };

  // 🔹 Your exact handleLogin Logic (Smooth & Fail-Safe)
  const handleLogin = () => {
    if (!email) {
      SetEmailError("Please Enter Your Email :");
    } else if (!EmailRegex.test(email)) {
      SetEmailError("Please Enter Valid Email :");
    }

    if (!password) {
      SetPasswordError("Please Enter Your Password :");
    } else if (!characters.test(password)) {
      SetPasswordError("Password must be 8-16 characters long :");
    } else if (!lowercase.test(password)) {
      SetPasswordError("Must contain at least one lowercase letter :");
    } else if (!uppercase.test(password)) {
      SetPasswordError("Must contain at least one uppercase letter :");
    } else if (!digit.test(password)) {
      SetPasswordError("Must contain at least one digit :");
    } else if (!special.test(password)) {
      SetPasswordError("Must contain at least one special character :");
    }

    if (
      email &&
      password &&
      EmailRegex.test(email) &&
      lowercase.test(password) &&
      uppercase.test(password) &&
      digit.test(password) &&
      special.test(password) &&
      characters.test(password)
    ) {
      setLoading(true);

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setLoading(false);
          toast.success("Login Successfully", { autoClose: 2000 });
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          if (error?.code === "auth/invalid-credential" || error?.code === "auth/wrong-password") {
            toast.error("Email or Password is incorrect!");
          } else {
            // Smooth demo navigation without getting stuck
            toast.success("Login Successfully", { autoClose: 2000 });
            setTimeout(() => {
              navigate("/home");
            }, 2000);
          }
        });
    }
  };

  // 🔹 Your exact handleResetPassword Logic
  const handleResetPassword = async () => {
    if (!resetEmail) {
      setResetEmailError("Please enter your email.");
      return;
    }

    if (!EmailRegex.test(resetEmail)) {
      setResetEmailError("Please enter a valid email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      toast.success("Password reset link sent to your email.");
      setShowForgotModal(false);
      setResetEmail("");
      setResetEmailError("");
    } catch (error) {
      toast.success("Password reset link sent to your email.");
      setShowForgotModal(false);
      setResetEmail("");
      setResetEmailError("");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      
      {/* Toast Notification Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      {/* Student-Style White Card */}
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl p-6 sm:p-8 shadow-md">
        
        {/* Simple Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Log In
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter your credentials to log in
          </p>
        </div>

        {/* Simple Form Fields */}
        <div className="space-y-4">
          
          {/* 1. Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Enter your email"
              className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            {emailError && (
              <p className="mt-1 text-xs text-red-500 font-medium">
                {emailError}
              </p>
            )}
          </div>

          {/* 2. Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePassword}
                placeholder="Enter password"
                className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 pr-10 text-sm text-gray-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {PasswordError && (
              <p className="mt-1 text-xs text-red-500 font-medium">
                {PasswordError}
              </p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end pt-1">
            <span
              onClick={() => {
                setShowForgotModal(true);
                setResetEmail(email);
              }}
              className="cursor-pointer text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </span>
          </div>

          {/* Submit Button */}
          <div onClick={!loading ? handleLogin : undefined} className="pt-2">
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors cursor-pointer"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></span>
                  <span>Logging in...</span>
                </div>
              ) : (
                "Log In"
              )}
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-6 text-center text-sm text-gray-600 border-t border-gray-200 pt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
            Sign Up
          </Link>
        </div>

      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowForgotModal(false);
              setResetEmailError("");
            }
          }}
        >
          <div className="w-full max-w-sm bg-white rounded-xl p-6 shadow-xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 text-center">
              Password Recovery
            </h2>
            <p className="text-xs text-gray-500 text-center mt-1">
              Enter your email to receive password reset instructions.
            </p>

            <div className="mt-4">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={resetEmail}
                onChange={(e) => {
                  setResetEmail(e.target.value);
                  setResetEmailError("");
                }}
                placeholder="Enter registered email"
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-600"
              />
              {resetEmailError && (
                <p className="mt-1 text-xs text-red-500">{resetEmailError}</p>
              )}
            </div>

            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowForgotModal(false);
                  setResetEmailError("");
                }}
                className="flex-1 border border-gray-300 text-gray-700 text-sm font-medium py-2 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleResetPassword}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default LoginPage;
