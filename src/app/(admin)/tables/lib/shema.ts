"use client";
import { z } from "zod";

export const tablesSchema = z.object({
  title: z.string(),
  order: z.coerce.number(),
});
