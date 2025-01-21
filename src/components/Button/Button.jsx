import './Button.css'

// ASSETS
import WhiteArrow from '../../assets/white-arrow.svg'

function Button({ arrow, buttonStyle, loading, children, ...props }) {
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={WhiteArrow} alt="Seta" />} 
        </button>
    )
}

export default Button;