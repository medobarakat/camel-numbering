import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <circle cx={17} cy={17} r={17} fill="#fff" />
  </svg>
)
export default SvgComponent
