import { Outlet, useNavigate } from "react-router-dom";
import useUserStore from "../../share/store/useUserStore";
import { useEffect, useState } from "react";

const AuthLayout = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!user && mount) {
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
