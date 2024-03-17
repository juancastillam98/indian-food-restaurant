import Image from "next/image";

export const ReviewsCard = (props) => {
    return (
        <div className={"w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-r-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"}>
            <div>
                <p className={"text-lightText"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus viverra lobortis. Ut sit amet ullamcorper est.
                </p>
            </div>
            <div className={"flex flex-row justify-center items-center mt-4 gap-4"}>
                <Image
                    src={props.img}
                    alt={`Picture of ${props.name}`}
                    width={100}
                    height={100}
                    style={{
                        borderRadius: '100%',
                        width: '25%',
                    }

                    }
                />
                <p className={"font-semibold"}>{props.name}</p>
            </div>
        </div>
    )
}