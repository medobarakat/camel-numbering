import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={51}
    fill="none"
    {...props}
  >
    <circle cx={25.5} cy={25.5} r={25} fill="#5DBB67" stroke="#5DBB67" />
  </svg>
)
export default SvgComponent
