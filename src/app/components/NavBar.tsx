import { metadata } from "../layout";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between w-full max-w-full p-4 mx-auto bg-blue-700">
            <a href="/" className="font-bold text-lg">{metadata.title?.toString()}</a>
            <div className="flex items-center gap-4">
                <a href="/create" className=" transition-all hover:font-bold">Create</a>
                <a href="/about" className="transition-all hover:font-bold">About</a>
            </div>
        </nav>
    )
}