import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";
import { CONTACT, SITE } from "@/data/landing";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms and conditions for using ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/terms` },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="The rules for using Torq Orbit as a business owner or customer."
      updated="13 June 2026"
    >
      <p>
        By accessing or using Torq Orbit at {SITE.url}, you agree to these Terms of Service. If you do
        not agree, please do not use the platform.
      </p>

      <h2>Service description</h2>
      <p>
        Torq Orbit provides software for businesses to create digital storefronts, manage menus or
        catalogues, receive orders (including via WhatsApp), and optionally accept online payments.
        We are a technology platform — we are not a restaurant, retailer, or delivery company.
      </p>

      <h2>Account responsibilities</h2>
      <ul>
        <li>You must provide accurate business and contact information.</li>
        <li>You are responsible for all activity under your account.</li>
        <li>
          You must comply with applicable laws including FSSAI requirements (for food businesses),
          GST registration where required, and consumer protection laws.
        </li>
        <li>
          You are solely responsible for the accuracy of menu items, prices, allergens, and
          fulfilment of orders placed through your store.
        </li>
      </ul>

      <h2>Acceptable use</h2>
      <p>You may not use Torq Orbit to sell illegal goods, infringe intellectual property, send spam,
        or attempt to compromise platform security. We may suspend accounts that violate these terms.</p>

      <h2>Payments &amp; fees</h2>
      <ul>
        <li>Subscription fees are billed monthly as shown on our pricing page.</li>
        <li>Torq Orbit charges zero commission on orders.</li>
        <li>
          Online payments processed through our gateway incur a separate payment-gateway fee (currently
          2%) charged by the payment provider.
        </li>
        <li>Payouts to your bank account are subject to payment-partner settlement timelines.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        Torq Orbit owns the platform, software, and branding. You retain ownership of your business
        content (menus, logos, images) and grant us a licence to display it as part of the service.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        Torq Orbit is provided &quot;as is&quot;. To the maximum extent permitted by law, we are not
        liable for indirect, incidental, or consequential damages, lost profits, or disputes between
        you and your customers. Our total liability is limited to fees paid by you in the preceding
        three months.
      </p>

      <h2>Termination</h2>
      <p>
        You may cancel your account at any time. We may terminate or suspend access for breach of
        these terms. Upon termination, your public store link may be deactivated.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. Disputes shall be subject to the exclusive
        jurisdiction of courts in Mumbai, Maharashtra.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> · {CONTACT.address}
      </p>
    </LegalLayout>
  );
}
