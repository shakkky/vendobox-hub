import React, { Component } from 'react';
import { Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { range } from 'lodash';

import { Wrapper, PageButton, ControlButton, MaxPage } from './styles';

const actionsStyles = (theme: Theme) => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: 0,
  },
});

class CustomActionsComponent extends Component<{
  classes: Record<string, string>;
  count: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => void;
  page: number;
  rowsPerPage: number;
  numberDisplayedPages?: number;
  theme: Theme;
}> {
  handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.props.onPageChange(event, this.props.page - 1);
  };

  handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.props.onPageChange(event, this.props.page + 1);
  };

  handlePageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => {
    this.props.onPageChange(event, page);
  };

  render() {
    const {
      classes,
      count,
      page,
      rowsPerPage,
      theme,
      numberDisplayedPages = 10,
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
        {pages.map(pageNumber => (
          <PageButton
            key={`pageNumber-${pageNumber}`}
            color="link"
            disabled={page === pageNumber}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              this.handlePageButtonClick(event, pageNumber)
            }
          >
            {pageNumber + 1}
          </PageButton>
        ))}
        <MaxPage>{` / ${max}`}</MaxPage>
      </Wrapper>
    );
  }
}

export default withStyles(actionsStyles, {
  withTheme: true,
})(CustomActionsComponent);
