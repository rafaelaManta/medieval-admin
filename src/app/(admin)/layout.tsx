import {ReactNode} from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <main className={"flex h-screen"}>{children}</main>;
}
