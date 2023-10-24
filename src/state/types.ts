interface ebc {
  salaries: number;
  services: number;
  supplies: number;
}

interface dailyObj {
  date: string;
  expenses: number;
  id: string;
  _id: string;
}

interface monthlyObj {
  expenses: number;
  id: string;
  month: string;
  nonOperationalExpenses: number;
  operationalExpenses: number;
  _id: string;
  revenue: number;
}

export interface KpiResponse {
  createdAt: string;
  dailyData: dailyObj[];
  expensesByCategory: ebc;
  id: string;
  _id: string;
  __v: number;
  totalExpenses: number;
  totalProfit: number;
  totalRevenue: number;
  updatedAt: string;
  monthlyData: monthlyObj[];
}