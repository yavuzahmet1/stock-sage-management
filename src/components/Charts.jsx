import { Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
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
    const { sales, purchases } = useSelector(state => state.stock);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const salesData = sales.map(sale => ({
        date: new Date(sale.createdAt).toLocaleString(),
        amount: sale.amount
    }));

    const purchasesData = purchases.map(purchase => ({
        date: new Date(purchase.createdAt).toLocaleString(),
        amount: purchase.amount
    }));

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Card
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        margin: 2,
                        padding: 2,
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Sales
                        </Typography>
                        <AreaChart
                            width={isMobile ? 350 : 500}
                            height={300}
                            data={salesData}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis dataKey="amount" />
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
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        margin: 2,
                        padding: 2,
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Purchases
                        </Typography>
                        <AreaChart
                            width={isMobile ? 350 : 500}
                            height={300}
                            data={purchasesData}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis dataKey="amount" />
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
                </Card>
            </Grid>
        </Grid>
    );
};

export default Charts;