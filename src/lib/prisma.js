import { PrismaClient } from "@prisma/client";

// eslint-disable-next-line import/no-mutable-exports
let prisma;

// Check to see if we are running in prod
if (process.env.NODE_ENV === "production") {
    console.log("In production prisma");
    prisma = new PrismaClient();
} else {
    // Check if there is already a connection to the database
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
}

export default prisma;
