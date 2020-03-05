import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

const MyDialog = (props) => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleType = (event) => {
        setText(event.target.value);
    };

    const handleSave = () => {
        // save something redux OR post to backend
        alert(`You typed: ${text}`);
        handleClose();
    };

    return (
        <>
            <Dialog
                onClose={handleClose}
                open={open}>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent>
                    {text}
                    <br />
                    <TextField
                        value={text}
                        onChange={handleType} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>
                        Save
                    </Button>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Button onClick={handleOpen}>
                Open by clicking me!
            </Button>
        </>
    );
};

export default MyDialog;
