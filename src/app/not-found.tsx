import Link from "next/link";
import ClientLayout from "@/components/layout/ClientLayout";

export default function NotFound() {
  return (
    <ClientLayout>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <h1
            className="font-serif text-saffron leading-none mb-6"
            style={{ fontSize: "clamp(80px, 15vw, 160px)" }}
          >
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl text-parchment-dim mb-4">
            Page not found
          </h2>
          <p className="text-parchment-muted text-base font-sans mb-10 max-w-md mx-auto">
            The stars couldn&apos;t align for this page.
          </p>
          <Link href="/" className="btn-secondary">
            Return Home
          </Link>
        </div>
      </section>
    </ClientLayout>
  );
}
