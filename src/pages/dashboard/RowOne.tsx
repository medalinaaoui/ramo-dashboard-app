import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

// type Props = {};
const RowOne = () => {
  const { data, isLoading, error } = useGetKpisQuery();
  console.log("🚀 ~ file: RowOne.tsx:7 ~ RowOne ~ error:", error);
  console.log("🚀 ~ file: RowOne.tsx:7 ~ RowOne ~ isLoading:", isLoading);
  console.log("🚀 ~ file: RowOne.tsx:7 ~ RowOne ~ data:", data);
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="a"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
    </>
  );
};
export default RowOne;
