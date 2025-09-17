import { ERole } from "../types/ERole";
import ProtectedRoute from "./ProtectedRoute";

const AdminRoutes = {
    path: "/admin",
    //  element: <ProtectedRoute roles={[ERole.Admin]}></ProtectedRoute>,
    children: [],
};

export default AdminRoutes;
