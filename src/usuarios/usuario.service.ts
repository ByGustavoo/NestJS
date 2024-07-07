import { BadRequestException, Injectable } from "@nestjs/common";
import { UsuarioDTO } from "src/Model/dtos/UsuarioDTO";

global.usuarios = ['Gustavo', 'Giovanna'];

@Injectable()
export class UsuarioService {

    getUsuarios(): String {
        return global.usuarios;;
    }

    getUsuariosHello(): String {
        return "Estou gostando muito do NestJS!"
    }

    criarUsuario(usuario: UsuarioDTO) {
        global.usuarios.push(usuario);
        return "Usuário ${usuario.nome} criado com sucesso!"
    }
}