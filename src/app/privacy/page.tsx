import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Nova",
  description:
    "Read the Privacy Policy for Nova, a sobriety companion designed to support people who want to quit drinking or cut back.",
};

export default function PrivacyPage() {
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
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.updated}>Last updated: June 19, 2026</p>
          </header>

          <div className={styles.introduction}>
            <p>
              Nova was built to be a calm, supportive place for people who are
              choosing to change their relationship with alcohol. Your privacy
              matters to us, especially because the information you may choose
              to share can be personal.
            </p>
          </div>

          <div className={styles.sections}>
            <PolicySection title="Information we collect">
              We may collect information you provide when creating or using
              your account, including your email address, display name,
              username, profile details, sober date, recovery progress,
              milestones, medals, check-ins, reflections, journal entries,
              profile photos, progress photos, supporter relationships, Nova
              Club participation, coach conversations, and other content you
              choose to add to Nova.
            </PolicySection>

            <PolicySection title="How we use your information">
              We use your information to operate Nova, personalize your
              experience, track your progress, save your profile, support
              account login, provide app features, improve reliability, and
              help you access your information across devices.
            </PolicySection>

            <PolicySection title="Photos and media">
              If you upload profile photos, progress photos, or other images,
              those files may be stored so they can appear in the app and remain
              available to you. Only upload content you are comfortable storing
              in Nova.
            </PolicySection>

            <PolicySection title="Coach, journal, and support features">
              If you use Nova&apos;s coach, journal, reflections, check-in, Nova
              Club, or support features, the content you enter may be stored or
              processed to provide those features. Some coach interactions may
              be processed using trusted service providers that help power
              Nova&apos;s support experiences. Avoid entering sensitive
              information that you do not want associated with your account.
            </PolicySection>

            <PolicySection title="Third-party services">
              Nova uses trusted third-party services to operate the app. These
              may include services for authentication, database storage, file
              storage, and sign-in options such as Google or Apple. These
              providers may process information as needed to provide their
              services.
            </PolicySection>

            <PolicySection title="Community and support features">
              Some parts of Nova allow users to support, encourage, or connect
              with others. Information such as your display name, username,
              profile photo, recovery milestones, supporter relationships, Nova
              Club participation, and other profile information you choose to
              share may be visible to other users depending on the feature and
              your settings.
            </PolicySection>

            <PolicySection title="Account deletion">
              You may request or use available in-app tools to delete your
              account. When your account is deleted, Nova will work to remove
              or disconnect your profile and related app data, except where we
              are required or permitted to retain information for legal,
              security, or operational reasons.
            </PolicySection>

            <PolicySection title="Data security">
              We use reasonable technical and organizational measures to
              protect your information. However, no method of transmission or
              storage is perfectly secure, and we cannot guarantee absolute
              security.
            </PolicySection>

            <PolicySection title="Not medical or emergency care">
              Nova is not a medical provider, therapy service, crisis service,
              or emergency response tool. If you are in immediate danger,
              experiencing a medical emergency, or thinking about harming
              yourself or someone else, call emergency services or a local
              crisis hotline immediately.
            </PolicySection>

            <PolicySection title="Children">
              Nova is not intended for children under 13. We do not knowingly
              collect personal information from children under 13. If you
              believe a child under 13 has provided personal information to
              Nova, please contact us so we can take appropriate action.
            </PolicySection>

            <PolicySection title="Changes to this policy">
              We may update this Privacy Policy from time to time. If we make
              meaningful changes, we will update the “Last updated” date and may
              provide additional notice where appropriate.
            </PolicySection>

            <PolicySection title="Contact">
              If you have questions about this Privacy Policy or your data,
              contact us at{" "}
              <a href="mailto:startwithnova@gmail.com">
                startwithnova@gmail.com
              </a>
              .
            </PolicySection>
          </div>
        </article>
      </Container>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.policySection}>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}