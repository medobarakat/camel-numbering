import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      clipPath="url(#a)"
    >
      <path d="M6.667 5.833a3.333 3.333 0 1 0 6.667 0 3.333 3.333 0 0 0-6.667 0ZM5 17.5v-1.667A3.333 3.333 0 0 1 8.333 12.5h3.334A3.333 3.333 0 0 1 15 15.833V17.5" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
