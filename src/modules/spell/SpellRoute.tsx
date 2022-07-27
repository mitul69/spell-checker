import { Route } from "react-router-dom";
import SpellDetail from "./pages/SpellDetail";
import SpellFavourites from "./pages/SpellFavourites";
import SpellList from "./pages/SpellList";

/**
 * This will return all routes for the specific module
 */
const SpellRoute = [
    <Route path="/" element={<SpellList />} key="index" />,
    <Route path="/detail/:index" element={<SpellDetail />}  key="detail" />,
    <Route path="/favourites" element={<SpellFavourites />}  key="detail" />,
  ];

export default SpellRoute;