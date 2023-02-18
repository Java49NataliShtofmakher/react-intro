import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import './table.css'

export const Employees: React.FC = () => {
    const columns = React.useRef<GridColumns>([
        {
            field: 'name',
            headerName: 'Employee Name',
            headerClassName: 'header',
            flex: 1,
            headerAlign: 'center',
        },
        {
            field: 'birthDate',
            headerName: 'Date of Birth',
            flex: 1,
            type: 'date',
            headerAlign: 'center'
        },
        {
            field: 'department',
            headerName: 'Department',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'salary',
            headerName: 'Salary (NIS)',
            flex: 1,
            type: 'number',
            headerAlign: 'center',
            align: 'center'
        }
    ])



    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    console.log('employees ->', employees);

    return <Box sx={{ height: "80vh", width: "80vw" }}>
        <DataGrid columns={columns.current} rows={employees} />
    </Box>
}
function getListItems(employees: Employee[]): React.ReactNode {
    return employees.map((empl, index) =>
        <ListItem key={index}><Typography>{JSON.stringify(empl)}</Typography></ListItem>)
}