import { useState } from "react"
import { Box, Button, Paper, TableBody, TableContainer, TablePagination } from "@mui/material"
import { User } from "./user"
import { MyTableHead } from "./table-head"
import { UserForm } from "./user-form"



export const Users = ({ users }) => {

    const [open, setOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const [modalType, setModalType] = useState(null)
    const [page, setPage] = useState(0)
    const [countPerPage, setCountPerPage] = useState(5)

    const [selectedUsers, setSelectedUsersList] = useState([])




    const handleEditClick = (event, userId) => {
        setOpen(true)
        setModalType("edit")
        setSelectedUser(userId)
    }

    const closeModal = () => {
        setOpen(false)
        setModalType(null)
        setSelectedUser(null)
    }

    const handleCreateClick = () => {
        setOpen(true)
        setModalType("create")
    }

    const handlePageChange = (_event, newPage) => {
        setPage(newPage)
    }

    const handlePageRowsCountChange = event => {
        setCountPerPage(event?.target?.value)
        setPage(0)
    }

    const handleSelectAllUsers = (event) => {
        if (event.target.checked) {
            let list = users?.map(item => item?._id)
            setSelectedUsersList(list)
        } else {
            setSelectedUsersList([])
        }
    }

    const handleSelectUser = (event, id) => {
        if (selectedUsers.includes(id)) {
            setSelectedUsersList(selectedUsers?.filter(item => item !== id))
        } else {
            setSelectedUsersList([...selectedUsers, id])
        }
    }

    const isSelected = id => selectedUsers.includes(id)

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <Button onClick={handleCreateClick}>Add User</Button>
                <TableContainer>
                    <MyTableHead
                        numSelectedRow={selectedUsers.length}
                        numRow={users?.length}
                        handleSelectAllUsers={handleSelectAllUsers} />
                    <TableBody>
                        {
                            users?.slice((page * countPerPage), (page * countPerPage) + countPerPage).map(user => (
                                <User
                                    key={user?._id}
                                    user={user}
                                    handleEditClick={handleEditClick}
                                    isSelected={isSelected}
                                    handleSelectUser={handleSelectUser}
                                />
                            ))
                        }
                    </TableBody>
                </TableContainer>
                <TablePagination
                    count={users?.length}
                    onPageChange={handlePageChange}
                    page={page}
                    rowsPerPage={countPerPage}
                    rowsPerPageOptions={[5, 10, 20]}
                    onRowsPerPageChange={handlePageRowsCountChange}
                />
            </Paper>
            <UserForm modalType={modalType} open={open} selectedUser={selectedUser} closeModal={closeModal} />
        </Box>
    )
}