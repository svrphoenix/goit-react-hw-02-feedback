import { FeedbackSection } from "./Section.styled";

export const Section = ({ title, children }) => (
  <FeedbackSection>
    <h2>{title}</h2>{children}
  </FeedbackSection>
);
