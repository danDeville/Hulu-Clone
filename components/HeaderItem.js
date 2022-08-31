const HeaderItem = ({ Icon, title }) => {
  return (
    <div
      className="
        flex flex-col
        items-center
        w-12 sm:w-20
        cursor-pointer
        group hover:text-white
      "
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
      <p
        className="
          opacity-0
          uppercase tracking-widest
          group-hover:opacity-100
        "
      >
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
