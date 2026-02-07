import Link from "next/link";
import ClientLayout from "@/components/layout/ClientLayout";

export default function NotFound() {
  return (
    <ClientLayout>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="text-8xl font-bold gradient-text mb-4">404</div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-white/40 mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">
            <span>Return Home</span>
          </Link>
        </div>
      </section>
    </ClientLayout>
  );
}
