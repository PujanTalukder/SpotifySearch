import styles from "../styles/Login.module.css";
import Image from "next/image";
import logo from "../public/spotifyLogo.png";
import { getProviders, signIn } from "next-auth/react";

// const CLIENT_ID = "1ce8a52626cd436e82438ef5dd065136";
// const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
// const REDIRECT_URI = "https://localhost:3000/dashboard";

const Login = ({ providers }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <Image src={logo} alt="logo" width={500} height={150} />
        {Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
