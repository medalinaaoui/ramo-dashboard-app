import DashboardBox from "@/components/DashboardBox";
import { useTheme } from "@mui/material";
import { useGetKpisQuery } from "@/state/api";
import { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  CartesianGrid,
  Legend,
  LineChart,
  Bar,
  BarChart,
  Rectangle,
} from "recharts";
import BoxHeader from "@/components/BoxHeader";

// type Props = {};
const RowOne = () => {
  const { palette } = useTheme();
  const { data } = useGetKpisQuery();

  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return { name: month.substring(0, 3), revenue, expenses };
      })
    );
  }, [data]);
  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);

  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="a">
        <BoxHeader
          title="Revenue and Expenses"
          subtitle="this would be a description for the the chart"
          sideText="+10%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 10,
              right: 25,
              left: -5,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F6F1E9" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#F6F1E9" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F6F1E9" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#F6F1E9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis tickLine={false} dataKey="name" />
            <YAxis tickLine={false} domain={[8000, 24000]} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              dot={true}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
              dot={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox bgcolor="#fff" gridArea="b">
        <BoxHeader
          title="Revenue and Profit"
          subtitle="this would be a description for the the chart"
          sideText="+10%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueProfit}
            margin={{
              top: 10,
              right: 0,
              left: -15,
              bottom: 60,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis tickLine={false} dataKey="name" />
            <YAxis tickLine={false} yAxisId="left" />
            <YAxis tickLine={false} yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="profit"
              stroke="#8884d8"
              dot={true}
            />
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="revenue"
              stroke={palette.primary.main}
              dot={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox bgcolor="#fff" gridArea="c">
        <BoxHeader
          title="Revenue by Months"
          subtitle="this would be a description for the the chart"
          sideText="+10%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenueExpenses}
            margin={{
              top: 5,
              right: 14,
              left: -10,
              bottom: 73,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="75%" stopColor="#00A9FF" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#00A9FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="revenue"
              fill="url(#colorRevenue1)"
              color="#000"
              activeBar={<Rectangle fill="#000" stroke="#000" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};
export default RowOne;
