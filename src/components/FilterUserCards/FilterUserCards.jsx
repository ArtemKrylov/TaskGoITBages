import React from 'react';
import PropTypes from 'prop-types';
import { FILTER_OPTIONS } from 'utils/constants/filterOptions';

const FilterUserCards = ({ onFilterChange, selectedFilter }) => {
  function onFilterUserCardsChange(event) {
    onFilterChange(event.target.value);
  }
  return (
    <select
      name="filter"
      className="filterUserCards"
      onChange={onFilterUserCardsChange}
      defaultValue={selectedFilter}
    >
      <option value={FILTER_OPTIONS.all}>{FILTER_OPTIONS.all}</option>

      <option value={FILTER_OPTIONS.follow}>{FILTER_OPTIONS.follow}</option>

      <option value={FILTER_OPTIONS.followings}>
        {FILTER_OPTIONS.followings}
      </option>
    </select>
  );
};

FilterUserCards.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired,
};

export default FilterUserCards;
