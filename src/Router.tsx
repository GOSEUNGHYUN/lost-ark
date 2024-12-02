import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Character from "./routes/Character";

function Router() {
  return (
    <BrowserRouter basename="/lost-ark">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:nic" component={Character} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
