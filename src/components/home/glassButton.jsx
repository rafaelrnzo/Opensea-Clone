

const GlassButton = ({children, onClick}) => {
  let buttonClasses = 'rounded-xl py-4 px-7 glass-effect'

  return (
    <button className={buttonClasses} onClick={onClick}>
      <p className="text-white font-semibold tracking-wider text-base ">
        {children}
      </p>
    </button>
  )
}

export default GlassButton