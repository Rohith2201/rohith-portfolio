import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy — Rohith Juluru",
  description: "Privacy policy for rohith.xyz.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="site-shell min-h-screen bg-white px-6 py-10 text-[#17221d] lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs current="Privacy policy" />
        <article className="py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
            / Legal
          </p>
          <h1 className="mt-5 text-6xl tracking-[-.07em]">
            Privacy
            <br />
            <em className="font-serif font-normal">policy.</em>
          </h1>
          <p className="mt-8 text-sm text-[#17221d]/55">
            Last updated October 31, 2026
          </p>
          <div className="mt-16 flex flex-col gap-10 text-lg leading-8 text-[#17221d]/75">
            <p>
              This website is a personal portfolio operated by Rohith Juluru. I
              only collect information you choose to share through the contact
              form, such as your name, email address, and message.
            </p>
            <p>
              Your message is used only to respond to your enquiry. I do not
              sell, rent, or share your personal information for advertising.
              You can ask me to remove your message at any time by emailing
              hello@rohith.xyz.
            </p>
            <p>
              This site may use basic, privacy-conscious analytics to understand
              aggregate usage. External links are governed by the privacy
              policies of the services they lead to.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
