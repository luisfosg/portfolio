function Burger (props: any) {
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path d="M24 18v1H0v-1h24zm0-6v1H0v-1h24zm0-6v1H0V6h24z" />
      <path d="M24 19H0v-1h24v1zm0-6H0v-1h24v1zm0-6H0V6h24v1z" />
    </svg>
  )
}

export default Burger
