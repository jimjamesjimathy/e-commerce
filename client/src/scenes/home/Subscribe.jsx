import {
  Box,
  InputBase,
  Divider,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const dark = theme.palette.background.mainTwo;

  return (
    <Box
      width="85%"
      margin="auto"
      textAlign="center"
      height="35vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      backgroundColor={dark}
    >
      <Box display="flex" alignItems="center" margin="0 auto" gap="7px">
        <Typography variant="h2" fontWeight="500">
          Subscribe To Our Newsletter
        </Typography>
        <IconButton>
          <MarkEmailReadOutlinedIcon
            fontSize="large"
            style={{ color: "#000" }}
          />
        </IconButton>
      </Box>
      <Typography>
        and receive $20 coupon for your first order when you checkout
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="35%"
        backgroundColor="#F5F5F5"
        borderRadius="5px"
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: "#222" }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography
          sx={{
            p: "10px",
            ":hover": { cursor: "pointer" },
            color: "#222",
            fontWeight: "bold",
          }}
        >
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
