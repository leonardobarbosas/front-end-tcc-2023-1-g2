import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import "./style.css";

export const MainLogin = () => {
  return (
    <main className="container-main-side">
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </main>
  );
};
