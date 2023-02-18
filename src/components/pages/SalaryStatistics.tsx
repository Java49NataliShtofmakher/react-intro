import React from 'react';
import { Box } from "@mui/material";
import { statSalary } from '../../service/EmployeesService';
import { useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';
import { Statistics } from '../navigators/Statistics';

export const SalaryStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>
    (state => state.employees.employees)

const { minSalary, maxSalary, avgSalary } = statSalary(employees)

const newData = [{
    id: 0,
    minValue: minSalary,
    maxValue: maxSalary,
    avgValue: avgSalary
}]

return <Box>
    <Statistics title='Salary Statistics' data={newData} />
</Box>
}