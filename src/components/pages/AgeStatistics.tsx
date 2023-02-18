import React from 'react';
import { Box, Typography } from "@mui/material";
import { statAge } from '../../service/EmployeesService';
import { useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';
import { Statistics } from '../navigators/Statistics';

export const AgeStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>
        (state => state.employees.employees)

    const { minAge, maxAge, avgAge } = statAge(employees)

    const newData = [{
        id: 0,
        minValue: minAge,
        maxValue: maxAge,
        avgValue: avgAge
    }]

    return <Box>
        <Statistics title='Age Statistics' data={newData} />
    </Box>
}