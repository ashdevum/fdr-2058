import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const InputField = ({ 
  icon: Icon, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  name, 
  required = false,
  isPassword = false 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="relative w-full">
      <div className="nova-input-group flex items-center px-4 py-3.5 rounded-2xl text-sm w-full transition-all duration-300">
        {/* Left Icon */}
        {Icon && (
          <div className="text-purple-300/60 mr-3.5 shrink-0 flex items-center justify-center">
            <Icon className="w-5 h-5" strokeWidth={1.8} />
          </div>
        )}

        {/* Input element */}
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="bg-transparent border-none outline-none w-full text-white placeholder:text-purple-200/40 text-[15px] font-normal tracking-wide"
        />

        {/* Right Password Eye Toggle Button */}
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-purple-300/50 hover:text-purple-200 transition-colors p-1.5 focus:outline-none shrink-0 cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" strokeWidth={1.8} />
            ) : (
              <Eye className="w-5 h-5" strokeWidth={1.8} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
