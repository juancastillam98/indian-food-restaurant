"use client"
import {useState} from "react";
import Image from "next/image";
import {Button} from "@/components/Button";
export const CardsDishes = ({dish}) => {
    const {img, name, description, rating, price} = dish;
    const [flipped, setFlipped] = useState(false);
    const handleFlip=() => {
    setFlipped(!flipped)
    }
    return (
        <article
            className={`h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between`}
            onClick={handleFlip}
        >
            {!flipped ? (
                <div className={"transition-opacity duration-500"}>
                    <Image src={img} alt={`Picture of ${name}`}
                           style={{
                               width: '100%',
                               height: '250px',
                               borderTopLeftRadius: '0.5rem',
                               borderTopRightRadius: '0.5rem',
                               objectFit: 'cover'
                           }}
                           width={500}
                           height={250}
                    />
                    <div className="px-5 pt-3 pb-1 flex items-center">

                            <h3 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                                style={{
                                    fontSize: "1.7vw"
                                }}
                            >
                                {name}
                            </h3>
                            <span className={"pl-2 font-bold"}>{`${price}€`}</span>
                    </div>
                </div>
            ):(
                <div className={"p-5"}>
                    <p>{description}</p>
                </div>
            )}

                <div className={"px-5 py-3"}>
                    <Button
                        title={"Touch to see more"}
                        icon={
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        }
                        onClick={handleFlip}
                    />
                </div>


        </article>

    )
}