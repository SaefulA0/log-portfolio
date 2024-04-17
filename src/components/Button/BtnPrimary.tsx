import Link from "next/link";
import "./BtnPrimary.css";

interface BtnPrimaryProps {
  href: string;
  componentStyle: string;
  BgHover: string;
  children: React.ReactNode;
}

export default function BtnPrimary({
  href,
  componentStyle,
  BgHover,
  children,
}: BtnPrimaryProps): JSX.Element {
  return (
    <>
      <Link href={href} type="button">
        <div
          className={`BtnPrimary w-fit ${componentStyle} mx-1 relative border border-gray-800 hover:border-gray-300 font-semibold tracking-wider leading-none overflow-hidden text-gray-800 hover:text-gray-100`}
        >
          <span className={`absolute inset-0 ${BgHover}`}></span>
          <span className="absolute inset-0 flex justify-center items-center">
            {children}
          </span>
          {children}
        </div>
      </Link>
    </>
  );
}
