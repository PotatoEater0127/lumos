import React from "react";
import BottomNav from "./components/bottom-nav/bottom-nav.component";
import TopNav from "./components/top-nav/top-nav.component";
import CheckInButton from "./components/checkin-button/checkin-button.component";
import AttendancePage from "./pages/attendance.page";
import ConfigurationPage from "./pages/configuration.page";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import zhTW from "dayjs/locale/zh-tw";
import DayjsUtils from "@date-io/dayjs";
import CssBaseline from "@material-ui/core/CssBaseline";
import history from "./history";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router history={history}>
      <MuiPickersUtilsProvider utils={DayjsUtils} locale={zhTW}>
        <CssBaseline />
        <div className="App">
          <TopNav />
          {/* to adjust space for the appbar's offset */}
          <div style={{ height: "56px" }} />
          <Switch>
            <Route path="/config" component={ConfigurationPage} />
            <Route path="/" component={AttendancePage} />
          </Switch>
          <CheckInButton />
          <BottomNav />
        </div>
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
