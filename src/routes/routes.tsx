import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { paths } from "./paths";
import { EventList } from "../scenes";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={paths.EVENT_LIST} component={EventList} />
      <Route>
        <Redirect to={paths.EVENT_LIST} />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
