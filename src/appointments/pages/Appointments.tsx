import {Button, Group, Table, Text, Title } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";

type Appointment = {
  startDateTime: Date,
  endDateTime: Date,
  name: string,
  reason: string,
  doctor: string,
  speciality: string
} 

const data : Appointment[] = [
  { 
    startDateTime: new Date(2025, 7, 9, 16, 27),
    endDateTime: new Date(2025, 7, 9, 17, 27), 
    name: 'Juan',
    reason: 'Consulta anual',
    doctor: 'Pedro Guzman',
    speciality: 'Dermatologia'
  }
];

export default function Appointments() {
  const [date, setDate] = useState<string | null>(dayjs().format("YYYY-MM-DD"));
  return (
    <>
      <Title order={2} mb="md">
        Citas
      </Title>
      <Group justify="space-between">
        <Text size="xl">{`Citas de ${dayjs(date).format("DD/MM/YYYY")}`}</Text>

        <Group>
          <Button onClick={() => setDate("")} color="gray">Anterior</Button>
          <DateInput valueFormat="DD/MM/YYYY"  value={date} onChange={setDate}/>
          <Button color="gray">Siguiente</Button>
          <Button>+ Nueva cita</Button>
        </Group>
      </Group>

      <Table mt="3rem">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Hora Inicio</Table.Th>
            <Table.Th>Hora Fin</Table.Th>
            <Table.Th>Nombre completo</Table.Th>
            <Table.Th>Motivo</Table.Th>
            <Table.Th>Doctor</Table.Th>
            <Table.Th>Especialidad</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {
            data.map( (item, index) => 
              <Table.Tr key={index}>
                <Table.Td>{item.startDateTime.toLocaleString()}</Table.Td>
                <Table.Td>{item.endDateTime.toLocaleString()}</Table.Td>
                <Table.Td>{item.name}</Table.Td>
                <Table.Td>{item.reason}</Table.Td>
                <Table.Td>{item.doctor}</Table.Td>
                <Table.Td>{item.speciality}</Table.Td>
              </Table.Tr>
            )
          }
        </Table.Tbody>
      </Table>
    </>
  )
}