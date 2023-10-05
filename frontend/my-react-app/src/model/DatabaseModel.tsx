// frontend/src/models/DatabaseModel.ts
import Reminder from "./Reminder";
import ReminderList from "./ReminderList";
import ReminderGroup from "./ReminderGroup";

const API_URL = "https://your-backend-api-url";

export default function fetchReminderLists(): ReminderList {
  // Make an API call to fetch reminder lists
  const jsonData =
    '[{"id": 1, "title": "Buy Groceries", "description": "Milk, eggs, bread, and fruits", "dueDate": "2023-10-10T12:00:00Z", "completed": false}, {"id": 2, "title": "Meeting with Client", "description": "Discuss project requirements", "completed": false}, {"id": 3, "title": "Pay Utility Bills", "description": "Electricity and water bills", "dueDate": "2023-10-20T10:00:00Z", "completed": true}, {"id": 4, "title": "Finish Homework", "description": "Complete math assignment", "dueDate": "2023-10-12T18:00:00Z", "completed": false}, {"id": 5, "title": "Dentist Appointment", "description": "Checkup and cleaning", "dueDate": "2023-10-15T14:30:00Z", "completed": false}, {"id": 6, "title": "Gym Workout", "description": "Cardio and weightlifting", "dueDate": "2023-10-11T17:00:00Z", "completed": false}, {"id": 7, "title": "Call Mom", "description": "Catch up with mom", "completed": false}, {"id": 8, "title": "Plan Weekend Trip", "description": "Research and book accommodations", "dueDate": "2023-10-18T16:00:00Z", "completed": false}, {"id": 9, "title": "Submit Expense Reports", "description": "Work-related expense reports", "dueDate": "2023-10-14T09:00:00Z", "completed": false}, {"id": 10, "title": "Birthday Gift Shopping", "description": "Gift for a friend\'s birthday", "dueDate": "2023-10-22T15:00:00Z", "completed": false}, {"id": 11, "title": "Read a Chapter", "description": "Read a chapter from a novel", "completed": false}, {"id": 12, "title": "Paint the Living Room", "description": "Buy paint and paint the living room walls", "dueDate": "2023-10-17T11:00:00Z", "completed": false}, {"id": 13, "title": "Update Resume", "description": "Add recent work experience", "dueDate": "2023-10-16T13:30:00Z", "completed": false}, {"id": 14, "title": "Call the Bank", "description": "Inquire about loan options", "completed": false}, {"id": 15, "title": "Plant Flowers in the Garden", "description": "Buy flowers and plant them in the garden", "dueDate": "2023-10-25T10:00:00Z", "completed": false}]';

  // Parse the JSON data
  const jsonArray = JSON.parse(jsonData);

  // Map the JSON data to Reminder objects
  const reminders: Reminder[] = jsonArray.map((jsonReminder: any) => ({
    title: jsonReminder.title,
    description: jsonReminder.description,
    dueDate: jsonReminder.dueDate ? new Date(jsonReminder.dueDate) : null,
    completed: jsonReminder.completed,
  }));

  const reminderList: ReminderList = {
    listName: "Today",
    reminders: reminders,
  };

  return reminderList;
}
