"use client";

import TeamMemberCard from "@/components/ui/TeamMemberCard";
import ScrollRevealCard from "@/components/ui/ScrollRevealCard";
import { teamMembers } from "@/lib/team-data";

export default function TeamGrid() {
  return (
    <div className="grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
      {teamMembers.map((member, i) => (
        <div key={member.name} className={i % 2 === 1 ? "md:mt-12" : ""}>
          <ScrollRevealCard index={i}>
            <TeamMemberCard member={member} index={i} />
          </ScrollRevealCard>
        </div>
      ))}
    </div>
  );
}
