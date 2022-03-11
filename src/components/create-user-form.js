import { Box, Button, Input, Modal, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import styled from "styled-components"


const style = {
    width: '60%',
    margin: '160px auto',
    backgroundColor: '#fff'
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px;
`

export const CreatUserForm = ({ open, closeModal, selectedUser }) => {
    const [email, setEmail] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [disabled, setDisabled] = useState(false)

    const onSubmit = async event => {
        event.preventDefault()
        let requestData = {
            email,
            maritalStatus
        }
        setDisabled(true)
        await axios.patch(`https://user-list-seytech.herokuapp.com/users/${selectedUser}`, requestData)
        setDisabled(false)
        closeModal()
        alert("Successfully updated")
    }

    return (
        <Modal
            open={open}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Form onSubmit={onSubmit}>
                    <TextField
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)} />
                    <TextField
                        value={maritalStatus}
                        onChange={e => setMaritalStatus(e.target.value)}
                        placeholder="Marital Status" />
                    <Button disabled={disabled} type="submit">
                        Submit
                    </Button>
                </Form>
            </Box>
        </Modal>

    )
}