import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login/login";
import Register from "../pages/auth/register/register";
import NotFound from "../pages/NotFound";
// Component

const Router = () => {
  // console.log({ "[Window]:: ": window });

  const whiteListedRoutes = [
    "/login",
    "/register",
    // "/about",
    // "/contact",
    // "/digitalmarketig",
    // "/computerservices",
    // "/generalsalesorders",
  ];

  const isRouteValid = whiteListedRoutes.includes(window.location.pathname);

  console.log({ "[isRouteValid]:: ": isRouteValid });

  return (
    <BrowserRouter>
      <Routes>
        {/* if(muneeb) dfahsdg eles 12345 */}
        {/* {"muneeb" ? "hello" : "world"} */}

        {isRouteValid ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        ) : (
          <Route path={"*"} element={<NotFound />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
