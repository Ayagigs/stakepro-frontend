import { Outlet } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import { MantineProvider } from "@mantine/core";

const AdminContainer= () => {
    return (
        <>
            <MantineProvider theme={{ colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
                <div data-theme="light" className="admin_container">
                    <Sidebar />
                    <div style={{ width: "100%" }}>
                        <Outlet />
                    </div>
                </div>
            </MantineProvider>
        </>
    );
};

export default AdminContainer;