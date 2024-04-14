import ResponsiveDesign from "@/components/ResDesign";

export default function project() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center p-24 bg-gray-100 text-gray-900">
      <ResponsiveDesign />
      <h1 className="text-6xl font-bold">project Page</h1>
      <p className="text-xl mt-4">This is a Next.js app with Tailwind CSS.</p>
    </section>
  );
}
