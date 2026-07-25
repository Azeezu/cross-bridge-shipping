import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { SITE_CONFIG } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
