import { Box, Alert, AlertTitle } from "@mui/material";

const Confirmation = () => {
  return (
    <Box
      m="6vh auto"
      width="80%"
      height="50vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="white"
    >
      <Alert severity="success">
        <AlertTitle>Success!</AlertTitle>
        <Box textAlign="center" paddingTop="15px">
          You have successfully ordered your items <br />
          <strong>I hope that you love everything!</strong>
        </Box>
      </Alert>
    </Box>
  );
};

export default Confirmation;
