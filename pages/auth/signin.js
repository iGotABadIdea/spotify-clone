import { getProviders, signIn, useSession } from "next-auth/react";
function Signin({ providers }) {
    const checkProviders = (
        providers &&
        providers.length
    );
    const { data: session } = useSession();
    return (
        <div>
            <img className="w-40 mb-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="Spotify-image" />

            {checkProviders && Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id, { callbackUrl: "/"})}>login with {provider.name}</button>
                </div>

            ))}
        </div>
    );
}
export default Signin;
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}