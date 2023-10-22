import ReminderGroup from "./ReminderGroup";
import ReminderList from "./ReminderList";

interface AccountBag {
  mainReminderList: ReminderList;
  reminderGroups: ReminderGroup[] | null;
}

export default AccountBag;
