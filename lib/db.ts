import { Prisma, PrismaClient } from "@prisma/client";

//NextJs Hot Reload on dev support

declare global {
	var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();
// globalThis don't affected by hot reload in dev

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
