type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),

  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  facebook: (props: IconProps) => (
    <svg
      fill="currentColor"
      role="img"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
    >
      <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
    </svg>
  ),
  email: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      {...props}
      fill="none"
      stroke="currentColor"
      className="w-5 h-5 mr-1"
      strokeWidth="2"
    >
      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  edit: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  ),
  delete: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  ),
  add: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  ),
  product: (props: IconProps) => (
    <svg
      className="mr-1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 20 20"
      strokeWidth={1} //blod
      {...props}
    >
      <path d="M8.591.275a3.75 3.75 0 012.818 0l7.498 3.04A1.75 1.75 0 0120 4.936v9.653a1.75 1.75 0 01-1.093 1.622l-7.498 3.04a3.75 3.75 0 01-2.818 0l-7.498-3.04A1.75 1.75 0 010 14.589V4.936a1.75 1.75 0 011.093-1.621L8.59.275zm2.254 1.39a2.25 2.25 0 00-1.69 0L7.24 2.44l7.527 2.927 2.669-1.03-6.592-2.673zm1.846 4.505L5.215 3.262 2.59 4.326l7.411 2.882 2.69-1.038zM1.5 14.59a.25.25 0 00.156.23l7.499 3.04c.031.014.063.026.095.037V8.526L1.5 5.512v9.077zm9.345 3.27l7.499-3.04a.25.25 0 00.156-.23V5.534l-7.75 2.992v9.37a2.18 2.18 0 00.095-.036z"></path>
    </svg>
  ),
  tag: (props: IconProps) => (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.4166 0C29.3957 0 31 1.60444 31 3.58362V12.283C31 13.6556 30.4548 14.972 29.4845 15.9428L15.9455 29.4858C13.9237 31.5036 10.6496 31.5051 8.62511 29.4881L1.51927 22.3923C-0.50412 20.3729 -0.506716 17.0953 1.51325 15.0722L15.0501 1.5184C16.021 0.546255 17.3384 0 18.7124 0H27.4166ZM27.4166 2.38908H18.7124C17.9726 2.38908 17.2631 2.6832 16.7404 3.20667L3.18362 16.7806C2.11619 17.8714 2.12429 19.6208 3.20706 20.7017L10.3121 27.7964C11.4029 28.8831 13.1681 28.8823 14.257 27.7958L27.795 14.2535C28.3175 13.731 28.6111 13.0221 28.6111 12.283V3.58362C28.6111 2.9239 28.0762 2.38908 27.4166 2.38908ZM23.0368 5.57798C24.3562 5.57798 25.4258 6.64759 25.4258 7.96703C25.4258 9.28645 24.3562 10.3561 23.0368 10.3561C21.7175 10.3561 20.6479 9.28645 20.6479 7.96703C20.6479 6.64759 21.7175 5.57798 23.0368 5.57798Z"
        fill="#F7941D"
      />
    </svg>
  ),
  image: (props: IconProps) => (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.0417 0C30.3323 0 33 2.66763 33 5.95833V27.0417C33 30.3323 30.3323 33 27.0417 33H5.95833C2.66763 33 0 30.3323 0 27.0417V5.95833C0 2.66763 2.66763 0 5.95833 0H27.0417ZM28.1059 30.0692L17.462 19.6438C16.9759 19.1681 16.2252 19.1246 15.6911 19.514L15.5379 19.6438L4.89216 30.0687C5.22573 30.186 5.58457 30.25 5.95833 30.25H27.0417C27.4148 30.25 27.773 30.1864 28.1059 30.0692ZM27.0417 2.75H5.95833C4.18642 2.75 2.75 4.18642 2.75 5.95833V27.0417C2.75 27.4237 2.81679 27.7902 2.93931 28.1301L13.614 17.6788C15.1413 16.1834 17.5404 16.1122 19.1506 17.4654L19.386 17.679L30.0601 28.132C30.1829 27.7915 30.25 27.4245 30.25 27.0417V5.95833C30.25 4.18642 28.8136 2.75 27.0417 2.75ZM22.4622 6.41667C24.7425 6.41667 26.591 8.26523 26.591 10.5456C26.591 12.8259 24.7425 14.6744 22.4622 14.6744C20.1819 14.6744 18.3333 12.8259 18.3333 10.5456C18.3333 8.26523 20.1819 6.41667 22.4622 6.41667ZM22.4622 9.16667C21.7006 9.16667 21.0833 9.78401 21.0833 10.5456C21.0833 11.3071 21.7006 11.9244 22.4622 11.9244C23.2238 11.9244 23.841 11.3071 23.841 10.5456C23.841 9.78401 23.2238 9.16667 22.4622 9.16667Z"
        fill="#F7941D"
      />
    </svg>
  ),
  removeUpLoad: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 "
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  upLoad: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
      />
    </svg>
  ),
  place: (props: IconProps) => (
    <svg
      width="29"
      height="32"
      viewBox="0 0 29 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.24694 4.084C9.90954 -1.36133 19.0905 -1.36133 24.7531 4.084C30.4156 9.52934 30.4156 18.3581 24.7531 23.8034L22.7764 25.6832C21.3195 27.0582 19.4292 28.8261 17.1047 30.9872C15.6522 32.3378 13.3478 32.3376 11.8955 30.9868L6.08185 25.5487C5.3512 24.8588 4.7396 24.2771 4.24694 23.8034C-1.41565 18.3581 -1.41565 9.52934 4.24694 4.084ZM22.9867 5.78252C18.2997 1.27524 10.7003 1.27524 6.01323 5.78252C1.32612 10.2898 1.32612 17.5976 6.01323 22.1048L8.4896 24.4548C9.8533 25.7382 11.5676 27.3402 13.6321 29.2602C14.1162 29.7104 14.8842 29.7105 15.3685 29.2604L21.0219 23.9734C21.8027 23.2363 22.4578 22.6134 22.9867 22.1048C27.6738 17.5976 27.6738 10.2898 22.9867 5.78252ZM14.5 9.57777C17.2605 9.57777 19.4983 11.7298 19.4983 14.3844C19.4983 17.039 17.2605 19.1909 14.5 19.1909C11.7395 19.1909 9.5016 17.039 9.5016 14.3844C9.5016 11.7298 11.7395 9.57777 14.5 9.57777ZM14.5 11.9798C13.119 11.9798 11.9994 13.0564 11.9994 14.3844C11.9994 15.7124 13.119 16.7889 14.5 16.7889C15.881 16.7889 17.0004 15.7124 17.0004 14.3844C17.0004 13.0564 15.881 11.9798 14.5 11.9798Z"
        fill="#F7941D"
      />
    </svg>
  ),
  info: (props: IconProps) => (
    <svg
      width="40"
      height="32"
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.5 0C37.9852 0 40 2.01414 40 4.49871V27.5013C40 29.9858 37.9852 32 35.5 32H4.5C2.01472 32 0 29.9858 0 27.5013V4.49871C0 2.01414 2.01472 0 4.5 0H35.5ZM35.5 2.99914H4.5C3.67158 2.99914 3 3.67052 3 4.49871V27.5013C3 28.3295 3.67158 29.0009 4.5 29.0009H35.5C36.3284 29.0009 37 28.3295 37 27.5013V4.49871C37 3.67052 36.3284 2.99914 35.5 2.99914ZM15.5 16.9951C16.3284 16.9951 17 17.6665 17 18.4947V19.4798L16.9842 19.6969C16.6586 21.9221 14.7953 22.9952 11.9999 22.9952C9.20426 22.9952 7.34096 21.9211 7.01574 19.6945L7 19.478V18.4947C7 17.6665 7.67158 16.9951 8.5 16.9951H15.5ZM22.5046 17.987H31.5C32.3284 17.987 33 18.6584 33 19.4866C33 20.2458 32.4356 20.8732 31.7036 20.9726L31.5 20.9862H22.5046C21.6762 20.9862 21.0046 20.315 21.0046 19.4866C21.0046 18.7274 21.5688 18.1 22.301 18.0008L22.5046 17.987ZM12 9.00177C13.6568 9.00177 14.9999 10.3445 14.9999 12.0009C14.9999 13.6573 13.6568 14.9999 12 14.9999C10.3432 14.9999 9.00006 13.6573 9.00006 12.0009C9.00006 10.3445 10.3432 9.00177 12 9.00177ZM22.5046 10.9968H31.5C32.3284 10.9968 33 11.6682 33 12.4964C33 13.2556 32.4356 13.883 31.7036 13.9824L31.5 13.996H22.5046C21.6762 13.996 21.0046 13.3246 21.0046 12.4964C21.0046 11.7372 21.5688 11.1098 22.301 11.0105L22.5046 10.9968Z"
        fill="white"
      />
    </svg>
  ),
  time: (props: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.4 16C2.4 8.48893 8.48893 2.4 16 2.4C23.511 2.4 29.6 8.48893 29.6 16C29.6 23.511 23.511 29.6 16 29.6C8.48893 29.6 2.4 23.511 2.4 16ZM16 0C7.16344 0 0 7.16344 0 16C0 24.8365 7.16344 32 16 32C24.8365 32 32 24.8365 32 16C32 7.16344 24.8365 0 16 0ZM15.989 7.43723C15.9096 6.85173 15.4072 6.4 14.8 6.4C14.1376 6.4 13.6 6.9376 13.6 7.6V17.2L13.611 17.3627C13.6904 17.9483 14.1928 18.4 14.8 18.4H21.2L21.3627 18.389C21.9483 18.3096 22.4 17.8072 22.4 17.2C22.4 16.5376 21.8624 16 21.2 16H16V7.6L15.989 7.43723Z"
        fill="#F7941D"
      />
    </svg>
  ),
  logOut: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    </svg>
  ),
  hamburger: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  ),
  home: (props: IconProps) => (
    <svg
      className="mr-1"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="currentColor"
      {...props}
    >
      <path d="M7.55.53a2.25 2.25 0 012.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 01-1.75 1.75h-3.5a1.75 1.75 0 01-1.75-1.75v-5.007a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25v5.007a1.75 1.75 0 01-1.75 1.75h-3.5A1.75 1.75 0 010 17.252v-9.31c0-.663.293-1.292.8-1.72L7.55.53zm1.933 1.147a.75.75 0 00-.966 0l-6.75 5.692a.75.75 0 00-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-9.31a.75.75 0 00-.267-.573l-6.75-5.692z"></path>
    </svg>
  ),
  products: (props: IconProps) => (
    <svg
      className="mr-1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 20 20"
      strokeWidth={1} //blod
      {...props}
    >
      <path d="M8.591.275a3.75 3.75 0 012.818 0l7.498 3.04A1.75 1.75 0 0120 4.936v9.653a1.75 1.75 0 01-1.093 1.622l-7.498 3.04a3.75 3.75 0 01-2.818 0l-7.498-3.04A1.75 1.75 0 010 14.589V4.936a1.75 1.75 0 011.093-1.621L8.59.275zm2.254 1.39a2.25 2.25 0 00-1.69 0L7.24 2.44l7.527 2.927 2.669-1.03-6.592-2.673zm1.846 4.505L5.215 3.262 2.59 4.326l7.411 2.882 2.69-1.038zM1.5 14.59a.25.25 0 00.156.23l7.499 3.04c.031.014.063.026.095.037V8.526L1.5 5.512v9.077zm9.345 3.27l7.499-3.04a.25.25 0 00.156-.23V5.534l-7.75 2.992v9.37a2.18 2.18 0 00.095-.036z"></path>
    </svg>
  ),
  users: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 mr-1"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  ),
  orders: (props: IconProps) => (
    <svg
      className="mr-2"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="20"
      viewBox="0 0 15 20"
      fill="currentColor"
      {...props}
    >
      <path d="M6 7.8a.6.6 0 01.6-.6h4.2a.6.6 0 010 1.2H6.6a.6.6 0 01-.6-.6zm0 3.6a.6.6 0 01.6-.6h4.2a.6.6 0 010 1.2H6.6a.6.6 0 01-.6-.6zM6 15a.6.6 0 01.6-.6h4.2a.6.6 0 010 1.2H6.6A.6.6 0 016 15zM4.8 7.8a.9.9 0 11-1.8 0 .9.9 0 011.8 0zm0 3.6a.9.9 0 11-1.8 0 .9.9 0 011.8 0zm-.9 4.5a.9.9 0 100-1.8.9.9 0 000 1.8zM3.702 1.2A1.8 1.8 0 015.4 0H9c.784 0 1.45.5 1.697 1.2H12.6A1.8 1.8 0 0114.4 3v14.4a1.8 1.8 0 01-1.8 1.8H1.8A1.8 1.8 0 010 17.4V3a1.8 1.8 0 011.8-1.8h1.902zm1.698 0a.6.6 0 000 1.2H9a.6.6 0 000-1.2H5.4zM3.702 2.4H1.8a.6.6 0 00-.6.6v14.4a.6.6 0 00.6.6h10.8a.6.6 0 00.6-.6V3a.6.6 0 00-.6-.6h-1.902A1.8 1.8 0 019 3.6H5.4a1.8 1.8 0 01-1.698-1.2z"></path>
    </svg>
  ),
  settings: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.3} //bold
      stroke="currentColor"
      className="w-6 h-6 -ml-1.5 mr-1"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  update: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  ),
  success: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  ),
  failed: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  emailOpen: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.3} //bold
      stroke="currentColor"
      className="w-6 h-6 -ml-1.5 mr-1"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
      />
    </svg>
  ),
  grooming: (props: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 46 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.0305 0.498083C22.383 1.14554 22.383 2.19289 23.0305 2.84034C24.9919 4.80174 31.5045 9.54337 29.2765 12.1522L21.2595 4.13524C20.7263 3.60205 19.8884 3.60205 19.3552 4.13524C18.822 4.66844 18.822 5.50632 19.3552 6.03951L27.3722 14.0565L25.4679 15.9608L17.47 7.94379C16.9368 7.41059 16.0989 7.41059 15.5657 7.94379C15.0325 8.47698 15.0325 9.31486 15.5657 9.84806L23.5827 17.865L21.6784 19.7693L13.6615 11.7523C13.1283 11.2191 12.2904 11.2191 11.7572 11.7523C11.224 12.2855 11.224 13.1234 11.7572 13.6566L19.7742 21.6736L17.8699 23.5779L9.85292 15.5609C9.31973 15.0277 8.48184 15.0277 7.94865 15.5609C7.41545 16.0941 7.41545 16.9319 7.94865 17.4651L15.9656 25.4821L14.0614 27.3864L6.04438 19.3694C5.51118 18.8362 4.6733 18.8362 4.14011 19.3694C3.60691 19.9026 3.60691 20.7405 4.14011 21.2737L12.1571 29.2907C11.7381 29.6525 11.205 29.862 10.6337 29.862C8.88174 29.862 4.25436 24.4538 2.8452 23.0447C2.54052 22.74 2.10253 22.5495 1.66455 22.5495C1.22657 22.5495 0.80763 22.7209 0.483904 23.0447C-0.106421 23.635 -0.163549 24.5871 0.350605 25.2536L6.71087 33.3468C8.42472 35.5176 10.9955 36.8697 13.7567 37.022C19.8694 37.3838 37.4458 21.4451 36.9888 13.7899C36.8174 11.0287 35.4844 8.45794 33.3135 6.74409L25.2394 0.364784C24.5729 -0.168412 23.6208 -0.111284 23.0305 0.498083Z"
        fill="#C689B8"
      />
    </svg>
  ),
  services: (props: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 46 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.38397 19.3804C7.33144 19.8778 7.28641 20.4122 7.55656 20.8279C7.8192 21.2362 8.32198 21.4292 8.67467 21.7706C9.14743 22.2382 9.29751 22.936 9.41757 23.5892C9.6502 24.8437 9.85281 26.0388 10.1905 27.271C10.5057 28.4364 10.6407 29.6463 10.5957 30.8488C10.5807 31.22 10.5507 31.6134 10.7083 31.9548C10.7983 32.1404 10.9334 32.3037 11.0159 32.4893C11.1585 32.8085 11.1285 33.1648 11.0985 33.5137C11.061 33.9442 11.0159 34.3821 10.7983 34.7607C10.7383 34.8721 10.6557 34.976 10.6407 35.1022C10.6257 35.2061 10.6632 35.3174 10.6482 35.4213C10.6107 35.6737 10.3031 35.7851 10.0479 35.7851C9.79278 35.7776 9.53013 35.7034 9.2825 35.7702C9.02736 35.8445 8.83976 36.0597 8.67467 36.2601C8.51708 36.4531 8.3595 36.6387 8.20191 36.8317C8.14938 36.8985 8.08935 36.9802 8.11937 37.0544C8.15689 37.1657 8.31447 37.1657 8.42703 37.1435C8.63715 37.4107 8.98984 37.5517 9.32752 37.5146C9.6502 37.4775 9.96537 37.2845 10.273 37.381C10.0704 37.522 9.86782 37.6631 9.6577 37.8041C9.58266 37.8561 9.49261 37.9154 9.4626 38.0045C9.41007 38.153 9.53764 38.3163 9.69522 38.3608C9.84531 38.4054 10.0104 38.3682 10.1605 38.3311C10.168 38.5761 10.5132 38.6355 10.7458 38.5538C10.9784 38.4722 11.2261 38.3311 11.4512 38.4276C11.5187 38.4573 11.5787 38.5093 11.6463 38.5315C11.7138 38.5612 11.7889 38.5612 11.8639 38.5612C12.3517 38.5687 12.877 38.5612 13.2447 38.2495C13.6048 37.9451 13.7024 37.4404 13.7774 36.9802C13.8675 36.4012 13.965 35.8296 14.0551 35.2506C14.0701 35.1764 14.0851 35.0873 14.1451 35.0502C14.2052 35.0131 14.2802 35.0131 14.3478 34.9908C14.5429 34.924 14.5729 34.6716 14.5579 34.4638C14.4453 32.1775 13.845 29.9135 14.1526 27.6421C14.2577 26.833 14.1677 25.9794 14.2727 25.1703C14.2802 25.1109 14.2877 25.0515 14.3252 25.007C14.3853 24.9402 14.4828 24.9402 14.5729 24.9476C15.0156 24.9922 15.4208 25.2223 15.8636 25.2742C16.0962 25.3039 16.3288 25.2816 16.554 25.2594C17.3119 25.1926 18.0773 25.1183 18.8127 24.9179C19.353 24.7695 19.8858 24.5468 20.4486 24.48C20.7938 24.4429 21.1464 24.4651 21.4841 24.4057C21.9869 24.3092 22.4296 24.0346 22.8724 23.7896C23.5628 23.4185 24.2982 23.1216 25.0336 22.8321C25.6414 22.5871 26.2492 22.3422 26.857 22.1046C27.4124 21.8819 27.9677 21.6593 28.553 21.5702C29.1383 21.4811 29.8662 21.392 30.3164 21.778C31.2319 22.5574 31.292 23.9084 31.6822 25.0441C32.0199 26.0314 32.6502 26.8998 33.2655 27.7461C33.8283 28.518 34.3986 29.2974 34.9615 30.0694C35.3217 30.5668 35.6894 31.0715 35.907 31.6505C36.3572 32.8679 36.0646 34.2188 35.7719 35.4807C35.6969 35.8073 35.5993 36.1636 35.3367 36.3789C35.1866 36.4977 34.999 36.5571 34.8114 36.6164C34.3461 36.7575 33.8809 36.8985 33.4156 37.0395C32.8153 37.2251 32.0724 37.6334 32.2225 38.2346C32.32 38.6132 32.7478 38.8136 33.1455 38.8507C33.5432 38.8804 33.9409 38.7914 34.3311 38.8433C34.6013 38.8804 34.8639 38.9769 35.134 38.9769C35.6218 38.9769 36.0646 38.6429 36.3347 38.2421C36.6048 37.8412 36.7549 37.3661 36.9275 36.9134C37.2652 36.0226 37.7305 35.1838 38.3083 34.4267C38.5334 34.1298 38.7735 33.8477 38.9161 33.5062C39.2988 32.6155 39.1037 31.6654 38.6535 30.8117C38.2032 29.9581 37.5729 29.1341 37.5504 28.1692C38.0982 28.2805 38.3833 28.6368 38.736 29.0673C39.719 30.2847 40.7321 31.5911 40.9197 33.1425C41.0172 33.9665 40.8747 34.7904 40.6946 35.5995C40.6721 35.7034 40.642 35.8148 40.5595 35.8816C40.477 35.941 40.3719 35.9484 40.2743 35.9484C39.8541 35.9706 39.4189 36.0894 39.1262 36.3937C38.8336 36.6907 38.751 37.2103 39.0287 37.522C39.1712 37.6853 39.3889 37.7744 39.599 37.8264C40.6646 38.0862 41.8877 37.8932 42.3905 36.9282C42.6982 36.3269 42.7282 35.2729 42.7282 34.6048C42.7357 33.6547 42.6756 32.7046 42.5481 31.7693C42.9008 31.5392 43.5686 31.8732 43.8688 32.1701C44.5066 32.7862 44.9794 33.4988 44.9194 34.3821C45.5122 33.7215 46.15 32.905 45.9624 32.0439C45.8124 31.3759 45.4146 30.7152 44.9419 30.2179C43.411 28.6071 42.7807 26.4693 42.7057 24.2647C42.6381 22.0601 42.3905 19.9297 42.413 17.7177C42.443 14.8376 40.3944 12.3064 37.723 11.1633C35.0515 10.0201 32.0274 10.0276 29.1233 10.2651C26.2192 10.5026 23.3076 10.9628 20.411 10.6511C19.9608 10.5991 19.488 10.5323 19.1053 10.2874C18.7226 10.0424 18.2499 9.80486 17.8371 9.61929C17.1993 9.32237 16.5464 9.62671 15.8486 9.52279C14.7605 9.35949 14.0251 8.17182 13.6574 7.14746C13.2897 6.1231 12.967 5.08389 12.4417 4.17829C12.2691 3.87395 12.0065 3.629 11.8339 3.32466C11.6538 3.0129 11.6013 2.6566 11.4662 2.32256C10.9409 1.01613 9.38756 0.496527 8.00681 0.177342C6.94123 -0.0676142 5.6055 -0.186381 4.97516 0.696946C4.82508 0.904788 4.72752 1.15717 4.4949 1.27593C4.33731 1.35759 4.15721 1.35016 3.98462 1.34274C2.67141 1.2314 1.35069 1.17201 0.0299711 1.11263C-0.0675819 2.53041 -0.00754925 4.26737 1.24563 4.96512C1.63584 5.18039 2.1161 5.26946 2.41627 5.59607C2.55134 5.74453 2.64139 5.9301 2.78397 6.07856C3.15167 6.46455 3.84955 6.32352 4.34482 6.52393C4.61496 6.63528 4.47989 7.05838 4.53242 7.34046C4.58495 7.6151 4.75754 7.85264 4.84009 8.12729C4.90762 8.34997 4.91513 8.58751 4.99767 8.81019C5.06521 8.9735 5.17026 9.12196 5.25281 9.27784C5.77059 10.2577 5.26031 11.5641 5.84563 12.5142C6.1608 13.0264 6.22834 13.6722 6.46847 14.2289C6.76863 14.9118 6.88119 15.6615 6.98625 16.4038C7.12883 17.3614 7.48903 18.408 7.38397 19.3804Z"
        fill="#83C351"
      />
    </svg>
  ),
  supplies: (props: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 46 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_237_34)">
        <path
          d="M35.3664 7.48486C34.2059 6.32436 32.6629 5.783 31.1458 5.85756C31.2203 4.34048 30.679 2.79746 29.5185 1.63696C27.3401 -0.54142 23.8067 -0.54142 21.6251 1.63696C19.6153 3.64677 19.4597 6.80736 21.1551 8.99546L8.99571 21.1548C6.80761 19.4595 3.64701 19.6151 1.6372 21.6249C-0.541176 23.8032 -0.541176 27.3366 1.6372 29.5182C2.79771 30.6787 4.34072 31.2201 5.85781 31.1455C5.78325 32.6626 6.3246 34.2056 7.48511 35.3661C9.66348 37.5445 13.1969 37.5445 15.3785 35.3661C17.3883 33.3563 17.5439 30.1957 15.8485 28.0076L28.0111 15.845C30.1992 17.5404 33.3598 17.3848 35.3696 15.375C37.5448 13.1966 37.5448 9.66324 35.3664 7.48486Z"
          fill="#F7941D"
        />
      </g>
      <defs>
        <clipPath id="clip0_237_34">
          <rect width="37" height="37" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  rightArrow: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  ),
  leftArrow: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  ),
  pawn: (props: IconProps) => (
    <svg
      className="w-6 h-6"
      width="800px"
      height="800px"
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M490.39,182.75c-5.55-13.19-14.77-22.7-26.67-27.49l-.16-.06a46.46,46.46,0,0,0-17-3.2h-.64c-27.24.41-55.05,23.56-69.19,57.61-10.37,24.9-11.56,51.68-3.18,71.64,5.54,13.2,14.78,22.71,26.73,27.5l.13.05a46.53,46.53,0,0,0,17,3.2c27.5,0,55.6-23.15,70-57.65C497.65,229.48,498.78,202.72,490.39,182.75Z" />
      <path d="M381.55,329.61c-15.71-9.44-30.56-18.37-40.26-34.41C314.53,250.8,298.37,224,256,224s-58.57,26.8-85.39,71.2c-9.72,16.06-24.6,25-40.36,34.48-18.07,10.86-36.74,22.08-44.8,44.16a66.93,66.93,0,0,0-4.65,25c0,35.95,28,65.2,62.4,65.2,17.75,0,36.64-6.15,56.63-12.66,19.22-6.26,39.09-12.73,56.27-12.73s37,6.47,56.15,12.73C332.2,457.85,351,464,368.8,464c34.35,0,62.3-29.25,62.3-65.2a67,67,0,0,0-4.75-25C418.29,351.7,399.61,340.47,381.55,329.61Z" />
      <path d="M150,188.85c11.9,14.93,27,23.15,42.52,23.15a42.88,42.88,0,0,0,6.33-.47c32.37-4.76,52.54-44.26,45.92-90C242,102.3,234.6,84.39,224,71.11,212.12,56.21,197,48,181.49,48a42.88,42.88,0,0,0-6.33.47c-32.37,4.76-52.54,44.26-45.92,90C132,157.67,139.4,175.56,150,188.85Z" />
      <path d="M313.16,211.53a42.88,42.88,0,0,0,6.33.47c15.53,0,30.62-8.22,42.52-23.15,10.59-13.29,17.95-31.18,20.75-50.4h0c6.62-45.72-13.55-85.22-45.92-90a42.88,42.88,0,0,0-6.33-.47C315,48,299.88,56.21,288,71.11c-10.6,13.28-18,31.19-20.76,50.44C260.62,167.27,280.79,206.77,313.16,211.53Z" />
      <path d="M111.59,308.8l.14-.05c11.93-4.79,21.16-14.29,26.69-27.48,8.38-20,7.2-46.75-3.15-71.65C120.94,175.16,92.85,152,65.38,152a46.4,46.4,0,0,0-17,3.2l-.14.05C36.34,160,27.11,169.54,21.58,182.73c-8.38,20-7.2,46.75,3.15,71.65C39.06,288.84,67.15,312,94.62,312A46.4,46.4,0,0,0,111.59,308.8Z" />
    </svg>
  ),
  dot: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 pr-1"
      {...props}
    >
      <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" />
    </svg>
  ),
  listView: (props: IconProps) => (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 17.3 17.3"
      fill="currentColor"
      {...props}
    >
      <g>
        <g>
          <g>
            <path d="M16.1,2.3H4.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h11.9c0.6,0,1,0.4,1,1S16.7,2.3,16.1,2.3z" />
          </g>
          <circle cx="1.1" cy="1.3" r="1" />
        </g>
        <g>
          <g>
            <path d="M16.1,17H4.3c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h11.9c0.6,0,1,0.4,1,1C17.1,16.6,16.7,17,16.1,17z" />
          </g>
          <circle cx="1.1" cy="16" r="1" />
        </g>
        <g>
          <g>
            <path d="M16.1,12.1H4.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h11.9c0.6,0,1,0.4,1,1S16.7,12.1,16.1,12.1z" />
          </g>
          <circle cx="1.1" cy="11.1" r="1" />
        </g>
        <g>
          <g>
            <path d="M16.1,7.2H4.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h11.9c0.6,0,1,0.4,1,1S16.7,7.2,16.1,7.2z" />
          </g>
          <circle cx="1.1" cy="6.2" r="1" />
        </g>
      </g>
    </svg>
  ),
  cardView: (props: IconProps) => (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 17.3 17.3"
      fill="currentColor"
      {...props}
    >
      <g>
        <path
          d="M15.8,1.4c0.1,0,0.1,0.1,0.1,0.1v4.9c0,0.1-0.1,0.1-0.1,0.1h-4.9c-0.1,0-0.1-0.1-0.1-0.1V1.5c0-0.1,0.1-0.1,0.1-0.1H15.8
		 M15.8,0.1h-4.9c-0.8,0-1.4,0.6-1.4,1.4v4.9c0,0.8,0.6,1.4,1.4,1.4h4.9c0.8,0,1.4-0.6,1.4-1.4V1.5C17.2,0.8,16.5,0.1,15.8,0.1
		L15.8,0.1z"
        />
        <path
          d="M15.8,10.7c0.1,0,0.1,0.1,0.1,0.1v4.9c0,0.1-0.1,0.1-0.1,0.1h-4.9c-0.1,0-0.1-0.1-0.1-0.1v-4.9c0-0.1,0.1-0.1,0.1-0.1H15.8
		 M15.8,9.5h-4.9c-0.8,0-1.4,0.6-1.4,1.4v4.9c0,0.8,0.6,1.4,1.4,1.4h4.9c0.8,0,1.4-0.6,1.4-1.4v-4.9C17.2,10.1,16.5,9.5,15.8,9.5
		L15.8,9.5z"
        />
        <path
          d="M6.4,1.4c0.1,0,0.1,0.1,0.1,0.1v4.9c0,0.1-0.1,0.1-0.1,0.1H1.5c-0.1,0-0.1-0.1-0.1-0.1V1.5c0-0.1,0.1-0.1,0.1-0.1H6.4
		 M6.4,0.1H1.5c-0.8,0-1.4,0.6-1.4,1.4v4.9c0,0.8,0.6,1.4,1.4,1.4h4.9c0.8,0,1.4-0.6,1.4-1.4V1.5C7.8,0.8,7.2,0.1,6.4,0.1L6.4,0.1z"
        />
        <path
          d="M6.4,10.7c0.1,0,0.1,0.1,0.1,0.1v4.9c0,0.1-0.1,0.1-0.1,0.1H1.5c-0.1,0-0.1-0.1-0.1-0.1v-4.9c0-0.1,0.1-0.1,0.1-0.1H6.4
		 M6.4,9.5H1.5c-0.8,0-1.4,0.6-1.4,1.4v4.9c0,0.8,0.6,1.4,1.4,1.4h4.9c0.8,0,1.4-0.6,1.4-1.4v-4.9C7.8,10.1,7.2,9.5,6.4,9.5L6.4,9.5
		z"
        />
      </g>
    </svg>
  ),
  imageNotFound: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  ),
  search: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  ),
  googleLogo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="50"
      width="120"
      viewBox="-40.446 -22.19 350.532 133.14"
      {...props}
    >
      <path
        d="M115.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#EA4335"
      />
      <path
        d="M163.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#FBBC05"
      />
      <path
        d="M209.39 25.87v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
        fill="#4285F4"
      />
      <path d="M224.64 2.53v65h-9.5v-65z" fill="#34A853" />
      <path
        d="M261.66 54.01l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
        fill="#EA4335"
      />
      <path
        d="M34.93 40.94v-9.41h31.71c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C15.96 68.88 0 53.42 0 34.44 0 15.46 15.96 0 34.94 0c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65z"
        fill="#4285F4"
      />
    </svg>
  ),

  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
