import React from 'react'

function FeatureSelect() {
  return (
    <>
        <div className="feature-select">
                  <div className="feature-blk">
                    <span>Sort by: </span>
                    <select name="" id="" className="fs-select-contaier">
                      {/* <option value="Featured">Featured</option>
                      <option value="Best selling">Best selling</option> */}
                      <option value="Price, low to high">Price, low to high</option>
                      <option value="Price, high to low">Price, high to low</option>
                    </select>
                  </div>
                </div>
    </>
  )
}

export default FeatureSelect