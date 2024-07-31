import { Outlet, useNavigate } from "react-router-dom";

import useUserStore from "../../share/store/useUserStore";
import { useEffect } from "react";

const NonAuthLayout = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default NonAuthLayout;
