import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface NewReminderDialogProps {
  givenState: boolean;
  onClose: () => void;
}

const NewReminderDialog: React.FC<NewReminderDialogProps> = ({
  givenState,
  onClose,
}) => {
  const [open, setOpen] = React.useState(givenState);

  React.useEffect(() => {
    setOpen(givenState);
  }, [givenState]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Reminder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Note"
            multiline
            rows={4}
            type="text"
            fullWidth
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimeField
              label="Due Date"
              margin="dense"
              disablePast
              fullWidth
            />
          </LocalizationProvider>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default NewReminderDialog;
