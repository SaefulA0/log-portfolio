import Link from "next/link";
import "./BtnSecondary.css";

interface BtnSecondaryProps {
  href: string;
  componentStyle: string;
  BgHover: string;
  children: React.ReactNode;
}

export default function BtnSecondary({
  href,
  componentStyle,
  BgHover,
  children,
}: BtnSecondaryProps): JSX.Element {
  return (
    <>
      <Link href={href} type="button">
        <div
          className={`BtnSecondary ${componentStyle} mx-1 relative border border-gray-800 hover:border-gray-300 font-semibold tracking-wider leading-none overflow-hidden text-gray-800 hover:text-gray-100`}
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
