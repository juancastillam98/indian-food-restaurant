import {BsStarFill, BsStarHalf} from "react-icons/bs";
import {Button} from "@/components/Button";
import Image from "next/image";

export const Cards = (props) => {

    return (
        <div className={"w-full p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg"}>
            <Image src={props.img} alt={`Picture of ${props.img}`}
                   style={{
                        width: '100%',
                        height: '220px',
                       borderRadius: '0.5rem'
                    }}
                   width={500}
                   height={300}/>
            <div className={"space-y-4"}>
                <h3 className={"font-semibold text-center text-xl pt-6"}>
                    {props.name}
                </h3>
                <div className={"flex flex-row justify-center"}>
                    <BsStarFill className={"text-bright"}/>
                    <BsStarFill className={"text-bright"}/>
                    <BsStarFill className={"text-bright"}/>
                    <BsStarFill className={"text-bright"}/>
                    <BsStarHalf className={"text-bright"}/>
                </div>
                <div className={"flex flex-row items-center justify-center gap-4"}>
                    <h4 className={"font-semibold text-lg"}>{props.price}</h4>
                    <Button title={"Buy now"}/>
                </div>
            </div>
        </div>
    )
}