import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full">
        <div className="px-4 sm:px-20 grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-tertiary-bold uppercase">
              Company
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <Link href="#" className=" hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Create Resume
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Contribute
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-tertiary-bold uppercase">
              Help center
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Press Kit
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 sm:px-20 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 <Link href="/">Resume Builder</Link>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer