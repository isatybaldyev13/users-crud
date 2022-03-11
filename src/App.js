import { Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Users } from "./components/users";


const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

const App = () => {

  const [users, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true) //true, false boolean

  const getData = async () => {
    try {
      let { data } = await axios.get("https://user-list-seytech.herokuapp.com/users")
      setUser(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }

  }


  useEffect(() => {
    getData()
  }, [])



  return isLoading ? <SpinnerWrapper>
    <Typography mb={2}>Data is loading...</Typography>
    <CircularProgress />
  </SpinnerWrapper> : (
    <Users users={users} />
  )
}

export default App;
