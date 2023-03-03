import { FaHome } from "react-icons/fa";
import { Page } from "../components/shared";

function HomePage({ children }) {
  return <Page pageTitle={"Home"} pageIcon={<FaHome />} children={children} />;
}

export default HomePage;
