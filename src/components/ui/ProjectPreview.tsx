import type { ReactNode } from "react";
import type { ProjectPreviewType } from "../../data/projects";

interface ProjectPreviewProps {
  type: ProjectPreviewType;
  number: string;
  className?: string;
}

function DashboardMockup() {
  return (
    <div className="flex h-full gap-2 p-3">
      <div className="w-1/4 space-y-2">
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-3/4 rounded bg-white/5" />
        <div className="h-2 w-full rounded bg-white/5" />
        <div className="h-2 w-2/3 rounded bg-cyan-500/20" />
        <div className="h-2 w-full rounded bg-white/5" />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex gap-2">
          <div className="h-10 flex-1 rounded-lg bg-white/5" />
          <div className="h-10 w-10 rounded-lg bg-cyan-500/20" />
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          <div className="rounded-lg bg-emerald-500/10 p-2">
            <div className="h-1.5 w-8 rounded bg-emerald-400/40" />
            <div className="mt-2 h-4 w-12 rounded bg-white/10" />
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="h-1.5 w-8 rounded bg-white/10" />
            <div className="mt-2 h-4 w-12 rounded bg-white/10" />
          </div>
          <div className="rounded-lg bg-purple-500/10 p-2">
            <div className="h-1.5 w-8 rounded bg-purple-400/40" />
            <div className="mt-2 h-4 w-12 rounded bg-white/10" />
          </div>
        </div>
        <div className="h-16 rounded-lg bg-white/[0.03]">
          <div className="flex h-full items-end gap-1 px-2 pb-2">
            {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500/30 to-cyan-500/10"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="grid h-full grid-cols-2 gap-2 p-3">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg bg-white/[0.04] p-2">
          <div className="mb-2 aspect-square rounded bg-gradient-to-br from-emerald-500/20 to-transparent" />
          <div className="h-1.5 w-3/4 rounded bg-white/10" />
          <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/5" />
          <div className="mt-2 h-4 w-10 rounded bg-emerald-500/20" />
        </div>
      ))}
    </div>
  );
}

function AutomationMockup() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-4">
      {["Trigger", "Process", "Export"].map((step, i) => (
        <div key={step} className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 font-mono text-[10px] text-purple-300">
            {i + 1}
          </div>
          <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2">
            <div className="h-1.5 w-16 rounded bg-white/10" />
            <div className="mt-1.5 h-1 w-24 rounded bg-white/5" />
          </div>
          {i < 2 && (
            <div className="absolute left-[2.1rem] mt-10 h-4 w-px bg-purple-500/20" />
          )}
        </div>
      ))}
      <div className="mt-1 flex justify-center">
        <div className="rounded-full bg-emerald-500/20 px-3 py-1 font-mono text-[10px] text-emerald-400">
          ✓ automated
        </div>
      </div>
    </div>
  );
}

function TestingMockup() {
  return (
    <div className="space-y-2 p-3 font-mono text-[10px]">
      <div className="flex items-center gap-2 text-emerald-400">
        <span>✓</span>
        <span>auth/login.spec.ts</span>
        <span className="ml-auto text-text-muted">1.2s</span>
      </div>
      <div className="flex items-center gap-2 text-emerald-400">
        <span>✓</span>
        <span>checkout/payment.spec.ts</span>
        <span className="ml-auto text-text-muted">3.4s</span>
      </div>
      <div className="flex items-center gap-2 text-emerald-400">
        <span>✓</span>
        <span>api/users.spec.ts</span>
        <span className="ml-auto text-text-muted">0.8s</span>
      </div>
      <div className="flex items-center gap-2 text-amber-400">
        <span>○</span>
        <span>dashboard/widgets.spec.ts</span>
        <span className="ml-auto text-text-muted">running</span>
      </div>
      <div className="mt-3 rounded border border-border/50 bg-black/30 p-2">
        <div className="text-text-muted">12 passed · 0 failed · 1 running</div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
          <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
        </div>
      </div>
    </div>
  );
}

const mockups: Record<ProjectPreviewType, () => ReactNode> = {
  dashboard: DashboardMockup,
  ecommerce: EcommerceMockup,
  automation: AutomationMockup,
  testing: TestingMockup,
};

export function ProjectPreview({ type, number, className = "" }: ProjectPreviewProps) {
  const Mockup = mockups[type];

  return (
    <div className={`relative h-full min-h-[180px] overflow-hidden ${className}`}>
      <div className="absolute inset-0 dot-bg opacity-30" />
      <span className="absolute top-3 left-3 z-10 font-mono text-[10px] tracking-widest text-text-muted/60 uppercase">
        {number}
      </span>
      <div className="relative h-full pt-6">
        <Mockup />
      </div>
    </div>
  );
}
