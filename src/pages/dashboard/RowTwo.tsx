import DashboardBox from "@/components/DashboardBox";
import { useGetProductsQuery, useGetKpisQuery } from "@/state/api";
import BoxHeader from "@/components/BoxHeader";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  CartesianGrid,
  LineChart,
  Pie,
  PieChart,
  Cell,
  Scatter,
  ScatterChart,
  ZAxis,
} from "recharts";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import FlexBetween from "@/components/FlexBetween";

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const RowTwo = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const { data: productsData } = useGetProductsQuery();
  const { data } = useGetKpisQuery();

  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non-operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [data]);

  const ProductExpenseData = useMemo(() => {
    return (
      productsData &&
      productsData.map(({ _id, price, expense }) => {
        return { id: _id, price, expense };
      })
    );
  }, [productsData]);
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="d">
        <BoxHeader
          title="Operational Vs Non-operational Expenses"
          subtitle="this would be a description for the the chart"
          sideText="+10%"
        />

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueExpenses}
            margin={{
              top: 10,
              right: 0,
              left: -15,
              bottom: 60,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis tickLine={false} dataKey="name" />
            <YAxis tickLine={false} yAxisId="left" orientation="left" />
            <YAxis tickLine={false} yAxisId="right" orientation="right" />
            <Tooltip />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="Operational Expenses"
              stroke={palette.tertiary[500]}
              dot={true}
            />
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="Non-operational Expenses"
              stroke={palette.primary.main}
              dot={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="e">
        <BoxHeader
          title="Operational Vs Non-operational Expenses"
          subtitle="this would be a description for the the chart"
          sideText="+10%"
        />
        <FlexBetween mt="-1rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: -0,
              right: -10,
              left: -10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>

          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m=".3rem 0" variant="h3" color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign is desired
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Loses in revenue</Typography>
            <Typography variant="h6">Loses are down 25%</Typography>
            <Typography mt="0.4rem" variant="h5">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 30% from last month
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>

      <DashboardBox bgcolor="#fff" gridArea="f">
        <BoxHeader
          title="Product Prices vs Expenses"
          subtitle="this would be a description for the the chart"
          sideText="+10%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 10,
              right: 20,
              bottom: 58,
              left: -20,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: "10px",
              }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis range={[32]} type="number" />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={ProductExpenseData}
              fill="#8884d8"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};
export default RowTwo;
