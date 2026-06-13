import type { Metadata } from "next";
import LegalLayout from "@/app/components/LegalLayout";
import { CONTACT, SITE } from "@/data/landing";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects your data.`,
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="How we handle your personal information when you use MenuFast."
      updated="13 June 2026"
    >
      <p>
        MenuFast (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates {SITE.url} and related
        services for Indian businesses. This policy explains what data we collect, why we collect it,
        and your rights under applicable Indian law including the Digital Personal Data Protection Act,
        2023.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Account data:</strong> name, phone number, email address, business name, and login
          credentials when you sign up.
        </li>
        <li>
          <strong>Business content:</strong> menu items, prices, images, branding settings, and
          order information you upload.
        </li>
        <li>
          <strong>Payment data:</strong> billing details processed by our payment partners. We do not
          store full card numbers on our servers.
        </li>
        <li>
          <strong>Usage data:</strong> device type, browser, IP address, pages visited, and analytics
          to improve the product.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>Provide, operate, and maintain the MenuFast platform.</li>
        <li>Process orders, payments, and WhatsApp notifications on your behalf.</li>
        <li>Send service updates, security alerts, and support responses.</li>
        <li>Improve features, fix bugs, and prevent fraud or abuse.</li>
        <li>Comply with legal obligations and respond to lawful requests.</li>
      </ul>

      <h2>Data sharing</h2>
      <p>
        We do not sell your personal data. We share data only with trusted service providers (hosting,
        payment gateways, SMS/WhatsApp APIs) strictly to deliver the service, and when required by law.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain account and order data while your account is active and for a reasonable period
        afterward for legal, tax, and dispute-resolution purposes. You may request deletion by
        contacting us.
      </p>

      <h2>Your rights</h2>
      <p>
        You may access, correct, or delete your personal data, withdraw consent where applicable, and
        lodge a complaint with the relevant authority. Contact us at{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard safeguards including HTTPS encryption, access controls, and secure
        hosting. No method of transmission over the internet is 100% secure.
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <br />
        Address: {CONTACT.address}
      </p>
    </LegalLayout>
  );
}
