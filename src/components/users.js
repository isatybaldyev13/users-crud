import { useState } from "react"
import { Box, Button, Paper, TableBody, TableContainer } from "@mui/material"
import { User } from "./user"
import { MyTableHead } from "./table-head"
import { UserForm } from "./user-form"



export const Users = ({ users }) => {

    const [open, setOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)


    const handleEditClick = (event, userId) => {
        console.log(event?.target?.key);
        setOpen(true)
        setSelectedUser(userId)
    }

    const closeModal = () => {
        setOpen(false)
        setSelectedUser(null)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <Button>Add User</Button>
                <TableContainer>
                    <MyTableHead />
                    <TableBody>
                        {
                            users?.map(user => (
                                <User
                                    key={user?._id}
                                    user={user}
                                    handleEditClick={handleEditClick}
                                />
                            ))
                        }
                    </TableBody>
                </TableContainer>
            </Paper>
            <UserForm open={open} selectedUser={selectedUser} closeModal={closeModal} />

        </Box>
    )
}