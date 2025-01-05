import { Header } from "@/components";
import { Subscript } from "lucide-react";

export const Template = ({
  children,
  createButtonProps = {},
}: {
  children: React.ReactNode;
  createButtonProps?: object;
}) => {
  return (
    <section className={"flex flex-col w-full"}>
      <Header createButtonProps={createButtonProps} />
      <div className={"container p-4 mr-auto"}>{children}</div>
    </section>
  );
};
