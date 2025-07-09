import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from "@mantine/core";
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <MantineProvider>
      <AppRouter />
    </MantineProvider>
  )
}