import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import useStockCall from "../../hook/useStockCall";
import { GridToolbar } from "@mui/x-data-grid";

const getRowId = (row) => {
    return row._id;
};

export default function ProductsTable() {
    const { products } = useSelector((state) => state.stock);
    const { deleteStockData } = useStockCall();

    const columns = [
        { field: "_id", headerName: "ID", width: 300 },
        {
            field: "categoryId",
            headerName: "Category",
            width: 250,
            editable: true,
            valueGetter: (value) => value.name,
        },
        {
            field: "brandId",
            headerName: "Brand",
            width: 250,
            editable: true,
            valueGetter: (value) => value.name,
        },
        {
            field: "name",
            headerName: "Product Name",
            width: 250,
            editable: true,
        },
        {
            field: "quantity",
            headerName: "Stock",
            type: "number",
            width: 175,
            editable: true,
        },
        {
            field: "actions",
            headerName: "Actions",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            headerAlign: "center",
            align: "center",
            width: 200,
            renderCell: (params) => (
                <DeleteIcon onClick={() => deleteStockData("products", params.id)} />
            ),
        },
    ];

    return (
        <Box sx={{ width: "100%", marginTop: "1rem" }}>
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
                pageSizeOptions={[5, 10, 15, 20]}
                checkboxSelection
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
            />
        </Box>
    );
}
