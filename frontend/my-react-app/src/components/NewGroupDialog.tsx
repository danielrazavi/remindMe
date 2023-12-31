import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

interface NewGroupDialogProps {
  givenState: boolean;
  onClose: () => void;
}

const NewGroupDialog: React.FC<NewGroupDialogProps> = ({
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
        <DialogTitle>New Group</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Group Name"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default NewGroupDialog;
