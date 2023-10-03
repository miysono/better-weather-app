import { useNavigate } from "react-router-dom";
import Navbar from "../../layouts/Navbar";

import { useAuth } from "/src/contexts/AuthContext";
import { useEffect, useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signup, createUsername, isLoggedIn } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword)
      setError("All fields must be filled!");

    if (password !== confirmPassword) setError("Passwords do not match!");

    try {
      setError("");
      setIsLoading(true);
      await signup(email, password);
      createUsername(name);
      navigate("/app");
    } catch {
      setIsLoading(false);
      setError("Failed to create an account. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn && navigate("/app");
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Navbar bg="bg-gray-800" textColor="text-blue-400" logoBlue={true} />
      {/* Body */}
      <div className="min-h-screen bg-gray-800 overflow-y-hidden">
        <div className="relative w-screen">
          <div className="flex flex-col max-w-lg  rounded-2xl p-10 w-full bg-gray-800 text-blue-400 mx-auto mt-20">
            {/* Title */}
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign up</h1>
              <p className="text-sm text-gray-400">Create your account</p>
            </div>
            {error && <p className="p-5 text-center text-red-500">{error}</p>}
            {/* Form */}
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  {/* NAME */}
                  <label className="block mb-2 text-sm">Name</label>
                  <input
                    type="name"
                    placeholder="Bob Jonas"
                    className="w-full px-3 py-2 border rounded-md border-blue-200 bg-gray-700 "
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="mail@example.com"
                    className="w-full px-3 py-2 border rounded-md border-blue-200 bg-gray-700 "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md border-blue-200 bg-gray-700 "
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* CONFIRM PASS */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Confirm Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md border-blue-200 bg-gray-700 "
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-2">
                <div>
                  {/* Submit */}
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full px-8 py-3 font-semibold rounded-md border-2 border-blue-400"
                  >
                    Sign up
                  </button>
                </div>
                {/* Register */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
