import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const itCoordinator = await prisma.jobRole.create({
    data: { name: 'IT Coordinator' },
  });
  const networkAdmin = await prisma.jobRole.create({
    data: { name: 'Network Administrator' },
  });
  const networkEngineer = await prisma.jobRole.create({
    data: { name: 'Network Engineer' },
  });
  const serviceDeskAnalyst = await prisma.jobRole.create({
    data: { name: 'Service Desk Analyst' },
  });
  const databaseAnalyst = await prisma.jobRole.create({
    data: { name: 'Database Analyst' },
  });
  const dataQualityManager = await prisma.jobRole.create({
    data: { name: 'Data Quality Manager' },
  });
  const sqlDatabaseAdmin = await prisma.jobRole.create({
    data: { name: 'SQL Database Administrator' },
  });
  const backEndDeveloper = await prisma.jobRole.create({
    data: { name: 'Back-End Developer' },
  });
  const cloudDeveloper = await prisma.jobRole.create({
    data: { name: 'Cloud Software Developer' },
  });
  const cloudSystemEngineer = await prisma.jobRole.create({
    data: { name: 'Cloud System Engineer' },
  });
  const devOpsEngineer = await prisma.jobRole.create({
    data: { name: 'DevOps Engineer' },
  });
  const frontEndDeveloper = await prisma.jobRole.create({
    data: { name: 'Front-End Developer' },
  });
  const fullStackDeveloper = await prisma.jobRole.create({
    data: { name: 'Full Stack Developer' },
  });
  const softwareEngineer = await prisma.jobRole.create({
    data: { name: 'Software Engineer' },
  });
  const uiDeveloper = await prisma.jobRole.create({
    data: { name: 'UI (User Interface) Developer' },
  });
  const uxDeveloper = await prisma.jobRole.create({
    data: { name: 'UX (User Experience) Developer' },
  });
  const productManager = await prisma.jobRole.create({
    data: { name: 'Product Manager' },
  });
  const projectManager = await prisma.jobRole.create({
    data: { name: 'Project Manager' },
  });

  const alice = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@chiron.io',
      jobRoleId: frontEndDeveloper.id,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra augue at condimentum molestie. Nulla bibendum tempor augue sed fermentum. Mauris quis libero eu ex dictum varius in eget ipsum. Donec libero enim, fermentum ac mauris id, fringilla vehicula ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isMentor: false,
      isMentee: true,
    },
  });
  const bob = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@chiron.io',
      jobRoleId: softwareEngineer.id,
      biography:
        'Phasellus in ligula sit amet purus elementum venenatis. Aliquam venenatis, justo non fermentum imperdiet, lacus sapien euismod leo, non porttitor ante mi feugiat lacus. Curabitur a ante lobortis sem malesuada scelerisque.',
      isMentor: false,
      isMentee: true,
    },
  });
  const wendy = await prisma.user.create({
    data: {
      name: 'Wendy',
      email: 'wendy@chiron.io',
      jobRoleId: projectManager.id,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra augue at condimentum molestie. Nulla bibendum tempor augue sed fermentum. Mauris quis libero eu ex dictum varius in eget ipsum. Donec libero enim, fermentum ac mauris id, fringilla vehicula ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isMentor: true,
      isMentee: false,
    },
  });
  const dave = await prisma.user.create({
    data: {
      name: 'Dave',
      email: 'dave@chiron.io',
      jobRoleId: dataQualityManager.id,
      biography:
        'Phasellus in ligula sit amet purus elementum venenatis. Aliquam venenatis, justo non fermentum imperdiet, lacus sapien euismod leo, non porttitor ante mi feugiat lacus. Curabitur a ante lobortis sem malesuada scelerisque.',
      isMentor: true,
      isMentee: false,
    },
  });
  const christine = await prisma.user.create({
    data: {
      name: 'Christine',
      email: 'christine@chiron.io',
      jobRoleId: uxDeveloper.id,
      biography:
        'Phasellus in ligula sit amet purus elementum venenatis. Aliquam venenatis, justo non fermentum imperdiet, lacus sapien euismod leo, non porttitor ante mi feugiat lacus. Curabitur a ante lobortis sem malesuada scelerisque.',
      isMentor: false,
      isMentee: true,
    },
  });

  await prisma.request.create({
    data: {
      type: 'MENTOR',
      requesterId: christine.id,
      requesteeId: wendy.id,
    },
  });
  await prisma.request.create({
    data: {
      type: 'MENTOR',
      requesterId: alice.id,
      requesteeId: wendy.id,
    },
  });
  await prisma.request.create({
    data: {
      type: 'MENTEE',
      requesterId: dave.id,
      requesteeId: christine.id,
    },
  });
  await prisma.request.create({
    data: {
      type: 'MENTOR',
      requesterId: bob.id,
      requesteeId: dave.id,
    },
  });

  await prisma.relationship.create({
    data: {
      menteeId: bob.id,
      mentorId: wendy.id,
    },
  });
  await prisma.relationship.create({
    data: {
      menteeId: alice.id,
      mentorId: dave.id,
    },
  });
  await prisma.relationship.create({
    data: {
      menteeId: christine.id,
      mentorId: dave.id,
    },
  });
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
