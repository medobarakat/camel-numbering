import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M10.667 0 3.556 7.111h5.333v12.445h3.556V7.11h5.333L10.667 0ZM23.11 24.889V12.444h-3.555V24.89h-5.334L21.333 32l7.112-7.111H23.11Z"
    />
  </svg>
)
export default SvgComponent
