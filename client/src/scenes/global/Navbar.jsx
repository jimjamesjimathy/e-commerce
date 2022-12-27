import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Typography, useTheme } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen, setMode } from "../../state";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  const theme = useTheme();
  const dark = theme.palette.background.main;
  const text = theme.palette.text.main;
  const textLight = theme.palette.text.light;
  const span = theme.palette.accent.main;

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
      backgroundColor={dark}
      boxShadow="0px 0px 11px rgba(0, 0, 0, 0.7)"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
        >
          <Typography
            height="100%"
            variant="h2"
            fontSize="1.55rem"
            fontWeight="bold"
            letterSpacing="3px"
            color={textLight}
            display="flex"
            alignItems="center"
            gap="0.25rem"
          >
            Jam
            <Typography
              fontSize="2rem"
              color={span}
              fontFamily="Shadows Into Light"
              fontWeight="100"
            >
              ||
            </Typography>
            Shop
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <LightMode sx={{ color: text, fontSize: "25px" }} />
            ) : (
              <DarkMode sx={{ color: text, fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton sx={{ color: textLight }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: textLight }}>
            <PersonOutline />
          </IconButton>
          <Badge
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <Badge
              badgeContent={cart.length}
              color="secondary"
              invisible={cart.length === 0}
              sx={{
                "& .MuiBadge-badge": {
                  right: 5,
                  top: 5,
                  padding: "0 4px",
                  height: "14px",
                  minWidth: "13px",
                },
              }}
            >
              <IconButton
                onClick={() => dispatch(setIsCartOpen({}))}
                sx={{ color: textLight }}
              >
                <ShoppingBagOutlined />
              </IconButton>
            </Badge>
          </Badge>
          <IconButton sx={{ color: textLight }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
