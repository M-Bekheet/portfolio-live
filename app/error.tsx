"use client";

import { useRouter } from "next/navigation";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: VoidFunction;
}) => {
  const router = useRouter();
  return (
    <>
      <style jsx>
        {`
          .error-page__content {
            padding-top: 30vh;
          }
        `}
      </style>
      <div className="error-page__content">
        <h2>Something went wrong!</h2>
        <button
          className="button colored"
          onClick={
            // Attempt to recover by trying to re-render the invoices route
            () => router.push("/")
          }
        >
          Go Home
        </button>
      </div>
    </>
  );
};
export default Error;
