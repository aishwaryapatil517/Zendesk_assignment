import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import TicketDetails from "../components/TicketDetails.js/TicketDetails";

const centeredColumn = {
  align: "center",
  headerAlign: "center",
};

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
    renderHeader: () => <strong>ID</strong>,
    ...centeredColumn,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderHeader: () => <strong>Status</strong>,
    renderCell: (params) => {
      const status = params.value;
      let color = "";

      if (status === "open") {
        color = "orange";
      } else if (status === "pending") {
        color = "blue";
      } else if (status === "solved") {
        color = "green";
      }

      return <span style={{ color: color }}>{status}</span>;
    },
    ...centeredColumn,
  },
  {
    field: "subject",
    headerName: "Subject",
    width: 540,
    renderHeader: () => <strong>Subject</strong>,
    ...centeredColumn,
    sortable: false, // Disable sorting
    filterable: false, // Disable filtering
  },
  {
    field: "created_at",
    headerName: "Created At",
    type: "number",
    width: 230,
    renderHeader: () => <strong>Created At</strong>,
    ...centeredColumn,
    sortable: false, // Disable sorting
    filterable: false, // Disable filtering
  },

  {
    field: "updated_at",
    headerName: "Updated At",
    type: "number",
    width: 230,
    renderHeader: () => <strong>Updated At</strong>,
    ...centeredColumn,
    sortable: false, // Disable sorting
    filterable: false, // Disable filtering
  },
  {
    field: "View Ticket",
    headerName: "View Ticket",
    width: 230,
    renderHeader: () => <strong>View Ticket</strong>,
    ...centeredColumn,
    sortable: false, // Disable sorting
    filterable: false, // Disable filtering
    renderCell: (params) => (
      <Button variant="outlined" color="primary">
        View
      </Button>
    ),
  },
];

const MUITable = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleRowClick = (params) => {
    setOpenDialog(true);
    setSelectedRow(params.row);
  };

  return (
    <div data-testid="tickets-table">
      <Box p={4}>
        <div style={{ height: "100%", width: "100%" }}>
          <div className="table-container">
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={25}
              onRowClick={handleRowClick}
              disableColumnMenu // Disable the column menu
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 25 },
                },
              }}
              pageSizeOptions={[25, 50, 75, 100]}
              disableColumnSelector
            />
          </div>
          {openDialog ? (
            <TicketDetails
              open={openDialog}
              setOpenDialog={setOpenDialog}
              selectedRow={selectedRow}
            />
          ) : (
            ""
          )}
        </div>
      </Box>
    </div>
  );
};

export default MUITable;
