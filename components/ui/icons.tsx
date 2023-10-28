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
  categories: (props: IconProps) => (
    <svg
      className="mr-1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 20 20"
      strokeWidth={1.5}
      {...props}
    >
      <path d="M4.248 14.002c.966 0 1.75.784 1.75 1.75v2.498A1.75 1.75 0 014.248 20H1.75A1.75 1.75 0 010 18.25v-2.498c0-.966.783-1.75 1.75-1.75h2.498zm0 1.5H1.75a.25.25 0 00-.25.25v2.498c0 .138.112.25.25.25h2.498a.25.25 0 00.25-.25v-2.498a.25.25 0 00-.25-.25zm3.5.498h11.505a.75.75 0 01.102 1.493l-.102.007H7.748a.75.75 0 01-.102-1.493L7.748 16zm-3.5-8.999c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 01-1.75 1.75H1.75A1.75 1.75 0 010 11.249V8.75c0-.966.783-1.75 1.75-1.75h2.498zm0 1.5H1.75a.25.25 0 00-.25.25v2.498c0 .138.112.25.25.25h2.498a.25.25 0 00.25-.25V8.75a.25.25 0 00-.25-.25zm3.5.499h11.505a.75.75 0 01.102 1.493l-.102.007H7.748a.75.75 0 01-.102-1.493L7.748 9zm-3.5-9c.966 0 1.75.783 1.75 1.75v2.498a1.75 1.75 0 01-1.75 1.75H1.75A1.75 1.75 0 010 4.248V1.75C0 .783.783 0 1.75 0h2.498zm0 1.5H1.75a.25.25 0 00-.25.25v2.498c0 .138.112.25.25.25h2.498a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25zm3.5.5h11.505a.75.75 0 01.102 1.493l-.102.007H7.748a.75.75 0 01-.102-1.493L7.748 2z"></path>
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
