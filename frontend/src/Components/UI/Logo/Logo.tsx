import { SiNeovim } from "react-icons/si";
import { Link } from "react-router-dom";

interface IProps {
    className?: string;
}

const Logo = ({className}: IProps) => {
    return(
        <Link style={{width: '30px', height: '30px'}} className={className} to="/">
            <SiNeovim style={{fontSize: "30px", color: "var(--text-color)", margin: "auto"}} />
        </Link>
    );
}

export default Logo;
