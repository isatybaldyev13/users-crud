import { Button, Checkbox, TableCell, TableRow } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import dateFormat from "dateformat";


export const User = ({ user, handleEditClick }) => {

    return (
        <TableRow>
            <TableCell>
                <Checkbox />
            </TableCell>
            <TableCell align="center">{user?.firstName}</TableCell>
            <TableCell align="center">{user?.lastName}</TableCell>
            <TableCell align="center">{user?.email}</TableCell>
            <TableCell align="center">{dateFormat(user?.dateOfBirth, "mmm d, yyyy")}</TableCell>
            <TableCell align="center">{user?.placeOfBirth}</TableCell>
            <TableCell align="center">{user?.maritalStatus}</TableCell>
            <TableCell>
                <Button onClick={(event)=>handleEditClick(event, user?._id)}>
                    <EditIcon />
                </Button>
            </TableCell>
        </TableRow>
    )
}