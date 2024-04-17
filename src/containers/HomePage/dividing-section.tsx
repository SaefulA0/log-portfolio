import { GoIssueClosed } from "react-icons/go";

export default function DividingSection() {
  return (
    <section className="text-gray-900">
      <div className="w-full h-fit py-5 px-5 bg-Subtle flex items-center justify-center">
        <div className="w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-1">
            <GoIssueClosed size={20} color="black" />
            <span>Transparent</span>
          </div>
          <div className="flex items-center gap-1">
            <GoIssueClosed size={20} color="black" />
            <span>User Fiendly</span>
          </div>
          <div className="flex items-center gap-1">
            <GoIssueClosed size={20} color="black" />
            <span>Engaging Design</span>
          </div>
          <div className="flex items-center gap-1">
            <GoIssueClosed size={20} color="black" />
            <span>High-Quality Software Development Services</span>
          </div>
          <div className="flex items-center gap-1">
            <GoIssueClosed size={20} color="black" />
            <span>Cost-Effective Solution</span>
          </div>
        </div>
      </div>
    </section>
  );
}
