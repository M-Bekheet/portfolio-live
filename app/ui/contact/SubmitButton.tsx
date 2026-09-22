import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn--primary" disabled={pending}>
      {pending ? "Sending..." : "Send message"}
    </button>
  );
};

export default SubmitButton;
