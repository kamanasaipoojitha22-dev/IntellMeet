import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  const addUser = async () => {
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        role,
      }),
    });

    fetchUsers();

    setUsername("");
    setEmail("");
    setRole("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>IntelliMeet Users</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <br /><br />

      <button onClick={addUser}>Add User</button>

      <hr />

      {users.map((user) => (
        <div key={user._id}>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
          <p>{user.role}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;