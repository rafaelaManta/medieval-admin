import {
  HandPlatter,
  Home,
  LogOut,
  Martini,
  User,
  Warehouse,
} from "lucide-react";

export const menuItems = [
  {
    title: "Αρχική",
    url: "/",
    icon: () => <Home />,
  },
  {
    title: "Παραγγελίες",
    url: "/orders",
    icon: () => <HandPlatter />,
  },
  {
    title: "Προϊόντα",
    url: "/products",
    icon: () => <Martini />,
  },
  {
    title: "Σερβιτόροι",
    url: "/waiters",
    icon: () => <User />,
  },
  {
    title: "Τραπέζια",
    url: "/tables",
    icon: () => <Warehouse />,
  },

  {
    title: "Αποσύνδεση",
    url: "#",
    icon: () => <LogOut />,
  },
];
