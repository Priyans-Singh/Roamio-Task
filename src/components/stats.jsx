import React from 'react'

function stats({tag,quantity}) {
  return (
    <div className="stats">
        <div className="quantity">
          <span class="material-symbols-rounded">
             check_circle
          </span>
          <h5>
            {quantity}
          </h5>
        </div>
        <p>
            {tag}
        </p>
    </div>
  )
}

export default stats