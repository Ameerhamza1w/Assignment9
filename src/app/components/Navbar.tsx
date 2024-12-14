import Image from "next/image"
function Navbar() {
    return ( <nav className="bg-blue-900 h-20 w-full flex justify-evenly items-center">
                {/* Logo */}
                <div className="flex items-center gap-4 mt-[100px]">
                 <Image src="/logo.png"
                 alt="logo" height={95} width={113} />
                </div>
    
                {/* Subtitle */}
                <div>
                    <h1 className="whitespace-nowrap font-extrabold text-blue-300 text-[1.5rem]">Tution Free Educational Program on Latest Technologies</h1> </div>
    
                {/* Nav Link */}
                <ul className="flex gap-5 text-white">
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Result</li>
                    <li>Courses</li>
                    <li>Apply</li>
                </ul>
            </nav>
        );
    }
 export default Navbar