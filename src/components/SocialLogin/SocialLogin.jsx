import { FaGoogle, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {

    const { googleLogin, githubLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location?.state || "/";


    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then((result) => {
                if (result.user) {
                    navigate(from);
                }
            });
    };

    return (
        <div>
            <div className="divider font-sedan text-xl robotoSlab">OR</div>

            <div className="mt-6 text-2xl">

                <h1 onClick={() => handleSocialLogin(googleLogin)} className="border-2 flex flex-row lg:flex-row md:flex-row justify-center items-center gap-10 p-1 rounded-md bg-green-300 border-green-600 text-green-900 cursor-pointer"><FaGoogle></FaGoogle>Continue with Google</h1>


                <h1 onClick={() => handleSocialLogin(githubLogin)} className="border-2 flex flex-row lg:flex-row md:flex-row justify-center items-center gap-10 p-1 rounded-md bg-green-300 border-green-600 text-green-900 cursor-pointer mt-4"><FaGithub></FaGithub>Continue with Github</h1>

            </div>

        </div>
    );
};

export default SocialLogin;