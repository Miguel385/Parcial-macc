import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {

    @Transform(({value}) => value.trim())//esta linea es para los espacios en blanco, trim limpia los caracteres en blanco
    @IsString()
    @MinLength(1)
    username: string;

    @IsEmail()
    email: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(8)  
    password : string;
}