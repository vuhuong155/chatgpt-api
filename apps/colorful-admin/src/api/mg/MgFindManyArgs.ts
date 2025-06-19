import { MgWhereInput } from "./MgWhereInput";
import { MgOrderByInput } from "./MgOrderByInput";

export type MgFindManyArgs = {
  where?: MgWhereInput;
  orderBy?: Array<MgOrderByInput>;
  skip?: number;
  take?: number;
};
