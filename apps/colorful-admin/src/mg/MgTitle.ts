import { Mg as TMg } from "../api/mg/Mg";

export const MG_TITLE_FIELD = "id";

export const MgTitle = (record: TMg): string => {
  return record.id?.toString() || String(record.id);
};
