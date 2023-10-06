import { PrismaClient } from "@prisma/client";
import { singleton } from "./singleton.server";

export const db = singleton("prisma", () => new PrismaClient());

export async function getUser(email:string){
  return await db.user.findUnique({where:{ email:email }})
}
