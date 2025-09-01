import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MgServiceBase } from "./base/mg.service.base";

@Injectable()
export class MgService extends MgServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
