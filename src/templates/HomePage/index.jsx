import { Header } from "../../components/Home-Page/Header";
import { Main } from "../../components/Home-Page/Main";
import "./body.css";
import "../reset/reset.css";

function Home({ props }) {
  if (props == true) {
    props = "white";
  } else {
    props = "black";
  }

  return (
    <>
      <div className="body-home">
        <Header props={props}></Header>
        <Main></Main>
      </div>
    </>
  );
}

export default Home;
