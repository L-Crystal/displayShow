import { Helmet } from "react-helmet-async";
import UnitChange from "./components/unitChange/index";

import "./index.css";

export default function UserManagement() {
  return (
    <>
      <Helmet>
        <title>函数收集</title>
      </Helmet>
      <UnitChange></UnitChange>
    </>
  );
}
