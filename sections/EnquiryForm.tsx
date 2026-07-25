"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn, isValidEmail, isValidPhone } from "@/lib/utils";
import type { EnquiryFormData, EnquiryFormErrors, SubmitStatus } from "@/types";

const initialData: EnquiryFormData = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(values: EnquiryFormData): EnquiryFormErrors {
  const next: EnquiryFormErrors = {};
  if (!values.name.trim()) next.name = "Please enter your name.";
  if (!values.email.trim()) next.email = "Please enter your email.";
  else if (!isValidEmail(values.email)) next.email = "Enter a valid email address.";
  if (!values.phone.trim()) next.phone = "Please enter your phone number.";
  else if (!isValidPhone(values.phone)) next.phone = "Enter a valid phone number.";
  if (!values.subject.trim()) next.subject = "Please enter a subject.";
  if (!values.message.trim()) next.message = "Tell us a little about your shipment.";
  else if (values.message.trim().length < 10) next.message = "Please add a few more details.";
  return next;
}

export function EnquiryForm() {
  const [data, setData] = useState<EnquiryFormData>(initialData);
  const [errors, setErrors] = useState<EnquiryFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(field: keyof EnquiryFormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    // No backend is wired up yet, so we simulate the round trip. Swap this
    // for a real submit handler (API route, mail service, CRM webhook…)
    // when one is available — the validated `data` object is ready to send.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setData(initialData);
  }

  const fieldClasses = (field: keyof EnquiryFormErrors) =>
    cn(
      "w-full rounded-lg border bg-primary-50/40 px-4 py-3 text-sm text-primary-900 placeholder:text-ink-soft/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary-500",
      errors[field] ? "border-red-400" : "border-primary-900/10",
    );

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[26rem] flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-2xl">
        <span className="flex size-14 items-center justify-center rounded-full bg-green-50 text-green-600">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-primary-900">Enquiry sent</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
          Thanks for reaching out — a member of our team will get back to you shortly.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
      <h3 className="font-display text-xl font-bold text-primary-900 sm:text-2xl">Send Us an Enquiry</h3>
      <p className="mt-1.5 text-sm text-ink-soft">We typically reply within one business day.</p>

      <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Full Name" error={errors.name}>
            <input
              type="text"
              autoComplete="name"
              value={data.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={fieldClasses("name")}
              aria-invalid={Boolean(errors.name)}
            />
          </Field>
          <Field label="Email Address" error={errors.email}>
            <input
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={fieldClasses("email")}
              aria-invalid={Boolean(errors.email)}
            />
          </Field>
          <Field label="Phone Number" error={errors.phone}>
            <input
              type="tel"
              autoComplete="tel"
              value={data.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={fieldClasses("phone")}
              aria-invalid={Boolean(errors.phone)}
            />
          </Field>
          <Field label="Subject" error={errors.subject}>
            <input
              type="text"
              value={data.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              className={fieldClasses("subject")}
              aria-invalid={Boolean(errors.subject)}
            />
          </Field>
        </div>

        <Field label="Message" error={errors.message}>
          <textarea
            rows={4}
            value={data.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className={cn(fieldClasses("message"), "resize-none")}
            aria-invalid={Boolean(errors.message)}
          />
        </Field>

        <Button type="submit" icon={Send} loading={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-primary-900">{label}</span>
      {children}
      {error ? (
        <span className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </span>
      ) : null}
    </label>
  );
}
