import { Outlet, useNavigate } from "react-router-dom";
import useUserStore from "../../share/store/useUserStore";

const AuthLayout = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  if (!user) {
    alert("로그인 해주시기 바랍니다.");
    navigate("/sign");
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
