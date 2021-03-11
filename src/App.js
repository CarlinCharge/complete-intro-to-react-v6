import { render } from "react-dom";
import SearchParams from "./components/SearchParams";
import { StrictMode } from "react";

const App = () => {
  return (
    <div>
      <SearchParams />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
