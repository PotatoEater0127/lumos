import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { TextField, FormControl, InputLabel, Select } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  inputBox: {
    // margin: "10px",
  },
  flexWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "0 15px",
    marginTop: "15px",
  },
}));

export default function CreateAttendancePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off">
      <div className={classes.flexWrapper}>
      <FormControl fullWidth margin="normal">
        <DatePicker
          autoOk={true}
          okLabel=""
          cancelLable="取消"
          variant="dialog"
          openTo="date"
          value={selectedDate}
          onChange={setSelectedDate}
          label="日期"
          inputVariant="outlined"
          format="YYYY/MM/DD"
        />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            className={classes.inputBox}
            id="outlined-secondary"
            label="姓名"
            variant="outlined"
            color="secondary"
          />
        </FormControl>

        <FormControl variant="outlined" margin="normal" fullWidth>
          <InputLabel htmlFor="outlined-age-native-simple">協勤地點</InputLabel>
          <Select
            native
            // value={state.age}
            // onChange={handleChange}
            label="協勤地點"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"石牌分隊"}>石牌分隊</option>
            <option value={"光明分隊"}>光明分隊</option>
            <option value={"其他"}>其他</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" margin="normal">
          <InputLabel htmlFor="outlined-age-native-simple">協勤車輛</InputLabel>
          <Select
            native
            // value={state.age}
            // onChange={handleChange}
            label="協勤車輛"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={91}>91</option>
            <option value={92}>92</option>
            <option value={"其他"}>其他</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" margin="normal">
          <TextField
            id="time"
            label="到勤時間(24小時制)"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            variant="outlined"
          />
        </FormControl>
        <FormControl margin="normal">
          <TextField
            id="time"
            label="退勤時間(24小時制)"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            variant="outlined"
          />
        </FormControl>
      </div>
    </form>
  );
}
