export interface User {
    fullname: string;
    username: string;
    email: string;
    photo?: File;
}

export interface RegisterUser extends User {
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}
