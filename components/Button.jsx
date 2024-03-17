export const Button = (props) => {
    return (

        <button className={" flex items-center px-3.5 py-1 border-2 border-bright text-bright hover:text-dark hover:bg-bright transition-all rounded-lg hover:border-dark"}>
            {props.title}
            {props.icon?(props.icon):""}
        </button>
    )
}