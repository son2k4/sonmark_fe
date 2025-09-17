import { ERole } from "./ERole";

export interface User {
    id: string;
    username: string;
    email: string;
    roles: ERole[];
}
