import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { observe } from "twind/observe";
import { initMockServer } from "./mockServer";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

if (!rootElement) throw new Error("App: required roote element is missing");

observe(rootElement);

initMockServer();

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
