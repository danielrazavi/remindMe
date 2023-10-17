// frontend/src/models/DatabaseModel.ts
import Reminder from "./Reminder";
import ReminderList from "./ReminderList";
import ReminderGroup from "./ReminderGroup";

const API_URL = "https://your-backend-api-url";

interface fetchReminderListProps {
  group: string;
  list: string;
}

export function fetchReminderList({
  group,
  list,
}: fetchReminderListProps): ReminderList {
  let jsonData = null;
  if (group == "__default" && list == "All") {
    // Make an API call to fetch reminder lists
    jsonData =
      '[{"id": 1, "title": "Buy Groceries", "description": "Milk, eggs, bread, and fruits", "dueDate": "2023-10-10T12:00:00Z", "completed": false}, {"id": 2, "title": "Meeting with Client", "description": "Discuss project requirements", "completed": false}, {"id": 3, "title": "Pay Utility Bills", "description": "Electricity and water bills", "dueDate": "2023-10-20T10:00:00Z", "completed": true}, {"id": 4, "title": "Finish Homework", "description": "Complete math assignment", "dueDate": "2023-10-12T18:00:00Z", "completed": false}, {"id": 5, "title": "Dentist Appointment", "description": "Checkup and cleaning", "dueDate": "2023-10-15T14:30:00Z", "completed": false}, {"id": 6, "title": "Gym Workout", "description": "Cardio and weightlifting", "dueDate": "2023-10-11T17:00:00Z", "completed": false}, {"id": 7, "title": "Call Mom", "description": "Catch up with mom", "completed": false}, {"id": 8, "title": "Plan Weekend Trip", "description": "Research and book accommodations", "dueDate": "2023-10-18T16:00:00Z", "completed": false}, {"id": 9, "title": "Submit Expense Reports", "description": "Work-related expense reports", "dueDate": "2023-10-14T09:00:00Z", "completed": false}, {"id": 10, "title": "Birthday Gift Shopping", "description": "Gift for a friend\'s birthday", "dueDate": "2023-10-22T15:00:00Z", "completed": false}, {"id": 11, "title": "Read a Chapter", "description": "Read a chapter from a novel", "completed": false}, {"id": 12, "title": "Paint the Living Room", "description": "Buy paint and paint the living room walls", "dueDate": "2023-10-17T11:00:00Z", "completed": false}, {"id": 13, "title": "Update Resume", "description": "Add recent work experience", "dueDate": "2023-10-16T13:30:00Z", "completed": false}, {"id": 14, "title": "Call the Bank", "description": "Inquire about loan options", "completed": false}, {"id": 15, "title": "Plant Flowers in the Garden", "description": "Buy flowers and plant them in the garden", "dueDate": "2023-10-25T10:00:00Z", "completed": false}]';
  } else {
    jsonData = JSON.stringify([
      {
        id: 1,
        title: "Write a Report",
        description: "Prepare a detailed project report",
        dueDate: "2023-11-05T15:30:00Z",
        completed: false,
      },
      {
        id: 2,
        title: "Family Dinner",
        description: "Plan a dinner gathering with relatives",
        dueDate: "2023-10-28T19:00:00Z",
        completed: true,
      },
      {
        id: 3,
        title: "Study for Exam",
        description: "Review course materials for the upcoming exam",
        dueDate: "2023-11-15T08:00:00Z",
        completed: false,
      },
      {
        id: 4,
        title: "Book Flight Tickets",
        description: "Find and book tickets for the next vacation",
        completed: false,
      },
      {
        id: 5,
        title: "Health Checkup",
        description: "Schedule and prepare for a routine health checkup",
        dueDate: "2023-11-10T11:15:00Z",
        completed: false,
      },
      {
        id: 6,
        title: "Volunteer at Local Shelter",
        description: "Spend time helping at the local animal shelter",
        completed: false,
      },
      {
        id: 7,
        title: "Buy New Book",
        description: "Visit the bookstore and pick up a new novel",
        dueDate: "2023-10-29T16:45:00Z",
        completed: false,
      },
      {
        id: 8,
        title: "Write Thank-You Notes",
        description: "Express gratitude by writing thank-you notes",
        completed: false,
      },
      {
        id: 9,
        title: "Cook Dinner",
        description: "Prepare a homemade dinner for friends",
        dueDate: "2023-10-30T20:00:00Z",
        completed: false,
      },
      {
        id: 10,
        title: "Yoga and Meditation",
        description: "Practice yoga and meditation for relaxation",
        completed: false,
      },
    ]);
  }

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
    listName: list,
    reminders: reminders,
  };

  return reminderList;
}

export function fetchReminderGroup(): ReminderGroup[] {
  // Make an API call to fetch reminder lists
  const jsonData: string = `
[
  {
    "groupName": "Work",
    "reminderLists": [
      {
        "listName": "Important Tasks",
        "reminders": [
          {
            "title": "Meeting with Client",
            "dueDate": "2023-10-15T09:00:00Z",
            "completed": false
          },
          {
            "title": "Submit Project Report",
            "dueDate": "2023-10-20T17:00:00Z",
            "completed": false
          }
        ]
      },
      {
        "listName": "Daily Routine",
        "reminders": [
          {
            "title": "Check Emails",
            "dueDate": "2023-10-15T08:30:00Z",
            "completed": false
          },
          {
            "title": "Follow-up on Pending Tasks",
            "dueDate": "2023-10-15T16:00:00Z",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "groupName": "Personal",
    "reminderLists": [
      {
        "listName": "Grocery List",
        "reminders": [
          {
            "title": "Buy Milk",
            "dueDate": "2023-10-14T18:00:00Z",
            "completed": false
          },
          {
            "title": "Purchase Vegetables",
            "dueDate": "2023-10-15T12:00:00Z",
            "completed": false
          }
        ]
      },
      {
        "listName": "Fitness Goals",
        "reminders": [
          {
            "title": "Gym Workout",
            "dueDate": "2023-10-17T07:00:00Z",
            "completed": false
          },
          {
            "title": "Run in the Park",
            "dueDate": "2023-10-19T16:30:00Z",
            "completed": false
          }
        ]
      }
    ]
  }
]`;

  // Parse the JSON data
  const jsonArray = JSON.parse(jsonData);

  // jsonArray.map((element, index) => {
  //   console.log(element.groupName);
  //   element.reminderLists.map((element, index) => {
  //     console.log(index, element.name);
  //   });
  // });

  return jsonArray;
}
