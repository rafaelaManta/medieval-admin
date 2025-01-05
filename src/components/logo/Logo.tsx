import Image from "next/image";
import logo from "#/public/logo.png";

export const Logo = ({
  className = "flex justify-center",
  width = 150,
  height = 100,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className={className}>
      <Image
        src={logo}
        alt={"medieval-coctales-logo"}
        width={width}
        height={height}
      />
    </div>
  );
};
