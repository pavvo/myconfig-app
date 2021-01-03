import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "components/ProtectedRoute";

import Register from "pages/Register";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
