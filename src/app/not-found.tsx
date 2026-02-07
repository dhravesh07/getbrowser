import Link from "next/link";
import ClientLayout from "@/components/layout/ClientLayout";

export default function NotFound() {
  return (
    <ClientLayout>
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-20" />
        <div className="container-custom text-center relative z-10">
          <div className="text-8xl font-bold gold-text mb-4">404</div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Lost in the Cosmos
          </h1>
          <p className="text-cosmic-200/40 mb-8 max-w-md mx-auto">
            The celestial page you seek does not exist in this astral plane.
          </p>
          <Link href="/" className="btn-primary">
            <span>Return Home</span>
          </Link>
        </div>
      </section>
    </ClientLayout>
  );
}
