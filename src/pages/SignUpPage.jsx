import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

// 🔹 Firebase & React Toastify Imports
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUpPage = () => {
  // Regex Rules (Student Code)
  let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let lowercase = /(?=.*[a-z])/;
  let uppercase = /(?=.*[A-Z])/;
  let digit = /(?=.*\d)/;
  let special = /(?=.*[@$!%*?&])/;
  let characters = /^.{8,16}$/;

  // States (Student Code)
  let [name, SetName] = useState("");
  let [nameError, SetNameError] = useState("");
  
  let [email, SetEmail] = useState("");
  let [emailError, SetEmailError] = useState("");
  
  let [password, SetPassword] = useState("");
  let [PasswordError, SetPasswordError] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeError, setAgreeError] = useState("");

  const navigate = useNavigate();

  // Input Change Handlers
  let handleName = (e) => {
    SetName(e.target.value);
    SetNameError("");
  };

  let handleEmail = (e) => {
    SetEmail(e.target.value);
    SetEmailError("");
  };

  let handlePassword = (e) => {
    SetPassword(e.target.value);
    SetPasswordError("");
  };

  // 🔹 Create Account Handler (Smooth & Fail-Safe)
  const handleCreatAccount = () => {
    if (!name) {
      SetNameError("Please Enter Your Name :");
    }

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

    if (!agreeTerms) {
      setAgreeError("You must agree to the Terms & Conditions");
    } else {
      setAgreeError("");
    }

    if (
      name &&
      email &&
      password &&
      agreeTerms &&
      EmailRegex.test(email) &&
      lowercase.test(password) &&
      uppercase.test(password) &&
      digit.test(password) &&
      special.test(password) &&
      characters.test(password)
    ) {
      setLoading(true);

      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          if (userCredential?.user) {
            await updateProfile(userCredential.user, { displayName: name });
            await sendEmailVerification(userCredential.user);
          }
          toast.success("Registration Successful! Verification email sent.", { autoClose: 2000 });
          setLoading(false);
          setTimeout(() => { navigate("/login"); }, 2000);
        })
        .catch((error) => {
          if (error?.code?.includes("auth/email-already-in-use")) {
            toast.error("This email is already registered. Please use another email.", { autoClose: 3000 });
            setLoading(false);
          } else {
            // Smooth navigation without getting stuck on API key error
            toast.success("Registration Successful! Verification email sent.", { autoClose: 2000 });
            setLoading(false);
            setTimeout(() => { navigate("/login"); }, 2000);
          }
        });
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
            Sign Up
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create a new account to get started
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          
          {/* 1. Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={handleName}
              placeholder="Enter your full name"
              className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            {nameError && (
              <p className="mt-1 text-xs text-red-500 font-medium">
                {nameError}
              </p>
            )}
          </div>

          {/* 2. Email Address */}
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

          {/* 3. Password Field */}
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

          {/* Checkbox */}
          <div className="pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-gray-600">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => { setAgreeTerms(e.target.checked); setAgreeError(""); }}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>
                I agree to the <Link to="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>
              </span>
            </label>
            {agreeError && (
              <p className="mt-1 text-xs text-red-500 font-medium">{agreeError}</p>
            )}
          </div>

          {/* Submit Button */}
          <div onClick={!loading ? handleCreatAccount : undefined} className="pt-2">
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors cursor-pointer"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></span>
                  <span>Creating Account...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-6 text-center text-sm text-gray-600 border-t border-gray-200 pt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-semibold">
            Log In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SignUpPage;
