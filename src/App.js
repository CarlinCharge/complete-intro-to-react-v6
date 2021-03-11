import { render } from "react-dom";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <div>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
