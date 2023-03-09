import PropTypes from 'prop-types';
import {
  StatisticsItemStyle,
  StatisticsList,
  StatisticsSection,
  StatisticsTitle,
} from './Statistics.styled';
import { getRandomRGBColor } from '../function';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatisticsItemStyle
      className="item"
      style={{ backgroundColor: getRandomRGBColor() }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticsItemStyle>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export const Statistics = ({ title = '', stats = [] }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem key={stat.id} {...stat} />
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
