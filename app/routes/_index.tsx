import { Form, Link } from "@remix-run/react";
export default function Index() {
  return (
    <>
      <div className="bg-[#1381D4]">
        <img src="/logo.svg" />
        <p className="text-6xl font-black text-center p-5 text-white">
          Connect with friends, share your thoughts, and discover new things.
        </p>
      </div>
      {/* form */}
      <div className="mt-36 w-screen h-[60%] flex justify-center items-center">
        <div className="p-3 bg-surface-variant bg-opacity-20 rounded-xl">
          <div className="max-w-md w-full space-y-2">
            <div>
              <h2 className="mt-1 text-center text-3xl font-extrabold text-primary">
                Login
              </h2>
            </div>
            <form className="space-y-2" action="#" method="POST">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md interactive-bg-primary"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <Link to="/" className="block m-2 p-3 bg-primary rounded-lg">
            Login with Google
          </Link>
        </div>
      </div>
    </>
  );
}
