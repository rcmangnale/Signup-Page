export default function SignIn() {
    return (
      <>
        
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 shadow-md border bg-slate-50">
          <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white">
            
            <h1 className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">Sign Up</h1>
            <p className="mt-2 text-center text-sm text-gray-600 ">
              
              <a href="#" className="text-lg">
                No credit card required
              </a>
            </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
            <div className=" py-8 px-4  shadow-xl sm:rounded-lg sm:px-10 bg-white">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  
                  <div className="mt-1">
                    <input
                      id="email"
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-100 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-1">
                    <input
                      id="text"
                      name="company name"
                      placeholder="Company Name"
                      type="text"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-100 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      placeholder="Password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-100 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    I agree to the <span className="text-indigo-600">Terms & Conditions</span>
                    </label>
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-red-600 border border-transparent  py-4 px-2 text-lg font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Get Started
                  </button>
                </div>
              </form>
  
              <div>
                <p className="text-gray-600">
                Already have an account?  
                <a href="#" className="text-lg px-2 text-blue-800">
                 Sign in
              </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }