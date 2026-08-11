"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./FAQ.module.css";

const questions = [
  {
    question: "What is Nova?",
    answer:
      "Nova is a sobriety companion designed to support people who want to quit drinking or cut back. It brings encouragement, reflection, progress tracking, practical tools, and community into one calm place.",
  },
  {
    question: "Is Nova free?",
    answer:
      "Nova includes free features, with additional tools available through Nova Plus. You will always be able to review the current options before beginning a subscription.",
  },
  {
    question: "What is Nova Plus?",
    answer:
      "Nova Plus unlocks the full Nova experience, including Nova Coach, Situational Help, deeper recovery insights, expanded progress tools, and full access to the Nova Club membership experience.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "Eligible subscriptions include a free trial before billing begins. Apple will show the exact trial length, renewal date, and price before you confirm.",
  },
  {
    question: "Can I change or cancel my subscription?",
    answer:
      "Yes. Nova subscriptions are managed through your Apple ID and can be changed or canceled from the Subscriptions section of your device settings.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can permanently delete your account at any time from the bottom of your Profile page in Nova. If you no longer have access to the app, use the contact form below and we'll be happy to help.",
  },
  {
    question: "Is my information private and secure?",
    answer:
      "Your privacy matters to us. Nova uses your information only to provide and improve the experience, and you can review the full details in our Privacy Policy.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        setStatusMessage(
          "Something went wrong. Please try again."
        );
        return;
      }

      form.reset();
      setStatusMessage(
        "Message sent. We'll be in touch soon."
      );
    } catch {
      setStatusMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="faq" className={styles.section}>
      <Container>
        <FadeIn>
          <div className={styles.grid}>
            <div className={styles.faqPanel}>
              <p className={styles.eyebrow}>COMMON QUESTIONS</p>

              <h2 className={styles.title}>
                Find the answers you need.
              </h2>

              <div className={styles.accordion}>
                {questions.map((item, index) => {
                  const isOpen = openIndex === index;
                  const answerId = `faq-answer-${index}`;
                  const buttonId = `faq-question-${index}`;

                  return (
                    <div
                      className={styles.item}
                      key={item.question}
                    >
                      <h3 className={styles.questionHeading}>
                        <button
                          id={buttonId}
                          type="button"
                          className={styles.questionButton}
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() =>
                            setOpenIndex(
                              isOpen ? null : index
                            )
                          }
                        >
                          <span>{item.question}</span>

                          <span
                            className={styles.symbol}
                            aria-hidden="true"
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                      </h3>

                      {isOpen ? (
                        <div
                          id={answerId}
                          className={styles.answer}
                          role="region"
                          aria-labelledby={buttonId}
                        >
                          <p>{item.answer}</p>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              id="contact"
              className={styles.contactPanel}
            >
              <p className={styles.eyebrow}>
                STILL NEED HELP?
              </p>

              <h2 className={styles.title}>
                Send us a message.
              </h2>

              <p className={styles.contactIntro}>
                Didn&apos;t find what you were looking for?
                Send us a message and we&apos;ll get back to
                you.
              </p>

              <form
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <div className={styles.field}>
                  <label htmlFor="support-name">
                    Name
                  </label>
                  <input
                    id="support-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="support-email">
                    Email
                  </label>
                  <input
                    id="support-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="support-subject">
                    Subject
                  </label>
                  <select
                    id="support-subject"
                    name="subject"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Choose a subject
                    </option>
                    <option value="account">
                      Account help
                    </option>
                    <option value="subscription">
                      Subscription or billing
                    </option>
                    <option value="technical">
                      Technical issue
                    </option>
                    <option value="privacy">
                      Privacy question
                    </option>
                    <option value="delete-account">
                      Delete account
                    </option>
                    <option value="general">
                      General question
                    </option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="support-message">
                    Message
                  </label>
                  <textarea
                    id="support-message"
                    name="message"
                    rows={7}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSending}
                >
                  {isSending
                    ? "Sending..."
                    : "Send message"}
                </button>

                {statusMessage ? (
                  <p
                    className={styles.contactIntro}
                    role="status"
                    aria-live="polite"
                  >
                    {statusMessage}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}