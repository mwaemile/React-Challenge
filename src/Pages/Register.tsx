import { useState } from "react";

import Input from "../components/Input";
import Card from "../components/Card";
import Button from "../components/Button";

type RegisterProps = {
  onRegister: () => void;
  goToLogin: () => void;
};

export default function Register({
  onRegister,
  goToLogin,
}: RegisterProps){
       const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState<
  "success" | "error" | ""
>("");


  const handleRegister = () => {
  setMessage("");
  setMessageType("");

  if (
    name.trim() === "" ||
    username.trim() === "" ||
    password.trim() === ""
  ) {
    setMessage("Please fill in all fields.");
    setMessageType("error");
    return;
  }

  const newUser = {
    name,
    username,
    password,
  };

  const users = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  const userExists = users.some(
    (user: { username: string }) =>
      user.username === username
  );

  if (userExists) {
    setMessage("Username already exists.");
    setMessageType("error");
    return;
  }

  // ✅ Add the new user
  const updatedUsers = [...users, newUser];

  // ✅ Save all users
  localStorage.setItem(
    "users",
    JSON.stringify(updatedUsers)
  );

  setMessage("Registration successful!");
  setMessageType("success");

  setName("");
  setUsername("");
  setPassword("");

  setTimeout(() => {
    onRegister();
  }, 2000);
};
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card>
        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        {message && (
  <div
    className={`p-3 rounded-lg text-center font-medium ${
      messageType === "success"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {message}
  </div>
)}

<Input
  type="text"
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleRegister}>
            Register
          </Button>

          <p className="text-center mt-4">
  Already have an account?{" "}
  <button
    onClick={goToLogin}
    className="text-blue-600 hover:underline"
  >
    Login
  </button>
</p>
        </div>
      </Card>
    </div>
  );
}