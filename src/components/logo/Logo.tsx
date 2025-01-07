import Image from "next/image";
import logo from "#/public/logo.png";
import potionLogo from "#/public/potionLogo.png";

export const Logo = ({
  className = "flex justify-center",
  width = 200,
  height = 158,
  logoType = "primary",
}: {
  className?: string;
  width?: number;
  height?: number;
  logoType?: string;
}) => {
  const logoSources = {
    primary: logo,
    secondary: potionLogo,
  };
  return (
    <div className={className}>
      <Image
        src={logoSources[logoType]}
        alt={"medieval-coctales-logo"}
        width={width}
        height={height}
      />
    </div>
  );
};
