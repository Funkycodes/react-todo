import { FaSun } from "react-icons/fa";
import { Page } from "../components/shared";

function MyDayPage({ children }) {
  return <Page pageIcon={<FaSun />} pageTitle="My Day" children={children} />;
}

export default MyDayPage;
