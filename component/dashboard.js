import { useState } from "react";
import styles from "../styles/Home.module.css";
import { IoSearch } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import { axios } from "axios";

const Dashboard = () => {
  const [input, setInput] = useState("");
  const { data: session, status } = useSession();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .get({
        method: "get",
        url: "https://api.spotify.com/v1/search",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer" + session.acc,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <form action="#" method="post">
            <input
              type="text"
              name="song"
              placeholder="enter song or artist name"
              value={input}
              onChange={handleInputChange}
            />
          </form>
          <button onClick={handleClick}>
            <IoSearch size={22} color="white" />
          </button>
        </div>
      </div>
      <div className="dataContainer">
        <h1>dummy data</h1>
      </div>
    </div>
  );
};

export default Dashboard;
