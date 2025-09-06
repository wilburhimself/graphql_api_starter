import { PrismaClient } from '@prisma/test-client';

describe('Database', () => {
  it('should connect to the test database', async () => {
    const prisma = new PrismaClient();
    await expect(prisma.$connect()).resolves.not.toThrow();
    await prisma.$disconnect();
  });
});
