import { Box, Button, Input, Modal, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import dateFormat from "dateformat"


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

export const UserForm = ({ open, closeModal, selectedUser, modalType }) => {
    const [firstName, setFirsName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [gender, setGender] = useState("")
    const [placeOfBirth, setPlaceOfBirth] = useState("")

    const [email, setEmail] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [disabled, setDisabled] = useState(false)

    const onSubmit = async event => {
        try {
            event.preventDefault()
            if (modalType === "edit") {
                let requestData = {
                    email,
                    maritalStatus
                }
                setDisabled(true)
                await axios.patch(`https://user-list-seytech.herokuapp.com/users/${selectedUser}`, requestData)
                setDisabled(false)
                closeModal()
                alert("Successfully updated")
            } else {
                let requestData = {
                    firstName,
                    lastName,
                    dateOfBirth: dateFormat(dateOfBirth, "mm/dd/yyyy"),
                    gender,
                    placeOfBirth,
                    email,
                    maritalStatus
                }
                let response = await axios.post("https://user-list-seytech.herokuapp.com/users/addUser", requestData)
                console.log("response ", response);
                closeModal()
                alert("User successfully created")
            }
        } catch (error) {
            closeModal()
            alert(error?.message)
        }
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
                    {
                        modalType === 'create' && (
                            <>
                                <TextField
                                    type="text"
                                    value={firstName}
                                    placeholder="FirstName"
                                    onChange={e => setFirsName(e.target.value)} />
                                <TextField
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    placeholder="Last Name" />
                                <TextField
                                    type="date"
                                    value={dateOfBirth}
                                    placeholder="Date of birth"
                                    onChange={e => setDateOfBirth(e.target.value)} />
                                <TextField
                                    value={gender}
                                    onChange={e => setGender(e.target.value)}
                                    placeholder="Gender" />
                                <TextField
                                    type="text"
                                    value={placeOfBirth}
                                    placeholder="City, State"
                                    onChange={e => setPlaceOfBirth(e.target.value)} />
                            </>
                        )
                    }

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