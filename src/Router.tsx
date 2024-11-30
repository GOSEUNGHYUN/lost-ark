import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Character from "./routes/Character";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:nic" component={Character} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
