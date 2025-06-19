import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MgModuleBase } from "./base/mg.module.base";
import { MgService } from "./mg.service";
import { MgController } from "./mg.controller";
import { MgResolver } from "./mg.resolver";

@Module({
  imports: [MgModuleBase, forwardRef(() => AuthModule)],
  controllers: [MgController],
  providers: [MgService, MgResolver],
  exports: [MgService],
})
export class MgModule {}
