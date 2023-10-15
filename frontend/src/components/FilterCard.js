const FilterCard = (props) => {
    return(
        <>
        <div className="flex gap-1 items-center hover:bg-lime-600 py-2 px-3 hover:text-white cursor-pointer rounded-lg">
                {props.icon}
                <span className="capitalize">{props.title}</span>
          </div>
        </>
    )
}

export default FilterCard