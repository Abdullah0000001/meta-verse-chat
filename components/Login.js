import Image from 'next/image'
import { useMoralis } from 'react-moralis';
function Login() {
    const { authenticate } = useMoralis();
    return (
        <div className="bg-black relative">
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <Image 
                    className="object-cover rounded-full"
                    src="https://cdn01.vulcanpost.com/wp-uploads/2021/10/Andy-Warhol-Painting-to-be-Centerpiece-at-First-Crypto-Art-Auction.jpeg"
                    width={200} height={200}
                />
                <button
                    onClick={authenticate}
                    className="bg-yellow-500 rounded-lg p-5 text-bold animate-pulse"
                  >
                  Login to the MetaVerse
                </button>
            </div>
            <div className="w-full h-screen">
                <Image
                    src="https://www.universitymagazine.ca/wp-content/uploads/2021/09/How-To-Create-NFT-Art-Online.jpg"
                    layout='fill'
                    objectFit='cover'
                />
            </div> 
        </div>
    )
}

export default Login
