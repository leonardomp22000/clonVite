import Titulo from "./Titulo";
import Categories from "./Categories";
export default function Banner() {
  return (
    <div id="mainText">
      <Titulo />
      <div id="subtitle">Next Generation Frontend Tooling</div>
      <div id="text">
        Get readyfor a development environment that can finally catchUp with you
      </div>
      <Categories/>
    </div>
  );
}
