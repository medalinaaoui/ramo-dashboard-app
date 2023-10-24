import DashboardBox from "@/components/DashboardBox";

type Props = {};
const RowTwo = (props: Props) => {
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="d"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="e"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="f"></DashboardBox>
    </>
  );
};
export default RowTwo;
