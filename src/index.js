import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const data = [{ id: "item-0", item: "Go to gym" }];

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App tasks={data} />
  </StrictMode>
);
