import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  GitBranch,
  GitFork,
  GitPullRequest,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Code — Rohith Juluru",
  description:
    "GitHub contributions, coding activity, and developer stats for Rohith Juluru.",
  alternates: { canonical: "/code" },
};

type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

type GitHubPullRequest = {
  title: string;
  html_url: string;
  repository_url: string;
  closed_at: string | null;
};

async function getGitHubStats() {
  try {
    const [reposResponse, mergedPrResponse, contributionsResponse] = await Promise.all([
      fetch(
        "https://api.github.com/users/Rohith2201/repos?per_page=100&type=owner",
        {
          headers: { Accept: "application/vnd.github+json" },
          next: { revalidate: 3600 },
        },
      ),
      fetch(
        "https://api.github.com/search/issues?q=author%3ARohith2201+type%3Apr+is%3Amerged&sort=updated&order=desc&per_page=5",
        {
          headers: { Accept: "application/vnd.github+json" },
          next: { revalidate: 3600 },
        },
      ).catch(() => null),
      fetch("https://github.com/users/Rohith2201/contributions", {
        headers: { "Accept-Language": "en-US,en;q=0.9" },
        next: { revalidate: 3600 },
      }).catch(() => null),
    ]);

    if (!reposResponse.ok) return null;

    const repos = (await reposResponse.json()) as GitHubRepo[];
    const mergedPrData = mergedPrResponse?.ok
      ? ((await mergedPrResponse.json()) as {
          total_count: number;
          items: GitHubPullRequest[];
        })
      : null;
    const contributionHtml = contributionsResponse?.ok
      ? await contributionsResponse.text()
      : "";
    const contributionText = contributionHtml
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;|&#160;/g, " ");
    const contributionMatch = contributionText.match(
      /([\d,]+)\s+contributions in the last year/i,
    );
    const languages = new Map<string, number>();

    for (const repo of repos) {
      if (repo.language) {
        languages.set(repo.language, (languages.get(repo.language) ?? 0) + 1);
      }
    }

    const pinnedNames = [
      { key: "code365", title: "Code 365" },
      { key: "smartmart", title: "Smart Mart" },
      { key: "dronalms", title: "Drona LMS" },
    ];
    const pinnedRepositories = pinnedNames.flatMap(({ key, title }) => {
      const repo = repos.find(
        (candidate) => candidate.name.toLowerCase().replace(/[^a-z0-9]/g, "") === key,
      );
      return repo
        ? [{
            title,
            href: repo.html_url,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
          }]
        : [];
    });

    return {
      repositories: repos.length,
      pinnedRepositories,
      stars: repos.reduce((total, repo) => total + repo.stargazers_count, 0),
      forks: repos.reduce((total, repo) => total + repo.forks_count, 0),
      mergedPullRequests: mergedPrData?.total_count ?? null,
      recentPullRequests: (mergedPrData?.items ?? []).map((pr) => ({
        title: pr.title,
        href: pr.html_url,
        repository: pr.repository_url.split("/").slice(-2).join("/"),
        mergedAt: pr.closed_at,
      })),
      totalContributions: contributionMatch
        ? Number(contributionMatch[1].replaceAll(",", ""))
        : null,
      refreshedAt: reposResponse.headers.get("date"),
      languages: [...languages.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => ({
          name,
          percentage: Math.round((count / repos.length) * 100),
        })),
    };
  } catch {
    return null;
  }
}

export default async function CodePage() {
  const githubStats = await getGitHubStats();

  return (
    <main className="site-shell min-h-screen bg-white px-6 pb-24 pt-32 text-[#17221d] lg:px-10 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-10 border-b border-[#17221d]/15 pb-16 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-20">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
              / The practice
            </p>
            <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.95] tracking-[-.07em]">
              Code<span className="text-[#e25b38]">.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#17221d]/65">
              A little window into what I build, what I explore, and the work
              that happens between shipped projects.
            </p>
          </div>
          <a
            href="https://github.com/Rohith2201"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#17221d] px-5 py-3 text-sm text-[#f7f7f2] transition-colors hover:bg-[#e25b38]"
          >
            <GitFork size={17} /> GitHub profile <ArrowUpRight size={15} />
          </a>
        </section>

        <section className="py-14 lg:py-20" aria-labelledby="activity-heading">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
                01 / Consistency
              </p>
              <h2 id="activity-heading" className="text-3xl tracking-[-.04em] lg:text-4xl">
                Contribution activity
              </h2>
            </div>
            <span className="font-mono text-xs text-[#17221d]/50">Last 12 months</span>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#17221d]/15 bg-[#f7f7f2]/60 p-5 sm:p-8">
            <div className="overflow-x-auto pb-2">
              <div className="flex min-w-[680px] gap-2">
                <div className="flex flex-col justify-between py-1 font-mono text-[10px] text-[#17221d]/45">
                  <span>Mon</span><span>Wed</span><span>Fri</span>
                </div>
                <img
                  src="https://ghchart.rshah.org/e25b38/Rohith2201"
                  alt="GitHub contribution activity for Rohith2201 over the past year"
                  className="h-auto min-w-[680px] flex-1"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-4 border-t border-[#17221d]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#17221d]/60 dark:text-white/60">
                {githubStats?.totalContributions != null && (
                  <span>{githubStats.totalContributions.toLocaleString("en-IN")} contributions in the last year</span>
                )}
                {githubStats?.refreshedAt && (
                  <span className="font-mono text-[10px] uppercase tracking-wider">
                    Updated {new Date(githubStats.refreshedAt).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" })} IST
                  </span>
                )}
              </div>
              <a href="https://github.com/Rohith2201" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-mono text-xs text-[#17221d]/60 transition-colors hover:text-[#e25b38]">
                View on GitHub <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-[#17221d]/15 py-14 lg:py-20" aria-labelledby="stats-heading">
          <div className="mb-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
              02 / By the numbers
            </p>
            <h2 id="stats-heading" className="text-3xl tracking-[-.04em] lg:text-4xl">
              Coding stats
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="flex h-full flex-col rounded-3xl border border-[#17221d]/15 p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-wider text-[#17221d]/55">GitHub stats</p>
                <GitBranch size={18} strokeWidth={1.5} className="text-[#e25b38]" />
              </div>
              {githubStats ? (
                <div className="mt-8 flex flex-1 flex-col justify-between gap-8">
                  <div className="flex items-center gap-5 border-b border-[#17221d]/10 pb-8 dark:border-white/10">
                    <GitPullRequest size={32} strokeWidth={1.6} className="shrink-0 text-[#e25b38]" />
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p className="font-mono text-6xl tracking-[-.07em]">
                        {githubStats.mergedPullRequests ?? "—"}
                      </p>
                      <p className="text-sm text-[#17221d]/60 dark:text-white/60">merged pull requests</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Public repos", value: githubStats.repositories, icon: BookOpen },
                      { label: "Stars earned", value: githubStats.stars, icon: Star },
                      { label: "Forks", value: githubStats.forks, icon: GitFork },
                    ].map(({ label, value, icon: Icon }) => (
                      <div key={label} className="min-w-0">
                        <Icon size={21} className="mb-3 text-[#e25b38]" strokeWidth={1.8} />
                        <p className="font-mono text-3xl tracking-[-.05em]">{value}</p>
                        <p className="mt-1 text-xs text-[#17221d]/55 dark:text-white/55">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="mt-8 text-sm text-[#17221d]/60">
                  GitHub stats are temporarily unavailable. View the profile for current activity.
                </p>
              )}
            </article>

            <article className="rounded-3xl border border-[#17221d]/15 p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-wider text-[#17221d]/55">Top languages</p>
                <Code2 size={18} strokeWidth={1.5} className="text-[#e25b38]" />
              </div>
              {githubStats?.languages.length ? (
                <div className="mt-7 space-y-4">
                  {githubStats.languages.map((language) => (
                    <div key={language.name}>
                      <div className="mb-1.5 flex justify-between text-xs">
                        <span>{language.name}</span>
                        <span className="font-mono text-[#17221d]/55">{language.percentage}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-[#17221d]/10">
                        <div className="h-full rounded-full bg-[#e25b38]" style={{ width: `${language.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                  <p className="pt-1 text-xs text-[#17221d]/50">Share of public repositories by primary language</p>
                </div>
              ) : (
                <p className="mt-8 text-sm text-[#17221d]/60">
                  Language data is temporarily unavailable. View repositories on GitHub.
                </p>
              )}
            </article>
          </div>
        </section>

        <section className="border-t border-[#17221d]/15 py-14 lg:py-20" aria-labelledby="recent-prs-heading">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
                03 / Recent contributions
              </p>
              <h2 id="recent-prs-heading" className="text-3xl tracking-[-.04em] lg:text-4xl">
                Recently merged PRs
              </h2>
            </div>
            <a
              href="https://github.com/Rohith2201?tab=pullrequests"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b border-[#17221d]/40 pb-1 text-sm transition-colors hover:text-[#e25b38]"
            >
              All pull requests <ArrowUpRight size={15} />
            </a>
          </div>
          {githubStats?.recentPullRequests.length ? (
            <div className="divide-y divide-[#17221d]/15 border-y border-[#17221d]/15 dark:divide-white/10 dark:border-white/10">
              {githubStats.recentPullRequests.map((pr) => (
                <a
                  key={pr.href}
                  href={pr.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-3 py-5 transition-colors hover:text-[#e25b38] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="flex items-start gap-3">
                    <GitPullRequest size={18} className="mt-1 shrink-0 text-[#e25b38]" />
                    <span>
                      <span className="block text-lg tracking-[-.02em]">{pr.title}</span>
                      <span className="mt-1 block font-mono text-[10px] uppercase tracking-wider text-[#17221d]/50 dark:text-white/50">{pr.repository}</span>
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2 pl-8 font-mono text-xs text-[#17221d]/50 dark:text-white/50 sm:pl-0">
                    {pr.mergedAt ? new Date(pr.mergedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" }) : "Merged"}
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <p className="border-y border-[#17221d]/15 py-6 text-sm text-[#17221d]/60 dark:border-white/10 dark:text-white/60">
              Recent pull requests are temporarily unavailable. View activity on GitHub.
            </p>
          )}
        </section>

        <section className="border-t border-[#17221d]/15 py-14 lg:py-20" aria-labelledby="pinned-repos-heading">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
                04 / Selected repositories
              </p>
              <h2 id="pinned-repos-heading" className="text-3xl tracking-[-.04em] lg:text-4xl">
                Pinned on GitHub
              </h2>
            </div>
            <a
              href="https://github.com/Rohith2201?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b border-[#17221d]/40 pb-1 text-sm transition-colors hover:text-[#e25b38]"
            >
              All repositories <ArrowUpRight size={15} />
            </a>
          </div>
          {githubStats?.pinnedRepositories.length ? (
            <div className="grid gap-4 md:grid-cols-3">
              {githubStats.pinnedRepositories.map((repo) => (
                <a
                  key={repo.href}
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-56 flex-col justify-between rounded-3xl border border-[#17221d]/15 p-6 transition-colors hover:border-[#e25b38]/60 dark:border-white/15 lg:p-7"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <Code2 size={20} strokeWidth={1.5} className="text-[#e25b38]" />
                      <ArrowUpRight size={16} className="text-[#17221d]/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-white/45" />
                    </div>
                    <h3 className="text-2xl tracking-[-.04em] transition-colors group-hover:text-[#e25b38]">
                      {repo.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#17221d]/60 dark:text-white/60">
                      {repo.description || "Explore the source code on GitHub."}
                    </p>
                  </div>
                  <div className="mt-7 flex items-center gap-5 border-t border-[#17221d]/10 pt-4 font-mono text-[10px] uppercase tracking-wider text-[#17221d]/55 dark:border-white/10 dark:text-white/55">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="inline-flex items-center gap-1"><Star size={13} className="text-[#e25b38]" /> {repo.stars}</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="border-y border-[#17221d]/15 py-6 text-sm text-[#17221d]/60 dark:border-white/10 dark:text-white/60">
              Pinned repositories are temporarily unavailable. Browse them on GitHub.
            </p>
          )}
        </section>

        <section className="border-t border-[#17221d]/15 py-14 lg:py-20" aria-labelledby="projects-heading">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#e25b38]">
                05 / Open source
              </p>
              <h2 id="projects-heading" className="text-3xl tracking-[-.04em] lg:text-4xl">
                Find me on GitHub
              </h2>
              <p className="mt-3 max-w-xl text-[#17221d]/60">
                Browse repositories, experiments, and the code behind selected projects.
              </p>
            </div>
            <Link
              href="/works"
              className="inline-flex w-fit items-center gap-2 border-b border-[#17221d]/40 pb-1 text-sm transition-colors hover:text-[#e25b38]"
            >
              Explore selected work <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
