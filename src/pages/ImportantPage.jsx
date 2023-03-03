import { FaStar } from "react-icons/fa";
import { Page } from "../components/shared";

function ImportantPage({ children }) {
  return (
    <Page pageTitle={"Important"} pageIcon={<FaStar />} children={children} />
  );
}

export default ImportantPage;
