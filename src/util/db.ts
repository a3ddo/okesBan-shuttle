import { PrismaClient } from '@prisma/client';

// Check if there's an existing Prisma client on the global object
const globalForPrisma = global as typeof globalThis & { prisma?: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;

