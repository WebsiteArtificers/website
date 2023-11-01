import { HamburgerIcon } from "@/icons/icons"
import './hamburgerMenu.css';

type HamburgerProps = {
    isOpen: boolean;
    onClick: () => void;
};

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClick }) => {
    return (
        <>
            <span onClick={onClick} className='hamburger__span'>
                <HamburgerIcon />
            </span>
        </>
    )
}

export default Hamburger;