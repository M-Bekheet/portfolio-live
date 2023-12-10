import { useFormStatus } from "react-dom";
import styles from "./contact.module.scss";
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={styles.submit + " button colored"}
      disabled={pending}
    >
      Request a quote
    </button>
  );
};
export default SubmitButton;
