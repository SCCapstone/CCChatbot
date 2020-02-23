
export interface Roles{
    agent?: boolean;
    user?: boolean
}

export interface User {
    uid: string;
    email: string;
    roles: Roles;
} 