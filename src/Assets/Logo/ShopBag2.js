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
      d="M30.504 12.796c-.344-.464-.915-.73-1.567-.73H23.83V8.701a7.83 7.83 0 0 0-15.66 0v3.365H3.063c-.652 0-1.223.266-1.566.73-.344.463-.433 1.086-.245 1.71l4.382 14.473c.364 1.206 1.637 2.15 2.896 2.15h14.94c1.26 0 2.532-.944 2.896-2.15l4.382-14.473c.189-.624.1-1.247-.244-1.71ZM9.17 8.7a6.83 6.83 0 0 1 13.66 0v3.365H9.17V8.701Z"
    />
  </svg>
)
export default SvgComponent
