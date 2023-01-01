import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { range } from 'lodash';

import {
  Wrapper,
  PageButton,
  ControlButton,
  MaxPage,
  MaxPageButton,
} from './styles';

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: 0,
  },
});

class CustomActionsComponent extends Component {
  handleBackButtonClick = event => {
    this.props.onPageChange(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onPageChange(event, this.props.page + 1);
  };

  handlePageButtonClick = (event, page) => {
    this.props.onPageChange(event, page);
  };

  render() {
    const {
      classes,
      count,
      page,
      rowsPerPage,
      theme,
      numberDisplayedPages,
    } = this.props;

    const max = rowsPerPage > 0 ? Math.ceil(count / rowsPerPage) : 0;
    const n = Math.floor((numberDisplayedPages - 1) / 2);
    const before = page - n > 0 ? n - 1 : page - 1;
    const after = numberDisplayedPages - 1 - before;
    const from = page - before;
    const to = page + after >= max ? max : page + after;
    const pages = range(from - 1, to);

    return (
      <Wrapper className={classes.root}>
        <ControlButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          variant="outlined"
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </ControlButton>
        <ControlButton
          onClick={this.handleNextButtonClick}
          variant="outlined"
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </ControlButton>

        {page + 1 > 5 && (
          <MaxPage>
            <MaxPageButton
              key={`pageNumber-${max}`}
              color="link"
              disabled={page === 0}
              onClick={event => this.handlePageButtonClick(event, 0)}
            >
              1
            </MaxPageButton>
            {` / `}
          </MaxPage>
        )}
        {pages.map(pageNumber => (
          <PageButton
            key={`pageNumber-${pageNumber}`}
            color="link"
            disabled={page === pageNumber}
            onClick={event => this.handlePageButtonClick(event, pageNumber)}
          >
            {pageNumber + 1}
          </PageButton>
        ))}
        {page + 1 !== max && (
          <MaxPage>
            {` / `}
            <MaxPageButton
              key={`pageNumber-${max}`}
              color="link"
              disabled={page === max}
              onClick={event => this.handlePageButtonClick(event, max - 1)}
            >
              {max}
            </MaxPageButton>
          </MaxPage>
        )}
      </Wrapper>
    );
  }
}

CustomActionsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

CustomActionsComponent.defaultProps = {
  numberDisplayedPages: 10,
};

export default withStyles(actionsStyles, {
  withTheme: true,
})(CustomActionsComponent);
