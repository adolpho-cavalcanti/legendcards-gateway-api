import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateLegendDto {

    @IsString()
    @IsNotEmpty()
    nome: string;
    
    @IsString()
    @IsNotEmpty()
    posicao: string;

    @IsString()
    @IsNotEmpty()
    imagem: string;

    @IsString()
    @IsNotEmpty()
    nacionalidade: string;

    @IsInt()
    @IsNotEmpty()
    melhorDoMundo: number;

    @IsString()
    @IsNotEmpty()
    video: string;
    
    @IsArray()
    @ArrayMinSize(1)
    titulos: Array<Trophy>
}

interface Trophy {
    nome: string,
    imagem: string
    peso: number
    qtdTitulos: number
}