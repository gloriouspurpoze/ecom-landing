import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";
import { CONTACT, SITE } from "@/data/landing";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `Refund and cancellation policy for ${SITE.name} subscriptions.`,
  alternates: { canonical: `${SITE.url}/refund` },
};

export default function RefundPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      description="How subscriptions, trials, and refunds work on Torq Orbit."
      updated="13 June 2026"
    >
      <h2>Free plan</h2>
      <p>
        The Free plan is available at no cost with no time limit. No payment is required and no
        refund applies.
      </p>

      <h2>Paid plans &amp; free trial</h2>
      <ul>
        <li>Growth (₹549/month) and Premium (₹999/month) include a 28-day free trial.</li>
        <li>No credit card is required to start the trial.</li>
        <li>
          After the trial, your chosen plan is billed monthly unless you cancel before the trial ends.
        </li>
      </ul>

      <h2>Cancellation</h2>
      <p>
        You may cancel your subscription at any time from your account dashboard or by emailing{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. Cancellation takes effect at the end
        of the current billing period. Your store will remain accessible until then.
      </p>

      <h2>Refunds</h2>
      <ul>
        <li>
          <strong>Within 7 days of first paid charge:</strong> full refund if you are unsatisfied and
          have not processed more than 10 paid orders through the platform.
        </li>
        <li>
          <strong>After 7 days:</strong> subscriptions are non-refundable for the current billing
          period, but you will not be charged again after cancellation.
        </li>
        <li>
          <strong>Payment-gateway fees</strong> on customer orders are non-refundable as they are
          charged by third-party payment providers.
        </li>
      </ul>

      <h2>Chargebacks &amp; disputes</h2>
      <p>
        If you believe you were charged in error, contact us at{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> within 14 days. We will investigate
        and respond within 5 business days.
      </p>

      <h2>Custom domain &amp; add-ons</h2>
      <p>
        Custom domain registration and third-party add-ons are billed separately and follow the
        refund policy of the respective provider.
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <br />
        WhatsApp:{" "}
        <a href={`https://wa.me/${CONTACT.whatsapp}`}>{CONTACT.whatsappDisplay}</a>
        <br />
        Support hours: {CONTACT.supportHours}
      </p>
    </LegalLayout>
  );
}
