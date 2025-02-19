import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { GridDeleteIcon } from '@mui/x-data-grid';
import useStockCall from '../../hook/useStockCall';

const getRowId = (row) => {
    return row._id;
}

export default function ProductsTable() {
    const { deleteStockData } = useStockCall()
    const { products } = useSelector(state => state.stock)
    console.log("first", products)

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'categoryId',
            headerName: 'Category',
            width: 250,
            editable: true,
            valueGetter: ((value) => value.name)
        },
        {
            field: 'brandId',
            headerName: 'Brand',
            width: 300,
            editable: true,
            valueGetter: ((value) => value.name)
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            editable: true,
        },
        {
            field: 'quantity',
            headerName: 'Stock',
            type: 'number',
            width: 200,
            editable: true,
        },
        {
            field: "actions",
            headerName: 'Actions',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => (
                < GridDeleteIcon onClick={() => deleteStockData("products", params.id)} />
            )
        },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                getRowId={getRowId}
                rows={products}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 15]}
                checkboxSelection
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
            />
        </Box>
    );
}
