
import {
    Routes
} from "react-router-dom";
import SpellRoute from "../modules/spell/SpellRoute";

/**
 * This will return all routes of the application
 */
const AppRoute = () => {
    return (
        
        <Routes>
            {SpellRoute}
        </Routes>
    )
}

export default AppRoute;