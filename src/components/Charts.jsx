import { Card, CardContent, Grid, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useSelector } from 'react-redux';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const Charts = () => {
    const { sales, purchases } = useSelector(state => state.stock)

    const salesDate = sales.map(sale => ({
        date: new Date(sale.createdAt).toLocaleString(),
        amount: sale.amount
    }))

    return (
        <Card sx={{ display: "flex" }}>

            <CardContent xs={12} md={6}
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    margin: 2,
                    padding: 3,
                }}
            >
                <Typography variant="h6">Sales</Typography>
                <AreaChart width={675} height={300} data={sales}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="createdAt" />
                    <YAxis dataKey={salesDate.amount} />
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.1}
                    />
                </AreaChart>
            </CardContent>
            <CardContent xs={12} md={6}
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    margin: 2,
                    padding: 3,
                }}
            >
                <Typography variant="h6">Purchases</Typography>
                <AreaChart width={675} height={300} data={purchases}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="createdAt" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.1}
                    />
                </AreaChart>
            </CardContent>

        </Card >
    )
}

export default Charts;