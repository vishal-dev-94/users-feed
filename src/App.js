import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
function App() {
  const [userData, updateUserData] = useState([]);
  async function fetchData() {
    const response = await axios.get("https://randomuser.me/api/?results=10");
    updateUserData((userData) => [...response.data.results]);
    // updateUserData(response.data.results);
  }
  useEffect(() => {
    fetchData();
  }, []);
  // console.log("response", userData);
  return (
    <div className="App">
      <Header />
      <div className="d-flex justify-content-center w-100%">
        <div className="container justify-content-center">
          <div className="row w-100 d-flex justify-content-center">
            {userData.map((userItem) => {
              return <UserCard userItem={userItem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
