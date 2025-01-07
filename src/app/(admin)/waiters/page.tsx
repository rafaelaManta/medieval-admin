import { getWaiters } from "./lib/actions";
import PageScreenContent from "./PageScreenContent";

export default async function Waiters() {
  const { waiters, error } = await getWaiters();

  return <PageScreenContent data={waiters} error={error} />;
}
