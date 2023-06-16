import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Typography,
  Box,
} from "@mui/material";

const TicketDetails = ({ open, setOpenDialog, selectedRow }) => {
  const handleClose = () => {
    setOpenDialog(false);
  };
  const descriptionStyle = {
    whiteSpace: "pre-wrap",
  };

  return (
    <div className="success-modal">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h4">{selectedRow.subject}</Typography>
          <Typography variant="subtitle1">{`Via ${selectedRow.via.channel}`}</Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography variant="subtitle1">Id: {selectedRow.id}</Typography>
            </div>
            <div>
              <Typography variant="subtitle1">
                Status:{" "}
                <span
                  style={{
                    color: selectedRow.status === "open" ? "orange" : "blue",
                  }}
                >
                  {selectedRow.status.charAt(0).toUpperCase() +
                    selectedRow.status.slice(1).toLowerCase()}
                </span>
              </Typography>
            </div>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-description">
            <div style={descriptionStyle}>{selectedRow.description}</div>
          </DialogContentText>
          <Box sx={{ marginTop: "16px", marginBottom: "16px" }}>
            <Typography variant="subtitle1">
              Created at: {selectedRow.created_at}
            </Typography>
            <Typography variant="subtitle1">
              Updated at: {selectedRow.updated_at}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TicketDetails;
