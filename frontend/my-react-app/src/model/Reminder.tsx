interface Reminder {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
}

export default Reminder;
