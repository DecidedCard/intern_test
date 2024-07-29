import { Link } from "react-router-dom";

type Props = {
  text: string;
  path: string;
};

const Navigation = ({ text, path }: Props) => {
  return (
    <Link
      className="p-2 border-2 border-solid border-black rounded-lg"
      to={path}
    >
      {text}
    </Link>
  );
};

export default Navigation;
