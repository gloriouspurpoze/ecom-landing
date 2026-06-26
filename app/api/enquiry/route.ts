import { NextResponse } from "next/server";
import axios from "axios";
import { buildEnquiryUrl, getEnquiryBase, type EnquiryPayload } from "@/lib/enquiry";

export async function POST(request: Request) {
  const base = getEnquiryBase();
  if (!base) {
    return NextResponse.json(
      { error: "Signup API is not configured. Set ENQUIRY_BASE in .env and restart the dev server." },
      { status: 503 }
    );
  }

  let payload: EnquiryPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const url = buildEnquiryUrl(base);

  try {
    const { data } = await axios.post(url, payload, {
      headers: { "Content-Type": "application/json" },
      timeout: 15_000,
    });
    return NextResponse.json(data ?? { ok: true });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (!err.response) {
        const hint = err.code === "ENOTFOUND"
          ? `Cannot resolve host — check ENQUIRY_BASE in .env (currently: ${base}).`
          : `Cannot connect to ${url}. Check that the backend URL is correct and the server is running.`;

        console.error("[api/enquiry]", hint, err.message);
        return NextResponse.json({ error: hint }, { status: 502 });
      }

      console.error("[api/enquiry]", err.response.status, err.response.data);
      return NextResponse.json(
        { error: "Backend rejected the enquiry.", detail: err.response.data },
        { status: err.response.status }
      );
    }

    console.error("[api/enquiry]", err);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
