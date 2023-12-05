import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../routerConfig.tsx";
import MainLayouts from "../../layouts/MainLayouts/MainLayouts.tsx";


const AppRouter = () => {
    return (
            <Routes>
                <Route
                path="/"
                element={<MainLayouts />}
                >
                    {Object.values(routeConfig).map(({element, path}) => (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            )}
                        />
                    ))}
                </Route>
            </Routes>
    );
};

export default AppRouter