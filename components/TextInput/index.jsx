import styles from './style.module.css'

const TextInput = ({placeholder, onChange, name, id, className, value}) => {
    return (
        <input className={`${styles.input} ${className}`} type="text" value={value ?? ''} name={name} id={id} placeholder={placeholder} onChange={onChange} />
    )
}

export default TextInput