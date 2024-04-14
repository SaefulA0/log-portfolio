import Link from "next/link";
import "./BtnPrimary.css";
import { usePathname } from "next/navigation";

interface BtnPrimaryProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function BtnPrimary({
  href,
  children,
}: BtnPrimaryProps): JSX.Element {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <Link href={href} type="button">
        <div
          className={`relative btnPrimary flex items-center justify-center w-20 h-fit py-2 px-2 mx-1 lg:mx-6 xl:mx-11 tracking-wider leading-none overflow-hidden`}
        >
          <span className={`${isActive ? "active" : ""}`} />
          <p className={`${isActive ? "active" : ""}`}>{children}</p>
        </div>
      </Link>
    </>
  );
}
