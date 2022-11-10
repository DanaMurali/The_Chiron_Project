import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      name: 'Alice',
      email: 'alice@chiron.io',
      career: 'IT',
      jobRole: 'Software Engineer',
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra augue at condimentum molestie. Nulla bibendum tempor augue sed fermentum. Mauris quis libero eu ex dictum varius in eget ipsum. Donec libero enim, fermentum ac mauris id, fringilla vehicula ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isMentor: false,
      isMentee: true,
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: 'bob@chiron.io' },
    update: {},
    create: {
      name: 'Bob',
      email: 'bob@chiron.io',
      career: 'IT',
      jobRole: 'Software Engineer',
      biography:
        'Phasellus in ligula sit amet purus elementum venenatis. Aliquam venenatis, justo non fermentum imperdiet, lacus sapien euismod leo, non porttitor ante mi feugiat lacus. Curabitur a ante lobortis sem malesuada scelerisque.',
      isMentor: false,
      isMentee: true,
    },
  });
  const christine = await prisma.user.upsert({
    where: { email: 'christine@chiron.io' },
    update: {},
    create: {
      name: 'Christine',
      email: 'christine@chiron.io',
      career: 'HR',
      jobRole: 'Payroll Assistant ',
      biography:
        'Phasellus in ligula sit amet purus elementum venenatis. Aliquam venenatis, justo non fermentum imperdiet, lacus sapien euismod leo, non porttitor ante mi feugiat lacus. Curabitur a ante lobortis sem malesuada scelerisque.',
      isMentor: false,
      isMentee: true,
    },
  });
  const request1 = await prisma.requests.upsert({
    where: {},
    update: {},
    create: {
      mentorId: alice.id,
      menteeId: bob.id,
    },
  });
  console.log({ alice, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
