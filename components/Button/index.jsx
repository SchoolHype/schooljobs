import styles from './style.module.css'

const Button = ({onClick, name, id, className, children}) => {
    return (
        <button 
            className={`${styles.button} ${className}`} 
            type="button" 
            name={name} 
            id={id} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button