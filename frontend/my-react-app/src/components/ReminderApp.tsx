import { useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import OpenIconSpeedDial from "./SpeedDial";
import Feed from "./Feed";
import { fetchReminderList } from "../model/DatabaseModel";

function ReminderApp() {
  const [currentState, setcurrentState] = useState({
    groupName: "__default",
    listName: "Today",
    listObject: fetchReminderList({ group: "__default", list: "Today" }),
  });

  const changeReminderList = (changeToGroup: string, changeToList: string) => {
    setcurrentState({
      groupName: changeToGroup,
      listName: changeToList,
      listObject: fetchReminderList({
        group: changeToGroup,
        list: changeToList,
      }),
    });
  };

  return (
    <div>
      <ResponsiveAppBar updateFeedFunction={changeReminderList} />
      <Feed reminderState={currentState} />
      <OpenIconSpeedDial />
    </div>
  );
}

export default ReminderApp;
