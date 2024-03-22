"use client"
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import styles from "../../app/custom.module.css";


export const CardsDishes = ({ dish }) => {
    const { img, name, description, rating, price } = dish;
    const [flipped, setFlipped] = useState(false);
    const [count, setCount] = useState(0);

    const handleFlip = () => {
        setFlipped(!flipped);

    };

    return (
       <article className="h-[360px] max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">


            <div className="group [perspective:1000px] ">
                <div
                    className={`relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] ${ flipped ? "[transform:rotateY(180deg)] [transform-style:preserve-3d]" : ""}`}>

                    {/*front card*/}
                    <div className="absolute inset-0">
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

                    </div>

                    {/*back card*/}
                    <div
                        className="absolute inset-0 h-[250px] w-full rounded-t-xl text-center text-dark [transform:rotateY(180deg)] [backface-visibility:hidden] p-5 bg-white">
                            <p>{description}</p>
                    </div>

                </div>
            </div>

            <div className={`${styles.padre}  flex justify-center flex-col items-center w-full py-3 gap-y-2`}>
                <div className="px-5 pt-3 pb-1 flex items-center [transform-style:preserve-3d]">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h3>
                    <span className={"pl-2 font-bold"}>{`${price}€`}</span>
                </div>
                <button
                    className={`flex items-center px-4 py-2 border-2 border-dark rounded-md text-brigh ${styles.hijo} max-w-48`}
                    onClick={handleFlip}
                >
                    {flipped ? "Go back" : "See description"}
                    <svg className={`w-3.5 h-3.5 ${flipped ? "rtl:rotate-180" : ""} ms-2`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={flipped ? "M13 5H1m0 0l4-4M1 5l4 4" : "M1 5h12m0 0L9 1m4 4L9 9"} />
                    </svg>
                </button>

            </div>
        </article>
    );
};
