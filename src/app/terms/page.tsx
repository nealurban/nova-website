import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | Nova",
  description:
    "Read the Terms of Service for Nova, a sobriety companion designed to support people who want to quit drinking or cut back.",
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <Container>
        <a href="/" className={styles.backLink}>
          <span aria-hidden="true">←</span>
          Back to Nova
        </a>

        <article className={styles.card}>
          <a href="/" className={styles.logo} aria-label="Nova home">
            <Image
              src="/logos/nova-logo-dark.svg"
              alt=""
              width={170}
              height={40}
              priority
            />
          </a>

          <header className={styles.header}>
            <p className={styles.eyebrow}>NOVA LEGAL</p>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.updated}>Last updated: June 19, 2026</p>
          </header>

          <div className={styles.introduction}>
            <p>
              Welcome to Nova. By creating an account or using the app, you
              agree to these Terms of Service. Please read them carefully.
            </p>
          </div>

          <div className={styles.sections}>
            <TermsSection title="Using Nova">
              Nova is designed to support people who are working to change
              their relationship with alcohol. You agree to use the app
              responsibly and in accordance with all applicable laws and
              regulations.
            </TermsSection>

            <TermsSection title="Not medical or emergency care">
              Nova is not a medical provider, therapy service, crisis service,
              or emergency response tool. The app does not provide medical
              advice, diagnosis, treatment, therapy, detox support, crisis
              intervention, or emergency response.
            </TermsSection>

            <TermsSection title="Emergency situations">
              If you are experiencing a medical emergency, mental health
              crisis, or thoughts of harming yourself or others, contact
              emergency services or a qualified crisis resource immediately.
            </TermsSection>

            <TermsSection title="Accounts and access">
              You are responsible for maintaining the security of your account
              and login credentials. You agree not to share your account or
              impersonate another person.
            </TermsSection>

            <TermsSection title="User content">
              You retain ownership of content you upload or create within Nova,
              including profile information, journal entries, reflections,
              photos, Nova Club posts or activity, supporter interactions, and
              other submissions. By using Nova, you grant Nova permission to
              store, process, display, and use that content as needed to
              operate, provide, maintain, and improve the app.
            </TermsSection>

            <TermsSection title="Community guidelines">
              Nova is intended to be a respectful, supportive environment. You
              agree not to harass, abuse, threaten, exploit, shame, bully,
              impersonate, or harm other users. You also agree not to post
              content that promotes violence, self-harm, illegal activity,
              hate, harassment, or unsafe behavior. Nova may remove content or
              limit access to community features if these standards are
              violated.
            </TermsSection>

            <TermsSection title="Support and shared experiences">
              Nova may allow users to support, encourage, or connect with one
              another. Any content shared by users reflects their personal
              experience only and should not be treated as medical, clinical,
              legal, or professional advice.
            </TermsSection>

            <TermsSection title="Availability">
              We may update, improve, modify, suspend, or discontinue parts of
              Nova at any time without guaranteeing uninterrupted availability.
            </TermsSection>

            <TermsSection title="Termination">
              We reserve the right to suspend or terminate accounts that
              violate these Terms or misuse the platform.
            </TermsSection>

            <TermsSection title="Limitation of liability">
              Nova is provided “as is” without warranties of any kind. To the
              maximum extent permitted by law, Nova and its creators are not
              liable for indirect, incidental, consequential, or special
              damages arising from the use of the app.
            </TermsSection>

            <TermsSection title="Changes to these terms">
              We may update these Terms from time to time. Continued use of Nova
              after changes become effective means you accept the updated
              Terms.
            </TermsSection>

            <TermsSection title="Contact">
              Questions about these Terms may be sent to{" "}
              <a href="mailto:support@novarecoveryapp.com">
  support@novarecoveryapp.com
</a>
              .
            </TermsSection>
          </div>
        </article>
      </Container>
    </main>
  );
}

function TermsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.termsSection}>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}