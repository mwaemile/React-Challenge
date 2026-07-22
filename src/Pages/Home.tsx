import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Protected Todo App
        </h1>

        <p className="text-gray-600 mb-8">
          Organize your tasks securely.
          Register or login to continue.
        </p>

        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate("/login")}>
            Login
          </Button>

          <Button onClick={() => navigate("/register")}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}