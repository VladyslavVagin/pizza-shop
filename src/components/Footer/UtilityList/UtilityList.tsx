import Link from "next/link";

const UtilityList = () => {
  return (
    <ul className="flex flex-col items-center justify-start gap-4 pl-24">
        <li className="w-full">
            <Link href={'/'} className="text-white text-base font-medium w-full">Style Guide</Link>
        </li>
        <li className="w-full">
            <Link href={'/'} className="text-white text-base font-medium">Changelog</Link>
        </li>
        <li className="w-full">
            <Link href={'/licenses'} className="text-white text-base font-medium">Licenses</Link>
        </li>
        <li className="w-full">
            <Link href={'/'} className="text-white text-base font-medium">Protected</Link>
        </li>
        <li className="w-full">
            <Link href={'/not-found'} className="text-white text-base font-medium">Not Found</Link>
        </li>
    </ul>
  )
}

export default UtilityList;