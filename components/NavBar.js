import requests from "../utils/requests"
import { useRouter } from "next/dist/client/router"

const NavBar = () => {
  const router = useRouter()

  return (
    <nav className="relative">
      <div
        className="
          flex whitespace-nowrap
          px-10 sm:px-20
          space-x-10 sm:space-x-20
          overflow-x-scroll overflow-y-hidden
          scrollbar-hide
          text-2xl
        "
      >
        {Object.entries(requests).map(([key, {title, url}]) =>(
          <h2
            key={key}
            onClick={() =>router.push(`/?genre=${key}`)}
            className="
              last:pr-24
              cursor-pointer
              transition duration-100
              transform hover:scale-125
              hover:text-white active:text-red-400
            "
          >
            {title}
          </h2>
        ))}
      </div>
      <span
        className="
          absolute top-0 right-0
          w-1/12 h-10
          bg-gradient-to-l from-[#06202A]
        "
      />
    </nav>
  )
}

export default NavBar
