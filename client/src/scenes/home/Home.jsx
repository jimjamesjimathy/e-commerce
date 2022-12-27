import { useTheme } from "@mui/material";
import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";

const Home = () => {
  const theme = useTheme();
  const dark = theme.palette.background.main;
  return (
    <div className="home" style={{ backgroundColor: dark }}>
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
};

export default Home;
