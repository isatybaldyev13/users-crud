import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material"

const TABLE_HEADERS_NAMES = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    dateOfBirth: "D.O.B",
    placeOfBirth: "P.O.B",
    maritalStatus: "Marital Status"
}


export const MyTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    <Checkbox />
                </TableCell>
                {
                    Object.keys(TABLE_HEADERS_NAMES).map(key => (
                        <TableCell align="center" key={key}>
                            {TABLE_HEADERS_NAMES[key]}
                        </TableCell>
                    ))
                }
                <TableCell />
            </TableRow>
        </TableHead>
    )
}