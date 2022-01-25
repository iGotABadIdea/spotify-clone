// import { getProviders, signIn } from "next-auth/react";
// import { useState, useEffect} from "react";

// function Signin({providers}) {

//     return (
//         <div className="flex flex-col items-centre bg-black min-h-screen w-full justify">
//             <img className="w-40 mb-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="Spotify-image" />

//             {Object.values(providers).map( provider => (
//                 <div key={provider.name}>
//                     <button className="bg-[#18D860] text-white p-5 rounded-lg" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>login with {provider.name}</button>
//                 </div>

//             ))}
//         </div>
//     );
// }
// export default Signin;
// export async function getServerSideProps() {
//     const providers = await getProviders();
//     return {
//         props: { providers },
//     };
// }
import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }) {
    return (
        <div className="flex flex-col items-centre bg-black min-h-screen w-full justify">
            <img className="w-40 mb-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="Spotify-image" />
            {providers ? (Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            )


            )) : ('')}
        </div>
    )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/