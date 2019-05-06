export default class Cliente {
    _id: string;
    name: string;
    email: string;
    cnpj: string;
    cepAdress: string;
    street?: string;
    neighborhood?: string;
    city?: string;
    complementAdress: string;
    state?: string;
    phone: string;
    createdAt: Date;
    password?: string;
    confirmPassword?: string;
}
