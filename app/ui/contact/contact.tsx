"use client";
import { useEffect, useRef } from "react";

import SubmitButton from "@/app/ui/contact/SubmitButton";
import styles from "@/app/ui/contact/contact.module.scss";
import { sendEmailAction } from "@/app/utils/actions";
import type { SendEmailState } from "@/app/utils/lib/types";
import { useFormState } from "react-dom";

const successMsg =
  "Thank you. Quote has been sent successfully. I will get in touch soon.";

const initialState = {
  errorMessage: "",
  errors: {},
  success: false,
} satisfies SendEmailState;

const Contact = () => {
  const [state, dispatch] = useFormState(sendEmailAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) formRef?.current?.reset();
  }, [state?.success]);

  return (
    <section className={styles.contact}>
      <h1 className="section-title">Contact</h1>
      <address className={styles.note}>
        *Send me a direct email:{" "}
        <a href={`mailto:${process.env.MY_PUBLIC_EMAIL}`} rel="noopener">
          {process.env.NEXT_PUBLIC_MY_PUBLIC_EMAIL}
        </a>{" "}
        or fill the form.
      </address>
      <form name="contact" action={dispatch} ref={formRef}>
        {/* Description */}
        <label htmlFor="project-desc">Project brief description</label>
        <textarea
          name="description"
          id="project-desc"
          className={styles.description}
          rows={6}
          placeholder="Project Type, Target customer, timeline, estimate etc"
          required
        />
        <p
          className={`${styles.error} ${
            state?.errors?.description ? "" : " hidden"
          } `}
        >
          {state?.errors?.description || null}
        </p>
        <label htmlFor="about_you">About You</label>
        {/* Name */}
        <div className={styles.formGroup}>
          <div className={styles.formControl}>
            <input
              name="name"
              type="text"
              id="about_you"
              placeholder="Full Name"
              required
            />
            <p
              className={`${styles.error} ${
                state?.errors?.name ? "" : " hidden"
              } `}
            >
              {state?.errors?.name || null}
            </p>
          </div>
          <div className={styles.formControl}>
            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />
            <p
              className={`${styles.error} ${
                state?.errors?.email ? "" : " hidden"
              } `}
            >
              {state?.errors?.email || null}
            </p>
          </div>
          <div className={styles.formControl}>
            {/* Company */}
            <input
              type="text"
              name="company"
              placeholder="Company Name (optional)"
            />
          </div>
          <div className={styles.formControl}>
            {/* Position */}
            <input
              type="text"
              name="position"
              placeholder="Position (optional)"
            />
            <p
              className={`${styles.error} ${
                state?.errors?.position ? "" : " hidden"
              } `}
            >
              {state?.errors?.position || null}
            </p>
          </div>
        </div>
        <SubmitButton />
      </form>
      {/* Fallback */}
      {state?.success ? (
        <p className={`${styles.success}`}>{successMsg}</p>
      ) : state?.errorMessage ? (
        <p
          className={`${styles.error} ${
            state?.errorMessage && !state?.success ? "" : " hidden"
          } `}
        >
          {state?.errorMessage || null}
        </p>
      ) : null}
    </section>
  );
};

export default Contact;
