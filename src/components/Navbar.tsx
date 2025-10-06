import Tab from "./Tab";

export default function NavBar() {
    return (
        <nav className="fixed bottom-5 left-[45%] mx-auto flex w-fit rounded-full bg-gray-500 p-1 h-[7%]">
            <Tab label="home"/>
            <Tab label="tech"/>
            <Tab label="works"/>
        </nav>
    )
}