
const Login = () => {
    return (
        <div className="w-full max-w-sm p-4 ml-[20px] mt-10 lg:ml-[550px] lg:mt-10 md:ml-[200px] md:mt-10 bg-green-100 border-2 border-green-700 flex justify-center rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6">
                <h5 className="text-xl lg:text-5xl font-medium text-green-700 playfair">Login</h5>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-[300px] p-2.5" placeholder="email"/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
              
                <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                <div className="text-sm font-medium text-gray-500">
                    Not registered? <a className="text-blue-700 hover:underline ml-28">Create account</a>
                </div>
            </form>
        </div>
    );
};

export default Login;