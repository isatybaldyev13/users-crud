import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material"

const TABLE_HEADERS_NAMES = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    dateOfBirth: "D.O.B",
    placeOfBirth: "P.O.B",
    maritalStatus: "Marital Status"
}


export const MyTableHead = ({ handleSelectAllUsers, numSelectedRow, numRow }) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    <Checkbox
                        onChange={handleSelectAllUsers}
                        checked={numRow === numSelectedRow ? true : false}
                    />
                </TableCell>
                {
                    Object.keys(TABLE_HEADERS_NAMES).map(key => (
                        <TableCell width='18%' align="center" key={key}>
                            {TABLE_HEADERS_NAMES[key]}
                        </TableCell>
                    ))
                }
                <TableCell />
            </TableRow>
        </TableHead>
    )
}