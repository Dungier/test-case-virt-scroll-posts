import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathName = usePathname();
    return (
        <header className={"flex w-12/12 py-4 justify-center items-center"}>
            <div className={"flex justify-between w-3/4 items-center"}>
                <Link
                    href={"/"}
                    className="flex justify-between items-center p-4 text-xs text-white rounded-sm"
                >
                    TestCase
                </Link>
                <ul className="flex gap-16">
                    <li>
                        <Link
                            href="/posts_page"
                            className={`text-xs ${
                                pathName === "/posts_page"
                                    ? "text-black-600 font-bold"
                                    : "text-gray-400"
                            } hover:text-gray-800`}
                        >
                            PostsPage
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
