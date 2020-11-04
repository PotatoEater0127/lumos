import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import FolderList from "../components/attendanceListItem/attendanceListItem.component";

export default function AttendanceListPage(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
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
    </>
  );
}
