import React from "react";
import BottomNav from "./components/bottom-nav/bottom-nav.component";
import TopNav from "./components/top-nav/top-nav.component";
import AttendancePageList from "./pages/attendanceList.page";
import CreateAttendacePageList from "./pages/createAttendance.page";
import ConfigurationPage from "./pages/configuration.page";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import zhTW from "dayjs/locale/zh-tw";
import DayjsUtils from "@date-io/dayjs";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const history = createBrowserHistory();
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
            <Route path="/attendance/new" component={CreateAttendacePageList} />
            <Route path="/" component={AttendancePageList} />
          </Switch>
          <BottomNav />
        </div>
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
