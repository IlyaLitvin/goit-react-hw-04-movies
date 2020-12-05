import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppBar from "./AppBar";
import routes from "./routes.js";
import Loading from "./components/Loading/Loading.js";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.js";
import "./index.css";

const AsyncHomePage = lazy(() => import("./Views/HomePage.jsx"));
const AsyncMoviesPage = lazy(() => import("./Views/MoviesPage.jsx"));
const AsyncMovieDetailsPage = lazy(() =>
  import("./Views/MovieDetailsPage.jsx")
);

const App = () => (
  <>
    <ErrorBoundary>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={routes.HomePage} component={AsyncHomePage}></Route>
          <Route
            exact
            path={routes.MoviesPage}
            component={AsyncMoviesPage}
          ></Route>
          <Route
            path={routes.MovieDetailsPage}
            component={AsyncMovieDetailsPage}
          ></Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </>
);

export default App;
