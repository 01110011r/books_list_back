import { Module } from "@nestjs/common";
import { Helper } from "./lib.helper.service";
import { JwtModule } from "@nestjs/jwt";


@Module({
    imports: [JwtModule],
    providers:[Helper],
    exports:[Helper]
})
export class LibModule {}