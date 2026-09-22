import {
  CONTACT_EMAIL,
  HAS_RESUME,
  RESUME_URL,
} from "@/app/utils/constants/site";

type ResumeActionProps = {
  variant?: "primary" | "secondary" | "ghost";
};

// Renders "Download résumé" when NEXT_PUBLIC_RESUME_URL is configured, and a
// truthful "Request résumé" mail action when it is not. See site.ts for setup.
export function ResumeAction({ variant = "primary" }: ResumeActionProps) {
  const className = `btn btn--${variant}`;

  if (HAS_RESUME) {
    return (
      <a className={className} href={RESUME_URL} download rel="noopener">
        Download résumé
      </a>
    );
  }

  const subject = encodeURIComponent("Résumé request — Mahmoud Bekheet");
  const body = encodeURIComponent(
    "Hi Mahmoud,\n\nI would like to receive your résumé.\n\nRole / company: \n"
  );

  return (
    <a
      className={className}
      href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
    >
      Request résumé
    </a>
  );
}
