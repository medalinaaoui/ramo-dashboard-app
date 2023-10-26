import DashboardBox from "@/components/DashboardBox";
import {
  useGetProductsQuery,
  useGetTransactionQuery,
  useGetKpisQuery,
} from "@/state/api";
import BoxHeader from "@/components/BoxHeader";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { Cell, Pie, PieChart } from "recharts";
import FlexBetween from "@/components/FlexBetween";

const RowThree = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const { data: TransactionData } = useGetTransactionQuery();
  const { data: productsData } = useGetProductsQuery();
  const { data: KpisData } = useGetKpisQuery();

  const productRows = useMemo(() => {
    return productsData?.map(({ _id, expense, price }) => {
      return {
        id: _id,
        expense,
        price,
      };
    });
  }, [productsData]);
  const transactionRows = useMemo(() => {
    return TransactionData?.map(({ _id, amount, buyer, productIds }) => {
      return {
        id: _id,
        amount,
        buyer,
        productIds,
      };
    });
  }, [TransactionData]);

  const productColumns = [
    {
      field: "id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];
  const transactionColumns = [
    {
      field: "id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) => {
        return (params?.value as string[])?.length;
      },
    },
  ];

  const pieChartData = useMemo(() => {
    if (KpisData) {
      const totalExpenses = KpisData[0].totalExpenses;
      return Object.entries(KpisData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            },
          ];
        }
      );
    }
  }, [KpisData]);

  console.log("productsData:", productsData);
  console.log("TransactionData:", TransactionData);
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="g">
        <BoxHeader
          title="List of Products"
          sideText={`${productsData?.length} Products`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={15}
            rows={productRows || []}
            columns={productColumns}
            rowHeight={35}
            hideFooter={true}
          />
        </Box>
      </DashboardBox>

      <DashboardBox bgcolor="#fff" gridArea="h">
        <BoxHeader
          title="Recent Orders"
          sideText={`${TransactionData?.length} Transactions`}
        />
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={15}
            rows={transactionRows || []}
            columns={transactionColumns}
            rowHeight={35}
            hideFooter={true}
          />
        </Box>
      </DashboardBox>

      <DashboardBox bgcolor="#fff" gridArea="i">
        <BoxHeader title="Expense Breakdown by Category" sideText="10%" />
        <FlexBetween mt=".5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={110} height={100}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={38}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          ))}
        </FlexBetween>
      </DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="j">
        <BoxHeader
          title="Overall summary and explanation data"
          sideText={`33%`}
        />
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%"
          ></Box>
        </Box>
        <Typography margin="0 1rem" color="#fff" variant="h6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad et
          commodi ut, doloribus laudantium fuga, at harum pariatur illum
          repudiandae inventore culpa itaque distinctio excepturi consectetur
          possimus. Dignissimos, cum praesentium?
        </Typography>
      </DashboardBox>
    </>
  );
};
export default RowThree;
