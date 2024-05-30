import React from 'react'
import Filter from './Filter'
import Link from 'next/link'

function MobileFilter() {
  return (
    <>
      <div className="mf-blk">
        <div className="mf-header">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" fill="none" viewBox="0 0 30 30">
            <g data-name="Ellipse 40" fill="#000" stroke="#000" stroke-width="2">
              <circle cx="15" cy="15" r="15" stroke="none"></circle>
              <circle cx="15" cy="15" r="14" fill="none"></circle>
            </g>
            <line data-name="Line 92" y2="20" transform="translate(22.57 8.429) rotate(45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
            <line data-name="Line 93" x2="20" transform="translate(8.43 8.429) rotate(45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
          </svg>
        </div>
        <div className="mf-body">
          <div className="filter-left">
            <Filter />
          </div>
        </div>
        <div className="mf-footer">
          <div className="mf-footer-btn-blk">
            <Link href="#" className="mf-clear-btn">Clear</Link>
            <Link href="#" className="mf-apply-btn">Apply</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileFilter