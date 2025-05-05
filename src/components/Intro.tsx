import { TiSocialInstagram } from "react-icons/ti";
import { IoIosMail } from "react-icons/io";
import { BiSolidHappyHeartEyes } from "react-icons/bi";

export default function Intro() {
    return (
        <div className="">
            <h1 className="text-center text-3xl lg:text-6xl lg:px-8">Turn Your Photos Into</h1>
            <h1 className="text-center text-3xl lg:text-6xl">Holiday Cheer</h1>
            <ul className="text-sm pt-4 lg:pt-6 text-center">
                <li>
                    <span className="inline-flex items-center space-x-1 whitespace-nowrap">
                        <TiSocialInstagram className="inline-block align-middle text-xl" />
                        <span>Optimized for Social Media posts</span>
                    </span>
                </li>
                <li>
                    <span className="inline-flex items-center space-x-1 whitespace-nowrap">
                        <IoIosMail className="inline-block align-middle text-xl" />
                        <span>Perfect for holiday cards</span>
                    </span>
                </li>
            </ul>
        </div>
    )
}
  