import cls from './MyInput.module.css';

interface IProps {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
    className?: string
    placeholder?: string
}

const MyInput = ({text, setText, className, placeholder}: IProps) => {
    return(
        <input 
            type="text" 
            value={text} 
            onChange={e => setText(e.target.value)}
            className={[cls.MyInput, className].join(" ")}
            placeholder={placeholder}
        />
    );
}

export default MyInput;
