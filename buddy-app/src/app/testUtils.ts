import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createMockUser = async () => {
  const mockUser = {
    email: "johndoe@example.com",
    password: "password123",
  };

  const user = await prisma.user.create({
    data: mockUser,
  });

  return user;
};

createMockUser();
