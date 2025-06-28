import LoginForm from "@/features/auth/components/login-form";
import { useAuth } from "@/lib/auth-context";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  if (loading) return null;

  return <LoginForm />;
};

export default Login;

