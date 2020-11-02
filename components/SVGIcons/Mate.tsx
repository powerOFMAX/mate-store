import React from 'react'
import { SVGIconProps } from './svg.types'

const Mate = ({ size = '34px', ...otherProps }: SVGIconProps) => (
  <svg width={size} height={size} viewBox="0 0 512 512" {...otherProps}>
    <path
      d="M425.687 34.169L354.104 61.02l-17.953 71.535h-37.606l22.492-89.715c1.449-5.809 5.677-10.527 11.294-12.647L412.872 0l7.234 19.294 5.581 14.875z"
      fill="#f7495b"
    />
    <path
      d="M425.687 34.169L354.104 61.02l-17.953 71.535H322.51l18.887-75.344c1.449-5.809 5.677-10.527 11.294-12.647l67.415-25.27 5.581 14.875z"
      fill="#dd2b44"
    />
    <path
      d="M139.436 184.101c-34.593 44.892-56.295 104.488-56.295 155.039C83.141 434.608 160.532 512 256 512s172.859-77.392 172.859-172.859c0-50.551-21.702-110.147-56.295-155.039l-233.128-.001z"
      fill="#fcc854"
    />
    <g fill="#f9bc43">
      <path d="M389.088 339.141c0-50.551-16.709-110.147-43.343-155.039h26.819c34.593 44.892 56.295 104.488 56.295 155.039C428.859 434.608 351.468 512 256 512c73.503 0 133.088-77.392 133.088-172.859z" />
      <circle cx={255.996} cy={348.49} r={90.614} />
    </g>
    <path
      d="M256 414.305a8.953 8.953 0 01-6.351-2.631l-56.836-56.836a8.98 8.98 0 010-12.702l56.836-56.836a8.979 8.979 0 0112.702 0l56.836 56.836a8.979 8.979 0 010 12.702l-56.836 56.836a8.957 8.957 0 01-6.351 2.631zm-44.133-65.819L256 392.619l44.134-44.133L256 304.352l-44.133 44.134z"
      fill="#fcc854"
    />
    <path
      d="M149.254 189.491h213.492c9.834 0 17.805-7.972 17.805-17.805 0-23.262-18.857-42.119-42.119-42.119H173.568c-23.262 0-42.119 18.857-42.119 42.119 0 9.833 7.971 17.805 17.805 17.805z"
      fill="#ccc"
    />
    <path
      d="M338.432 129.567h-57.487c23.262 0 42.119 18.857 42.119 42.119 0 9.834-7.971 17.805-17.805 17.805h57.487c9.834 0 17.805-7.972 17.805-17.805 0-23.262-18.857-42.119-42.119-42.119z"
      fill="#999"
    />
  </svg>
)

export default Mate