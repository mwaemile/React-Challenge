import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

type LoginProps = {
  onLogin: () => void;
  goToRegister: () => void;
};
export default function Login({
  onLogin,
  goToRegister,
}: LoginProps){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState<
  "success" | "error" | ""
>("");

  const handleLogin = () => {
  const users = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  const foundUser = users.find(
    (user: {
      username: string;
      password: string;
    }) =>
      user.username === username &&
      user.password === password
  );

  if (!foundUser) {
    setMessage("Invalid username or password.");
setMessageType("error");
return;
  }

  localStorage.setItem(
    "currentUser",
    JSON.stringify(foundUser)
  );

 setMessage("Login successful!");
setMessageType("success");

setTimeout(() => {
  onLogin();
}, 1000);
};
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card>
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <div className="space-y-4">
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

          <Button onClick={handleLogin}>
            Login
          </Button>

          <p className="text-center mt-4">
  Don't have an account?{" "}
  <button
    onClick={goToRegister}
    className="text-blue-600 hover:underline"
  >
    Register
  </button>
</p>
        </div>
      </Card>
    </div>
  );
}