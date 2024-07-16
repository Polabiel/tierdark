import Link from "next/link";
import { metadata } from "../layout";

export default async function FooterBar() {
    const year = new Date().getFullYear()
    return (
        <footer className="flex items-center justify-between w-full max-w-full p-6 mx-auto">
            <p>© {year} <Link href={"https://www.github.com/polabiel"} className="text-blue-800 hover:text-blue-400 transition-all">{metadata.title?.toString()}</Link>
            </p>
        </footer>
    )
}