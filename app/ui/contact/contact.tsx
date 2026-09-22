"use client";

import { useActionState } from "react";

import SubmitButton from "@/app/ui/contact/SubmitButton";
import styles from "@/app/ui/contact/contact.module.scss";
import { sendEmailAction } from "@/app/utils/actions";
import { SITE, SOCIAL } from "@/app/utils/constants/site";
import { initialState } from "./utils";

const successMsg =
  "Thanks. Your message is on its way, and I will reply as soon as I can.";

const Contact = () => {
  const [state, dispatch] = useActionState(sendEmailAction, initialState);

  const errors = state?.errors as
    | Record<string, string[] | undefined>
    | undefined;

  return (
    <section className={`container ${styles.contact}`}>
      <header className={styles.head}>
        <p className="section-label">Contact</p>
        <h1 className="section-title">Start a conversation</h1>
        <p className="lede">
          I am {SITE.name.split(" ")[0]}, a senior front-end developer based in{" "}
          {SITE.location}. {SITE.relocation} Send a note about the role or the
          team and I will reply.
        </p>
        <p className={styles.direct}>
          Prefer email? Write to{" "}
          <a className="link" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>{" "}
          or find me on{" "}
          <a
            className="link"
            href={SOCIAL.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            className="link"
            href={SOCIAL.github.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </header>

      <form action={dispatch} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <p className="hint">
            The role, the team, and anything that helps me reply usefully.
          </p>
          <textarea
            id="message"
            name="description"
            className="textarea"
            rows={6}
            placeholder="Senior front-end role on the platform team, remote, starting Q4..."
            required
            defaultValue={state?.data?.description}
            aria-invalid={errors?.description ? true : undefined}
            aria-describedby={errors?.description ? "message-error" : undefined}
          />
          {errors?.description ? (
            <p id="message-error" className={styles.error} role="alert">
              {errors.description[0]}
            </p>
          ) : null}
        </div>

        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="input"
              autoComplete="name"
              required
              defaultValue={state?.data?.name}
              aria-invalid={errors?.name ? true : undefined}
              aria-describedby={errors?.name ? "name-error" : undefined}
            />
            {errors?.name ? (
              <p id="name-error" className={styles.error} role="alert">
                {errors.name[0]}
              </p>
            ) : null}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="input"
              autoComplete="email"
              required
              defaultValue={state?.data?.email}
              aria-invalid={errors?.email ? true : undefined}
              aria-describedby={errors?.email ? "email-error" : undefined}
            />
            {errors?.email ? (
              <p id="email-error" className={styles.error} role="alert">
                {errors.email[0]}
              </p>
            ) : null}
          </div>

          <div className={styles.field}>
            <label htmlFor="company">Company (optional)</label>
            <input
              id="company"
              name="company"
              type="text"
              className="input"
              autoComplete="organization"
              defaultValue={state?.data?.company}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="position">Your role or title (optional)</label>
            <input
              id="position"
              name="position"
              type="text"
              className="input"
              autoComplete="organization-title"
              defaultValue={state?.data?.position}
            />
          </div>
        </div>

        <SubmitButton />
      </form>

      {state?.success ? (
        <p className={styles.success} role="status">
          {successMsg}
        </p>
      ) : null}

      {!state?.success && state?.errorMessage ? (
        <p className={styles.formError} role="alert">
          {state.errorMessage}
        </p>
      ) : null}
    </section>
  );
};

export default Contact;
