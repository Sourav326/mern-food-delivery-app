const PageHeader = (props) => {
    return(
        <>
        <div className="h-52 w-full bg-[#feffcb] flex items-center justify-center">
            <h2 className="logo-text-second capitalize text-4xl lg:text-6xl font-extrabold text-center lg:text-left">{props.title}</h2>
        </div>
        </>
    )
}

export default PageHeader