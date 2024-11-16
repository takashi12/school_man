import React from "react";
import { FaEnvelope, FaFingerprint } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Login = () => {
  const { formData, message, handleChange, handleSubmit } = useGlobalContext();

  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Welcome Back!
          </h2>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Login to your account
          </p>
        </div>

        <div class="relative max-w-md mx-auto mt-8 md:mt-16">
          <div class="overflow-hidden bg-white rounded-md shadow-md">
            <div class="px-4 py-6 sm:px-8 sm:py-7">
              <form onSubmit={handleSubmit}>
                <div class="space-y-5">
                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaEnvelope className="h-5 w-5" />
                      </div>

                      <input
                        type="email"
                        name=""
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email to get started"
                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <p
                    style={{
                      color: message.email.includes("valid") ? "green" : "red",
                    }}
                  >
                    {message.email}
                  </p>

                  <div>
                    <div class="flex items-center justify-between">
                      <label for="" class="text-base font-medium text-gray-900">
                        Password
                      </label>
                      <Link
                        title=""
                        class="text-sm font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 focus:text-orange-600 hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaFingerprint className="h-5 w-5" />
                      </div>
                      <input
                        type="password"
                        name=""
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <p
                    style={{
                      color: message.password.includes("valid")
                        ? "green"
                        : "red",
                    }}
                  >
                    {message.password}
                  </p>

                  <div>
                    <Link to="/Control">
                      <button
                        type="submit"
                        class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Log in
                      </button>
                    </Link>
                  </div>

                  <div class="text-center">
                    <p class="text-base text-gray-600">
                      Don’t have an account?
                      <Link
                        to="/Singin"
                        class="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                      >
                        Create a free account
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
