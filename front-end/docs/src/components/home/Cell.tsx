import React, { FC, useState, MouseEvent } from "react";
// import EditIcon from "@material-ui/icons/Edit";
import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from "@material-ui/icons/Delete";
import DeleteIcon from '@mui/icons-material/Delete';
// import CheckIcon from "@material-ui/icons/Check";
import CheckIcon from '@mui/icons-material/Check';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import { CellValue } from "./table";

interface EditableCellProps {
  cell: CellValue;
  setCell: (newValue: CellValue) => void;
  deleteCell: (event: MouseEvent) => void;
}

const EditableCell: FC<EditableCellProps> = ({ cell, setCell, deleteCell }) => {
  const [editing, setEditing] = useState(false);

  return (
    <>
      <TableCell>
        {editing ? (
          <TextField
            value={cell.label}
            onChange={(event) =>
              setCell({ ...cell, label: event.target.value })
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CheckIcon
                    onClick={() => setEditing(false)}
                    fontSize="small"
                    color="primary"
                  />
                </InputAdornment>
              )
            }}
          />
        ) : (
          <Typography
            sx={{py: 1 }}
            variant="h6"
          >  
            <IconButton>
              <DeleteIcon
                fontSize="small" 
                color="primary" 
                onClick={deleteCell} 
              />
            </IconButton>
            {cell.label}
            <IconButton>
              <EditIcon
                onClick={() => setEditing(true)}
                fontSize="small"
                color="primary"
              />
            </IconButton>
          </Typography>
        )}
      </TableCell>
      {cell.children && (
        <TableCell>
          <Table>
            {cell.children.map((childCell, childCellIndex) => (
              <TableRow>
                <EditableCell
                  cell={childCell}
                  setCell={(newChildCell: CellValue) =>
                    setCell({
                      ...cell,
                      children: cell.children.map((child, index) =>
                        index === childCellIndex ? newChildCell : child
                      )
                    })
                  }
                  deleteCell={() =>
                    setCell({
                      ...cell,
                      children: cell.children.filter(
                        (c, index) => index !== childCellIndex
                      )
                    })
                  }
                />
              </TableRow>
            ))}
          </Table>
        </TableCell>
      )}
    </>
  );
};

export default EditableCell;
