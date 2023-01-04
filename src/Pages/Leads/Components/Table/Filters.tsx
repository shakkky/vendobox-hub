import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  padding: 12px 0;
`;

/**
 * should these be in a grid layout?
 */
const SearchBar = styled.div`
  height: 46px;
  width: 50%;
  color: blue;
  border: 1px solid red;
`;

const OtherFilters = styled.div`
  height: 46px;
  width: 30%;
  color: blue;
  border: 1px solid red;
`;

const Filters = () => {
  return (
    <Wrapper>
      <OtherFilters>
        Chips that display currently applied filters and more options will be
        here
      </OtherFilters>
      <SearchBar>Search</SearchBar>
    </Wrapper>
  );
};

Filters.propTypes = {
  // lead: PropTypes.object.isRequired,
};

export default Filters;
