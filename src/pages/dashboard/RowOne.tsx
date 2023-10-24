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
} from "recharts";

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

  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="a">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 20,
              right: 25,
              left: -5,
              bottom: 20,
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
      <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
    </>
  );
};
export default RowOne;
