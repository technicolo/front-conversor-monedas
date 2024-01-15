export interface RegisterData extends User {
    password: string,
}

export interface User{
    userName: string,
    Name: string,
    LastName: string,
}

export interface LoginData {
    userName: string,
    password: string
}