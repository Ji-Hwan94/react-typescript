import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { Routers } from "./routers/Routers";
import "./style.css";
// import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routers} />
    </QueryClientProvider>
  </RecoilRoot>
);
