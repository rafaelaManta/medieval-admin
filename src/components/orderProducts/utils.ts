import { literals } from "@/lib/literals";
import { STATUSES } from "@/app/(admin)/(home)/lib/model";

export const LITERALS = {
  [STATUSES.toBeMade]: literals.toBeMadeText,
  [STATUSES.toBePaid]: literals.toBePaidText,
  [STATUSES.paid]: literals.paidText,
};

export const bgClass = {
  [STATUSES.toBeMade]: "bg-orange-500",
  [STATUSES.toBePaid]: "bg-purple-600",
  [STATUSES.paid]: "bg-green-600",
};
