import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioDTO } from "src/Model/dtos/UsuarioDTO";

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Get()
    getUsuarios(): String {
        return this.usuarioService.getUsuarios();
    }

    @Get('hello')
    getHello(): String {
        return this.usuarioService.getUsuariosHello();
    }

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    criarUsuario(@Body() usuario: UsuarioDTO) {
        return this.usuarioService.criarUsuario(usuario);
    }
}