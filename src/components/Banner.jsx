import { Link } from "react-router-dom";
import iconCall from "../assets/icon-call.svg"
import Location from "./Location";


function Banner() {
    return (
        <div>
            <section className="bg-neutral-900 h-[48px] m-auto">
                <div className="flex items-center justify-between px-4 py-2 h-full max-w-[1440px] m-auto">
                    <Link to="tel:+2349046346648" className="flex items-center gap-1">
                       <img src={iconCall} alt="telephone" />

                        <span className="text-neutral-300 text-xs">+234 904 634 6648</span>
                    </Link>
                    <Location />
                </div>
            </section>
        </div>
    );
}

export default Banner;