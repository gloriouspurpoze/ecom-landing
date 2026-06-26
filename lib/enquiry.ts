import axios from "axios";

export type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

/** Build enquiry URL from a base that may or may not already include `/api`. */
export function buildEnquiryUrl(base: string): string {
  const normalized = base.replace(/\/$/, "");
  if (normalized.endsWith("/api")) {
    return `${normalized}/public/storefront/enquiry`;
  }
  return `${normalized}/api/public/storefront/enquiry`;
}

export function getEnquiryBase(): string | null {
  const base =
    process.env.ENQUIRY_BASE ??
    process.env.NEXT_PUBLIC_ENQUIRY_BASE ??
    process.env.NEXT_PUBLIC_API_URL;
  return base?.replace(/\/$/, "") ?? null;
}

export function getEnquiryApiUrl(): string | null {
  const base = getEnquiryBase();
  if (!base) return null;
  return buildEnquiryUrl(base);
}

/** Submit via same-origin proxy — avoids CORS and keeps backend URL server-side. */
export async function submitEnquiry(payload: EnquiryPayload) {
  await axios.post("/api/enquiry", payload);
}

export function enquiryErrorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    const serverMessage =
      typeof err.response?.data === "object" &&
      err.response.data !== null &&
      "error" in err.response.data
        ? String((err.response.data as { error: unknown }).error)
        : null;

    if (serverMessage) return serverMessage;

    if (!err.response) {
      return "Could not reach the server. Check your internet connection or try WhatsApp below.";
    }
    if (err.response.status === 404) {
      return "Signup API endpoint not found. Check ENQUIRY_BASE in .env — the backend URL may be wrong.";
    }
    if (err.response.status === 503) {
      return "Signup API is not configured. Add ENQUIRY_BASE to .env and restart the dev server.";
    }
    if (err.response.status >= 500) {
      return "Our server had an issue. Please try WhatsApp or email us directly.";
    }
    const detail =
      typeof err.response.data === "object" &&
      err.response.data !== null &&
      "detail" in err.response.data
        ? String((err.response.data as { detail: unknown }).detail)
        : null;
    if (detail) return detail;
  }

  return "Couldn't send your enquiry. Please try WhatsApp or email us directly.";
}
