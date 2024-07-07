import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty } from 'class-validator';

export class UsuarioDTO {

    @IsNotEmpty({message: "Por favor, digite o seu nome!"})
    nome: string;

    @Type(() => Number)
    @IsInt({message: "Por favor, a idade deve ser um número inteiro!"})
    idade: number;

    @IsEmail({}, {message: "Por favor, digite um endereço de email válido!"})
    email: string;

}