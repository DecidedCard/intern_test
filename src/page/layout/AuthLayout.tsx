import { Outlet, useNavigate } from "react-router-dom";
import useUserStore from "../../share/store/useUserStore";
import { useEffect } from "react";

const AuthLayout = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("로그인 해주시기 바랍니다.");
      navigate("/sign");
    }
  }, [user, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
