import { Logo } from "@/components";
import LoginForm from "@/app/login/LoginForm";

export default async function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen from-purple-900 via-indigo-800 to-indigo-500 bg-gradient-to-br">
      <div className="w-full max-w-lg px-10 py-8 mx-5 md:mx-0 bg-white border rounded-lg shadow-2xl">
        <div className="max-w-md mx-auto space-y-3">
          <Logo />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
