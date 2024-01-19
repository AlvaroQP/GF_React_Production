import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import styles from "./CustomTable.module.css";

export default function CustomTable({
  rows,
  filterHeaders,
  onEdit,
  onDelete,
  adminTable,
  spellTable,
}) {
  const headers = rows.length > 0 ? Object.keys(rows[0]) : [];
  const filteredHeaders = filterHeaders
    ? headers.filter((header) => !filterHeaders.includes(header))
    : headers;

  function formatHeader(header) {
    return header.charAt(0).toUpperCase() + header.slice(1);
  }

  function formatCellContent(header, row) {
    if (header === "army") {
      return typeof row[header] === "string"
        ? row[header].charAt(0).toUpperCase() + row[header].slice(1)
        : row[header].name;
    } else if (spellTable && header === "name") {
      return `${row[header]}(${row["value"]})`;
    } else {
      return row[header];
    }
  }

  return (
    <TableContainer
      component={Paper}
      className={styles.table}
      sx={{ width: "95%" }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow className={styles.tableHeaders}>
            {filteredHeaders.map((header) => (
              <TableCell
                key={header}
                sx={{ color: "white", fontWeight: "bold" }}
              >
                {formatHeader(header)}
              </TableCell>
            ))}
            {adminTable && (
              <TableCell
                align="center"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Options
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} className={styles.tableRow}>
              {filteredHeaders.map((header, headerIndex) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: headerIndex === 0 ? 500 : "inherit",
                    minWidth: headerIndex === 0 ? "10rem" : "inherit",
                  }}
                >
                  {formatCellContent(header, row)}
                </TableCell>
              ))}
              {adminTable && (
                <TableCell>
                  <div className={styles["table-buttons"]}>
                    <Tooltip
                      title="Edit"
                      placement="top"
                      className={styles["edit-tooltip"]}
                    >
                      <IconButton onClick={() => onEdit(row)}>
                        <EditOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title="Delete"
                      placement="top"
                      className={styles["delete-tooltip"]}
                    >
                      <IconButton onClick={() => onDelete(row)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
