import { List, FeedbackButton } from "./FeedbackOptions.styled";
import { FEEDBACK_OPTIONS } from "constants/optionsName";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <List>
    {options.map((item, idx) => (
      <li key={idx}>
        <FeedbackButton type="button" onClick={() => onLeaveFeedback(item)}>
          {FEEDBACK_OPTIONS[item]}
        </FeedbackButton>
      </li>
    ))}
  </List>
);
