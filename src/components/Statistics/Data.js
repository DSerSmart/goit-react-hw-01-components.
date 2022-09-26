import PropTypes from 'prop-types';
import { Statlist, Item } from './Data.styled';
export function Data({ data: { label, percentage } }) {
  return (
    <Statlist>
      <Item>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </Item>
    </Statlist>
  );
}
Data.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
