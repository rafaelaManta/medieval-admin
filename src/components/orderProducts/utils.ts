import { literals } from "@/lib/literals";
import { STATUSES } from "@/app/(admin)/(home)/lib/utils";

export const LITERALS = {
  [STATUSES.toBeMade]: literals.toBeMadeText,
  [STATUSES.toBePaid]: literals.toBePaidText,
  [STATUSES.paid]: literals.paidText,
};

export const bgClass = {
  [STATUSES.toBeMade]: "bg-orange-400",
  [STATUSES.toBePaid]: "bg-purple-400",
  [STATUSES.paid]: "bg-green-400",
};
