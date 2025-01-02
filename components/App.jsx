import { useState } from "react";
import UserCard from "./UserCard";

export default function App(){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchUser() {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error("user fetching error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Random User Generator</h1>
      <button onClick={fetchUser} className="generate-button">
        Generate User
      </button>
      {
        <UserCard
          user={user}
          loading={loading}
        />
      }
      {loading && <p>Loading...</p>}
    </div>
  );
};
