import Home from "./component/Home";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  // Define the animations using GSAP

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
