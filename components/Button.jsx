import styles from "../app/custom.module.css";

export const Button = (props) => {
    return (
        <div className={` w-full ${styles.padre} border-2 border-dark rounded-md flex justify-center`}>
            <button className={`flex items-center px-4 py-2 text-brigh ${styles.hijo}`}
            >
                {props.title}
                {props.icon ? (props.icon) : ""}
            </button>
        </div>

    )
}