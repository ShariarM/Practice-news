import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Rightsidenav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-4'>
                <h2 className="text-2xl">LogIn With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className='p-4 space-y-3 mb-4'>
                <h2 className="text-2xl">Find US</h2>
                <a className='p-4 flex text-lg items-center' href="">

                    <FaFacebook className='mr-2'></FaFacebook>
                    <span>FaceBook</span>

                </a>
                <a className='p-4 flex text-lg items-center' href="">
                    <FaTwitter className='mr-2'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
        </div>
    );
};

export default Rightsidenav;