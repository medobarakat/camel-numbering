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
      d="M30.503 12.796c-.343-.464-.914-.73-1.566-.73H23.83V8.701a7.83 7.83 0 0 0-15.66 0v3.365H3.063c-.652 0-1.223.266-1.567.73-.343.463-.433 1.086-.244 1.71l4.381 14.473c.365 1.206 1.638 2.15 2.897 2.15h14.94c1.259 0 2.531-.944 2.896-2.15l4.381-14.473c.19-.624.1-1.247-.244-1.71ZM9.17 8.7a6.83 6.83 0 1 1 13.66 0v3.365H9.17V8.701Z"
    />
  </svg>
)
export default SvgComponent
