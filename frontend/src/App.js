import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { EmailVerificationPage } from "./pages/EmailVerificationPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-900 via-green-400 to-green-900 flex items-center justify-center relative overflow-hidden">
      <Routes>
        <Route path="/" element={"home"} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Routes>
    </div>
  );
}

export default App;
