// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();
//in prod we will use PrismaClient directly
//in dev we will use globalForPrisma

//in development mode, use a global variable so that the value
//is preserved across module reloads caused by HMR (Hot Module Replacement).
//in production mode, it's best to not use a global variable.
//because in production, the code is only run once at startup.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;