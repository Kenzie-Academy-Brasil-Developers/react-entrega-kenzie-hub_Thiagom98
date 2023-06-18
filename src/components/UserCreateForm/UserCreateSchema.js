import { z } from "zod";

export const UserCreateSchema = z.object({
    name: z.
        string()
        .nonempty("O nome é obrigatório")
        .min(2, "O nome precisa contar pelo menos 2 carácteres"),
    email: z.
        string()
        .nonempty("O email é obrigatório")
        .email('Favor fornecer um email valido'),
    password: z.
        string()
        .nonempty("A senha é obrigatória")
        .min(8, "A senha deve possuir pelo menos 8 caracteres")
        .regex(/(?=.*?[A-Z])/, "A senha deve possuir pelo menos 1 letra maiúscula")
        .regex(/(?=.*?[a-z])/, "A senha deve possuir pelo menos 1 letra minúscula")
        .regex(/(?=.*?[0-9])/, "A senha deve possuir pelo menos 1 número")
        .regex(/(?=.*?[#?!@$%^&*-])/, "A senha deve possuir pelo menos 1 carácter especial "),
    contact: z.
        string()
        .nonempty("O contato é obrigatório"),
    course_module: z.
        string()
        .nonempty("Favor selecionar um módulo"),
    bio: z.
        string()
        .nonempty("Favor escrever uma bio")
})