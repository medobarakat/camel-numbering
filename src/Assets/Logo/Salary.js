import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={41}
        height={41}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M0 0h41v41H0V0Z" />
      </mask>
      <g mask="url(#b)">
        <path
          stroke="#5DBB67"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M18.151 7.323c-.52-.743-1.624-1.873-3.426-1.671-1.527.17-2.665-.32-3.389-.805M17.994 8.109s-4.25-.306-5.835 2.403"
        />
        <path
          stroke="#5DBB67"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M25.859 9.41a13.669 13.669 0 0 1-6.822 0c-.795-.2-1.246-1.094-.96-1.906l.01-.028c.24-.68.92-1.063 1.587-.896 1.869.47 3.678.47 5.548 0 .667-.167 1.347.215 1.586.896l.01.028c.286.812-.164 1.706-.96 1.906Z"
        />
        <path
          stroke="#5DBB67"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M25.859 6.583c1.077-1.564 2.88-4.497 2.068-5.549-.385-.498-.713.179-1.51.179-.935 0-.935-.612-1.87-.612-.936 0-.936.612-1.872.612-.935 0-.935-.612-1.87-.612-.936 0-.936.612-1.872.612-.797 0-1.124-.686-1.512-.187-.806 1.038.934 3.94 1.997 5.517M29.172 10.679a33.055 33.055 0 0 0-2.441-1.97M18.291 8.909c-7.426 5.56-9.747 11.89-8.99 16.818M34.271 30.23c2.962-4.164 2.891-11.051-3.096-17.582"
        />
        <path fill="#FFDDCE" d="M24.985 30.367v.043l.028-.012-.028-.03Z" />
        <path
          stroke="#5DBB67"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M18.995 33.965h6.792M6.263 37.444l6.824 2.54c.738.275 1.52.415 2.308.415h8.96a6.616 6.616 0 0 0 3.542-1.027l11.22-7.11a1.97 1.97 0 0 0 .32-2.58c-.61-.895-1.617-1.051-2.726-.526l-10.924 4.81.013-1.773a3.172 3.172 0 0 0-2.712-2.827l-6.652-.766c-1.534-.217-2.301-.731-3.639-1.514a11.921 11.921 0 0 0-6.02-1.631h-.514M6.263 30.56v7.92c0 .63-.511 1.142-1.142 1.142H2.364c-.63 0-1.142-.512-1.142-1.143V24.493c0-.631.511-1.143 1.142-1.143H5.12c.63 0 1.142.512 1.142 1.142v3.26M24.778 15.171s-1.198-1.105-3.045-.549c-1.696.511-2.117 2.832-.965 3.736.662.519 1.658.946 3 1.42 3.003 1.062 1.893 5.298-1.162 5.318-1.193.008-1.75-.068-2.797-.753M22.606 13.036v13.606"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h41v41H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent