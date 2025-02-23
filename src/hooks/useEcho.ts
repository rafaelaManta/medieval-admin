import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";

export const useEcho = () => {
  const [echo, setEcho] = useState<Echo<"pusher"> | null>(null);

  if (typeof window !== "undefined") {
    (window as any).Pusher = Pusher;
  }

  useEffect(() => {
    if (echo) {
      return;
    }
    const newEcho = new Echo({
      broadcaster: "pusher",
      key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
      wsHost:
        process.env.NEXT_PUBLIC_PUSHER_APP_HOST ||
        `ws-${process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER}.pusher.com`,
      wsPort: 443,
      forceTLS: true,
      disableStats: true,
    });

    setEcho(newEcho);
  }, [echo]);

  return echo;
};
