import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import DoneIcon from "@mui/icons-material/Done";

interface ReminderCardProps {
  title: string;
  description: string;
  dueDate: Date | null;
  completed: boolean;
}

export default function ReminderCards({
  title,
  description,
  dueDate,
  completed,
}: ReminderCardProps) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>

        {dueDate ? (
          <Typography variant="body2">
            Due {dueDate.toDateString()} at {dueDate.toLocaleTimeString()}
          </Typography>
        ) : null}
      </CardContent>
      <CardActions>
        <Button size="small">More Details</Button>
        <Button color="success" startIcon={<DoneIcon />} size="small">
          Complete Reminder
        </Button>
      </CardActions>
    </Card>
  );
}
