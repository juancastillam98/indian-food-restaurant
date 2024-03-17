import Link from "next/link";

export const Footer = () => {
    return (
        <footer id={'footer'} className={"bg-gray-950 text-zinc-50 mt-8 md:mt-0"}>
            <div className={"flex flex-col md:flex-row justify-between p-8 md:px-32 px-5"}>
                <div className={"w-full md:w-1/4"}>
                    <h2 className={"font-semibold text-xl pb-4"}>FoodieWeb</h2>
                    <p className={"text-sm"}>An unique combination of flavors</p>
                </div>
                <div>
                    <h3 className={"font-medium text-xl pb-4 pt-5 md:pt-0"}>Links</h3>
                    <nav className={"flex flex-col gap-2"}>
                        <Link href={"/"} className={"hover:text-bright transition-all cursor-pointer"}>DIshes</Link>
                        <Link href={"/"} className={"hover:text-bright transition-all cursor-pointer"}>About</Link>
                        <Link href={"/"} className={"hover:text-bright transition-all cursor-pointer"}>Menu</Link>
                        <Link href={"/"} className={"hover:text-bright transition-all cursor-pointer"}>Reviews</Link>
                    </nav>
                </div>
                <div>
                    <h3 className={"font-medium text-xl pb-4 pt-5 md:pt-0"}>Menu</h3>
                    <nav className={"flex flex-col gap-2"}>
                        <Link href={"/"} className={"hover:text-bright transition-all cursor-pointer"}>Our Dishes</Link>
                        <Link href={"/"} className={"hover:text-bright transition-all cursor-pointer"}>Premium Menu</Link>
                    </nav>
                </div>
                <div>
                    <h3 className={"font-medium text-xl pb-4 pt-5 md:pt-0"}>Contact Us</h3>
                    <nav className={"flex flex-col gap-2"}>
                        <Link href={"https://porfolio-git-main-juancastillam98s-projects.vercel.app/contact"} className={"hover:text-bright transition-all cursor-pointer"}>John Dev</Link>
                        <Link href={"https://www.linkedin.com/in/juan-castilla-mariscal/"} className={"hover:text-bright transition-all cursor-pointer"}>Linked In</Link>
                    </nav>
                </div>
            </div>
            <div>
                <p>
                    @copyright John Dev
                </p>
            </div>
        </footer>
    )
}