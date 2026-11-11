import { isEmail, IsEmail, IsEnum, IsInt, IsNotEmpty, isNotEmpty, IsString } from "class-validator";
//DTO Data Transfer Object is 
export class CreateAnimalsDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    description:string;

    type:string;
    @IsInt()
    age:number;
    
    star:boolean;
    winner:boolean

}
