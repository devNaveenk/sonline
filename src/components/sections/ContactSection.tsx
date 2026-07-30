import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import ContactForm from "@/components/ContactForm";
import { companyInfo } from "@/lib/content";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ink py-14 text-white lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-widest text-primary">
            READY TO BEGIN YOUR TRANSFORMATION JOURNEY?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Talk to Us
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
            {companyInfo.aboutParagraph}
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              <div>
                <p className="text-xs tracking-wide text-white/50">DIRECT INQUIRY</p>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm font-semibold text-white hover:text-primary"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
              <div>
                <p className="text-xs tracking-wide text-white/50">HEADQUARTERS</p>
                <p className="text-sm font-semibold text-white">{companyInfo.hq}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LinkedinIcon className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs tracking-wide text-white/50">FOLLOW US</p>
                <a
                  href={companyInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-primary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
