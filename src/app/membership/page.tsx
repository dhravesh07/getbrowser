import type { Metadata } from "next";
import ClientLayout from "@/components/layout/ClientLayout";
import MembershipContent from "./MembershipContent";

export const metadata: Metadata = {
  title: "Membership - Exclusive Astrology Access",
  description:
    "Get exclusive access to premium Vedic Astrology content, live sessions, and community features. Flexible membership plans with subscription options.",
  openGraph: {
    title: "Membership | Ankyotissh",
    description:
      "Get exclusive access to premium Vedic Astrology content, live sessions, and community features.",
  },
};

export default function MembershipPage() {
  return (
    <ClientLayout>
      <MembershipContent />
    </ClientLayout>
  );
}
