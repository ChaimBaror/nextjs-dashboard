import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const customers = await fetchFilteredCustomers(searchParams?.query || '');

  return <CustomersTable customers={customers} />;
}
