import { AppShell, Burger, Group, Text, NavLink, Title, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BriefcaseMedical, CalendarHeart, Clock, SquareActivity, User } from 'lucide-react';
import { NavLink as NavLink2, Outlet } from 'react-router';

type NavLinks = {
  href: string,
  label: string,
  icon: React.ReactNode,
}

const links : NavLinks[] = [
  {href: '/appointments', label: 'Citas', icon: <CalendarHeart />},
  {href: '/patients', label: 'Pacientes', icon: <User />},
  {href: '/doctors', label: 'Doctores', icon: <BriefcaseMedical />},
  {href: '/schedules', label: 'Horarios', icon: <Clock />},
  {href: '/specialties', label: 'Especialidades', icon: <SquareActivity />},
];

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: opened} }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={!opened} onClick={toggle} size="sm" hiddenFrom='sm' />
          <Title size="24">Clinic App</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {/* <Divider my="sm"/> */}
        {
          links.map((navlink, index) => (
            <NavLink
              key={index}
              label={<Text>{navlink.label}</Text>}
              leftSection={navlink.icon}
              p="sm"
              bdrs="sm"
              component={NavLink2}
              to={navlink.href}
            />
          ))
        }
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}