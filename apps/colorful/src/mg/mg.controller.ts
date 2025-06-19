import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MgService } from "./mg.service";
import { MgControllerBase } from "./base/mg.controller.base";

@swagger.ApiTags("mgs")
@common.Controller("mgs")
export class MgController extends MgControllerBase {
  constructor(
    protected readonly service: MgService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
