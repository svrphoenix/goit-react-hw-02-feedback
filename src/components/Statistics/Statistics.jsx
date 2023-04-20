import { FEEDBACK_OPTIONS } from 'constants/optionsName';
import { Container, Title, List } from './Statistics.styled';

export const Statistics = ({ feedbacks, total, positivePercentage }) => (
  <Container>
    <Title>Statistics</Title>
    <List>
      {Object.keys(feedbacks).map((item, idx) => (
        <li key={idx}>
          <p>
            {FEEDBACK_OPTIONS[item]}: <span>{feedbacks[item]}</span>
          </p>
        </li>
      ))}
    </List>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}</p>
  </Container>
);
