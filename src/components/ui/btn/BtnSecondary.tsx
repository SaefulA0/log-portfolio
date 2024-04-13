import Link from "next/link";
import "./BtnSecondary.css";

interface BtnSecondaryProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function BtnSecondary({
  href,
  children,
}: BtnSecondaryProps): JSX.Element {
  return (
    <>
      <Link href={href} type="button">
        <div className="BtnSecondary px-8 py-3 relative border border-gray-800 hover:border-gray-300 font-semibold tracking-wider leading-none overflow-hidden hover:text-gray-100">
          <span className="absolute inset-0 bg-[#38dd77]"></span>
          <span className="absolute inset-0 flex justify-center items-center">
            {children}
          </span>
          {children}
        </div>
      </Link>
    </>
  );
}
