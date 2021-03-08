import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import FormSignIn from "./components/Form";
import Home from "./pages/home/Home";
import ListMovie from "./components/ListMovie";
import DeatailMovie from "./pages/home/DeatailMovie";
import ModalUserBook from "./pages/home/ModalUserBook";
import TicketBooking from "./pages/home/TicketBooking";
import Admin from "./pages/admin/Admin";
import DashBoard from "./pages/admin/DashBoard";
import DashboardMovie from "./pages/admin/DashboardMovie";
import PageNotFound from "../src/pages/PageNotFound";

function App() {
  const PrivateRouteUser = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/form" />
        )
      }
    />
  );

  const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("userAdmin") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" component={FormSignIn} />
        <Route path="/list-movie" component={ListMovie} />
        <Route path="/detailMovie/:id" component={DeatailMovie} />
        <Route path="/inFoUserBooking" component={ModalUserBook} />

        <PrivateRouteUser
          path="/booking/:idLichChieu"
          component={TicketBooking}
        />
        <Route path="/admin" exact component={Admin} />
        <PrivateRouteAdmin path="/admin/dashboardUser" component={DashBoard} />
        <PrivateRouteAdmin
          path="/admin/dashboardMovie"
          component={DashboardMovie}
        />

        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
