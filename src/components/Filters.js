import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important';

import FilterLink from '../containers/FilterLink';
import PrivacyLink from '../containers/PrivacyLink';
import TimeLink from '../containers/TimeLink';
import { VisibilityFilters, PrivacyFilters, TimeFilters } from '../actions';
import Export from '../containers/Export';

const Filters = () => (
    <Card>
      <CardBody>
        <Card className={css(styles.mb2)}>
          <CardBody>
            Show:
            {' '}
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                All
            </FilterLink>
            {', '}
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                Unselected
            </FilterLink>
            {', '}
            <FilterLink filter={VisibilityFilters.SHOW_SELECTED}>
                Selected
            </FilterLink>
          </CardBody>
        </Card>
        {' '}
        <Card className={css(styles.mb2)}>
          <CardBody>
            Show:
            {' '}
            <PrivacyLink filter={PrivacyFilters.SHOW_ALL}>
                All
            </PrivacyLink>
            {', '}
            <PrivacyLink filter={PrivacyFilters.SHOW_PUBLIC}>
                Public
            </PrivacyLink>
            {', '}
            <PrivacyLink filter={PrivacyFilters.SHOW_SENSITIVE}>
                Sensitive
            </PrivacyLink>
            {', '}
            <PrivacyLink filter={PrivacyFilters.SHOW_PRIVATE}>
                Private
            </PrivacyLink>
          </CardBody>
        </Card>
        <Card className={css(styles.mb2)}>
          <CardBody>
            Show:
            {' '}
            <TimeLink filter={TimeFilters.SHOW_ALL}>
                All
            </TimeLink>
            {', '}
            <TimeLink filter={TimeFilters.SHOW_LAST_MIN}>
                last minute
            </TimeLink>
            {', '}
            <TimeLink filter={TimeFilters.SHOW_LAST_5_MIN}>
                last 5 mins
            </TimeLink>
          </CardBody>
        </Card>
        <Export/>
      </CardBody>
    </Card>
);

const styles = StyleSheet.create({
  mb2: {
    marginBottom: '20px'
  }
});

export default Filters;
