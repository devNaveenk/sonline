import Image from "next/image";

const MARQUEE_TEXT = "Experience, Integrate, Visualize, Act.";
const REPEAT_COUNT = 6;

export function AnnouncementBar() {
  const items = Array.from({ length: REPEAT_COUNT }, (_, i) => i);

  return (
    <div className="overflow-hidden bg-primary text-on-primary">
      <div className="flex w-max animate-marquee py-2">
        {[0, 1].map((track) => (
          <div key={track} className="flex shrink-0 items-center" aria-hidden={track === 1}>
            {items.map((i) => (
              <span key={i} className="flex items-center whitespace-nowrap px-6 text-sm font-medium">
                {MARQUEE_TEXT}
                <span className="ml-6 inline-flex h-6 items-center rounded bg-white px-2">
                  <Image
                    src="/sonline_logo.png"
                    alt="Sonline"
                    width={80}
                    height={28}
                    className="h-4 w-auto"
                  />
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
