import Link from "next/link";

const MenuFooter = () => {
  return (
    <ul className="flex flex-col items-center justify-start w-[96px] gap-4">
        <li className="w-full">
            <Link href={'/about'} className="text-white text-base font-medium w-full">About Us</Link>
        </li>
        <li className="w-full">
            <Link href={'/team'} className="text-white text-base font-medium">Our Team</Link>
        </li>
        <li className="w-full">
            <Link href={'/project'} className="text-white text-base font-medium">Our Project</Link>
        </li>
        <li className="w-full">
            <Link href={'/pricing'} className="text-white text-base font-medium">Pricing</Link>
        </li>
        <li className="w-full">
            <Link href={'/contact'} className="text-white text-base font-medium">Contact</Link>
        </li>
    </ul>
  )
}

export default MenuFooter