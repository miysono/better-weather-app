import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const appNavigate = useNavigate();

  const handleSubmit = () => {
    appNavigate("/app");
  };

  return (
    <>
      <Navbar bg="bg-gray-800" textColor="text-blue-400" logoBlue={true} />
      {/* Body */}
      <div className="min-h-screen bg-gray-800 overflow-y-hidden">
        <div className="relative w-screen">
          <div className="flex flex-col max-w-lg  rounded-2xl p-10 w-full bg-gray-800 text-blue-400 mx-auto mt-20">
            {/* Title */}
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign in</h1>
              <p className="text-sm text-gray-400">
                Sign in to access your account
              </p>
            </div>

            {/* Form */}
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="mail@example.com"
                    className="w-full px-3 py-2 border rounded-md border-blue-200 bg-gray-700 "
                  />
                </div>
                {/* Password */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                    <a className="text-xs hover:underline dark:text-gray-400">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md border-blue-200 bg-gray-700 "
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-2">
                <div>
                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-8 py-3 font-semibold rounded-md border-2 border-blue-400"
                  >
                    Sign in
                  </button>
                </div>
                {/* Register */}
                <p className="px-6 text-sm text-center">
                  Don&apos;t have an account yet?
                  <a href="#" className="hover:underline">
                    {" "}
                    Sign up.
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
