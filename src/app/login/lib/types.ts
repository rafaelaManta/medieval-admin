import { z } from "zod";
import { loginSchema } from "./schema";

export type LoginType = z.infer<typeof loginSchema>;

export interface ILoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}
