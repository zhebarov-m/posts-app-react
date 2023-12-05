import {Outlet} from "react-router-dom";
import {FC} from "react";

const MainLayouts: FC = () => {
    return (
        <div>
            <h1>HEADER</h1>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;