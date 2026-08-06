import Image from "next/image";
import type { ClientLogo } from "@/lib/content";

interface ClientsMarqueeProps {
  clients: ClientLogo[];
}

export function ClientsMarquee({ clients }: ClientsMarqueeProps) {
  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-marquee-slow gap-12 pause-on-hover">
        {[0, 1].map((track) => (
          <div key={track} className="flex shrink-0 items-center gap-12" aria-hidden={track === 1}>
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex h-16 w-36 shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={56}
                  className="h-auto max-h-14 w-auto max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
