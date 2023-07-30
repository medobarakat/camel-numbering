import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g fill="#fff" clipPath="url(#a)">
      <path d="M31 20a1 1 0 0 1-1-1c0-3.86-3.14-7-7-7h-9.667v4.333c0 .88-1.058 1.326-1.69.723l-7.334-7a.998.998 0 0 1 0-1.445l7.334-7c.634-.606 1.69-.155 1.69.722v4.334h8.334C27.364 6.667 32 11.303 32 17v2a1 1 0 0 1-1 1Z" />
      <path d="M18.667 29.667v-4.334h-8.334C4.636 25.333 0 20.697 0 15v-2a1 1 0 0 1 2 0c0 3.86 3.14 7 7 7h9.667v-4.333c0-.876 1.054-1.331 1.69-.723l7.334 7a.998.998 0 0 1 0 1.445l-7.334 7c-.636.606-1.69.155-1.69-.722Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
