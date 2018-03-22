import React from 'react'
import FilterLink from '../containers/FilterLink'
import PrivacyLink from '../containers/PrivacyLink'
import {VisibilityFilters, PrivacyFilters} from '../actions'

const Footer = () => (
    <div>
        <span>
            Show:
            {' '}
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                All
            </FilterLink>
            {', '}
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                Active
            </FilterLink>
            {', '}
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </span>
        {' '}
        <span>
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
        </span>
    </div>
);

export default Footer