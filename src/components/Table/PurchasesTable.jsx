import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

export default function PurchasesTable() {
    const { purchases } = useSelector((state) => state.stock);

    console.log("Purchases data:", purchases);

    const columns = [
        {
            field: 'updatedAt',
            headerName: 'Date',
            width: 150,
            valueGetter: (value) => new Date(value.row.updatedAt).toLocaleDateString(), // Tarihi formatla
        },
        {
            field: 'firmId',
            headerName: 'Firm',
            width: 200,
            valueGetter: (value) => value.firmId?.name || '-No Firm-', // firmId null olabilir
        },
        {
            field: 'brandId',
            headerName: 'Brand',
            width: 200,
            valueGetter: (value) => value.brandId?.name || '-No Brand-', // brandId null olabilir
        },
        {
            field: 'productId',
            headerName: 'Product',
            width: 200,
            valueGetter: (value) => value.productId?.name || '-No Product-', // productId null olabilir
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            type: 'number',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 120,
        },
        {
            field: 'amount',
            headerName: 'Amount',
            type: 'number',
            width: 120,
        },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={purchases}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 15]}
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }} // Araç çubuğunu ekle
            />
        </Box>
    );
}