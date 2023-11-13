import React from "react";
import ReactDOMClient from "react-dom/client";
import { WwwIncuComByHtml } from "./screens/WwwIncuComByHtml";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<WwwIncuComByHtml />);
