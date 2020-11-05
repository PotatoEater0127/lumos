import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import FolderList from "../components/attendanceListItem/attendanceListItem.component";
import CheckInButton from "../components/checkin-button/checkin-button.component";
import { useHistory } from "react-router-dom";

export default function AttendanceListPage(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const history = useHistory();
  return (
    <>
      {/* <DatePicker
        autoOk={true}
        okLabel=""
        cancelLable="取消"
        variant="dialog"
        openTo="month"
        views={["year", "month"]}
        value={selectedDate}
        onChange={setSelectedDate}
      /> */}
      <FolderList />
      <CheckInButton
        onClick={() => {
          history.push("/attendance/new");
          console.log("push!");
        }}
      />
    </>
  );
}
