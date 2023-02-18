import React from 'react';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

interface StatisticsProps {
    title: string;
    data: {
        minValue: number;
        maxValue: number;
        avgValue: number;
    }[];
}

export const Statistics: React.FC<StatisticsProps> = ({ title, data }) => {
    const columns = React.useRef<GridColumns>([
        {
            field: 'minValue',
            headerName: 'Minimal Value',
            headerClassName: 'header',
            flex: 1,
            type: 'number',
            headerAlign: 'center'
        },
        {
            field: 'maxValue',
            headerName: 'Maximal Value',
            flex: 1,
            type: 'number',
            headerAlign: 'center'
        },
        {
            field: 'avgValue',
            headerName: 'Average Value',
            flex: 1,
            type: 'number',
            headerAlign: 'center'
        },
    ])

    return <Box sx={{ height: "80vh", width: "80vw" }}>
        <Typography sx={{ height: '20vh', width: '20vw' }}>{title}</Typography>
        <DataGrid columns={columns.current} rows={data} autoHeight />
    </Box>
}