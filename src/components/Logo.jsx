import { NavLink } from "react-router-dom";

const Logo = () => {
    return <NavLink to='/' className="block h-[70px] w-[180px] overflow-hidden mt-4">
        <img src="/images/dark-logo.svg" className="object-contain aspect-auto" />
    </NavLink>;
};

export default Logo;
