import { getWaiters } from "./lib/actions";
import WaitersContent from "./WaitersContent";

export default async function Waiters() {
  const { waiters, error } = await getWaiters();

  return <WaitersContent data={waiters} error={error} />;
}
