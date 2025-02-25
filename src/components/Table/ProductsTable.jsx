import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import useStockCall from "../../hook/useStockCall";
import { GridToolbar } from "@mui/x-data-grid";
import { useMediaQuery, useTheme } from "@mui/material";

const getRowId = (row) => {
    return row._id;
};

export default function ProductsTable() {
    const { products } = useSelector((state) => state.stock);
    const { deleteStockData } = useStockCall();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const columns = [
        { field: "_id", headerName: "ID", width: isMobile ? 150 : 300 },
        {
            field: "categoryId",
            headerName: "Category",
            width: isMobile ? 150 : 250,
            editable: true,
            valueGetter: (value) => value.name,
        },
        {
            field: "brandId",
            headerName: "Brand",
            width: isMobile ? 150 : 250,
            editable: true,
            valueGetter: (value) => value.name,
        },
        {
            field: "name",
            headerName: "Product Name",
            width: isMobile ? 150 : 250,
            editable: true,
        },
        {
            field: "quantity",
            headerName: "Stock",
            type: "number",
            width: isMobile ? 100 : 175,
            editable: true,
        },
        {
            field: "actions",
            headerName: "Actions",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            headerAlign: "center",
            align: "center",
            width: isMobile ? 100 : 200,
            renderCell: (params) => (
                <DeleteIcon
                    onClick={() => deleteStockData("products", params.id)}
                    style={{ cursor: "pointer" }}
                />
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
                autoHeight
                sx={{
                    "& .MuiDataGrid-cell": {
                        fontSize: isMobile ? "12px" : "14px",
                    },
                    "& .MuiDataGrid-columnHeader": {
                        fontSize: isMobile ? "12px" : "14px",
                    },
                }}
            />
        </Box>
    );
}