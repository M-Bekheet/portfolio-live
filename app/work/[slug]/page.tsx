import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ResumeAction } from "@/app/ui/actions/resume-action";
import { ArrowLeft, ArrowRight, ExternalLink } from "@/app/ui/icons";
import CanvasDemo from "@/app/ui/konva-demo/canvas-demo";
import { caseStudies, getCaseStudy } from "@/app/utils/constants/case-studies";
import { SITE } from "@/app/utils/constants/site";
import styles from "./case-study.module.scss";

type RouteParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case study not found" };
  }

  const title = `${study.name} — ${study.subtitle}`;

  return {
    title: `${study.name} case study`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      type: "article",
      title,
      description: study.summary,
      url: `/work/${study.slug}`,
      siteName: SITE.name,
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${study.name} case study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.summary,
      creator: SITE.twitter,
      images: ["/twitter-image"],
    },
  };
}

export default async function CaseStudyPage({ params }: RouteParams) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const others = caseStudies.filter((item) => item.slug !== study.slug);

  return (
    <article className={styles.article}>
      <div className="container">
        <Link href="/#work" className={styles.back}>
          <ArrowLeft />
          All selected work
        </Link>

        <header className={styles.head}>
          <p className="eyebrow">
            Case study {study.order} · {study.context}
          </p>
          <h1 className={styles.title}>{study.name}</h1>
          <p className="lede">{study.summary}</p>

          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Role</dt>
              <dd>{study.role}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Period</dt>
              <dd>{study.period}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Context</dt>
              <dd>{study.context}</dd>
            </div>
          </dl>

          <ul className={styles.stack} aria-label="Stack">
            {study.stack.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        </header>

        {study.confidentiality ? (
          <aside className={styles.notice} aria-label="Confidentiality note">
            <p className={styles.noticeLabel}>Confidentiality</p>
            <p>
              This work is covered by a confidentiality agreement. This case
              study describes only my role, the technologies, and the measured
              outcomes. It includes no client assets, data, or interface
              designs. The canvas below is an original demonstration built with
              synthetic data, not a reproduction of the product.
            </p>
          </aside>
        ) : null}

        <div className={styles.body}>
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>The problem</h2>
            <ul className={styles.list}>
              {study.constraints.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Approach</h2>
            <dl className={styles.approach}>
              {study.approach.map((item) => (
                <div key={item.title} className={styles.approachItem}>
                  <dt className={styles.approachTitle}>{item.title}</dt>
                  <dd className={styles.approachDetail}>{item.detail}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>My contribution</h2>
            <ul className={styles.list}>
              {study.contribution.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Outcome</h2>
            <ul className={styles.metrics}>
              {study.metrics.map((metric) => (
                <li key={metric.label} className={styles.metric}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              {study.outcome.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {study.demo === "konva" ? (
          <section className={styles.demo} aria-label="Canvas demonstration">
            <h2 className={styles.blockTitle}>Illustrative technique</h2>
            <CanvasDemo />
          </section>
        ) : null}

        {study.demo === "screenshot" && study.image ? (
          <figure className={styles.shot}>
            <Image
              src={study.image}
              alt={study.imageAlt ?? `${study.name} interface`}
              width={1688}
              height={1826}
              sizes="(max-width: 768px) 100vw, 640px"
              className={styles.shotImg}
            />
            <figcaption>
              {study.name} interface, shown from the live public product.
            </figcaption>
          </figure>
        ) : null}

        {study.liveUrl ? (
          <p className={styles.live}>
            <a
              className="btn btn--secondary"
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {study.name}
              <ExternalLink />
            </a>
          </p>
        ) : null}

        <footer className={styles.foot}>
          <div>
            <p className="section-label">Next</p>
            <ul className={styles.others}>
              {others.map((item) => (
                <li key={item.slug}>
                  <Link href={`/work/${item.slug}`} className={styles.otherLink}>
                    {item.name}
                    <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.cta}>
            <p className={styles.ctaText}>
              Hiring for a senior front-end role? I would be glad to talk.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn--primary">
                Contact
              </Link>
              <ResumeAction variant="secondary" />
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
