import styles from "../styles/Home.module.css";
import { useSession, signOut } from "next-auth/react";
import Router from "next/router";
import { React } from "react";
import Dashboard from "../component/dashboard";

const Home = () => {
  const { data: session } = useSession();

  const handleClick = () => {
    Router.push("/login");
  };

  console.log(session);
  return (
    <div className={styles.containerHome}>
      {session ? (
        <Dashboard />
      ) : (
        <div>
          <h1>you need to log in first</h1>
          <button onClick={handleClick}>go to log in page</button>
        </div>
      )}
    </div>
  );
};

export default Home;
