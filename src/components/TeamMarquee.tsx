import Image from "next/image";
import type { TeamMember } from "@/lib/detailPagesContent";

interface TeamMarqueeProps {
  members: TeamMember[];
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="group relative h-72 w-52 shrink-0 cursor-pointer [perspective:1200px]"
      tabIndex={0}
    >
      <div className="relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl bg-ink shadow-sm [backface-visibility:hidden]">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="208px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-sm font-semibold text-white">{member.name}</p>
            <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-white/60">
              {member.role}
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-5 text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <p className="text-sm font-semibold">{member.name}</p>
            <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-white/70">
              {member.role}
            </p>
            <div className="mt-3 h-px w-8 bg-white/40" />
            <p className="mt-3 text-xs leading-relaxed text-white/90">
              {member.bio}
            </p>
          </div>
          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white/40">
            <Image
              src={member.photo}
              alt=""
              width={36}
              height={36}
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TeamMarquee({ members }: TeamMarqueeProps) {
  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-marquee-slow gap-5 pause-on-hover py-2">
        {[0, 1].map((track) => (
          <div key={track} className="flex shrink-0 gap-5" aria-hidden={track === 1}>
            {members.map((member) => (
              <TeamCard key={`${track}-${member.name}`} member={member} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
