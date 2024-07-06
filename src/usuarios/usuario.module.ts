import { Module } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioController } from "./usuario.controller";

@Module({
    imports: [],
    providers: [UsuarioService],
    controllers: [UsuarioController]
})
export class UsuarioModule {}