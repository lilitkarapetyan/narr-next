import React from 'react'
import FilterLink from '../containers/FilterLink'
import PrivacyLink from '../containers/PrivacyLink'
import TimeLink from '../containers/TimeLink'
import {VisibilityFilters, PrivacyFilters, TimeFilters} from '../actions'
import {Well} from 'react-bootstrap'

const Footer = () => (
    <Well>
        <Well>
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
        </Well>
        {' '}
        <Well>
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
        </Well>
        <Well>
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
        </Well>
    </Well>
);

export default Footer