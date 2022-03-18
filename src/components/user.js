import { Button, Checkbox, TableCell, TableRow } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import dateFormat from "dateformat";


export const User = ({ user, handleEditClick, isSelected, handleSelectUser }) => {

    return (
        <TableRow>
            <TableCell>
                <Checkbox
                    checked={isSelected(user?._id)}
                    onChange={event => handleSelectUser(event, user?._id)}
                />
            </TableCell>
            <TableCell align="center">{user?.firstName}</TableCell>
            <TableCell align="center">{user?.lastName}</TableCell>
            <TableCell align="center">{user?.email}</TableCell>
            <TableCell align="center">{dateFormat(user?.dateOfBirth, "mmm d, yyyy")}</TableCell>
            <TableCell align="center">{user?.placeOfBirth}</TableCell>
            <TableCell align="center">{user?.maritalStatus}</TableCell>
            <TableCell>
                <Button onClick={(event) => handleEditClick(event, user?._id)}>
                    <EditIcon />
                </Button>
            </TableCell>
        </TableRow>
    )
}