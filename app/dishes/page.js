"use client"
import {Button} from "@/components/Button";
import {dishes} from "@/data/dishes";
import {useState} from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import {Cards} from "@/components/Cards";
import {CardsDishes} from "@/components/ui/CardsDishes";
//create a new array with the categories and include a new category called "all projects"

const uniqueCategories = ["all dishes", ...new Set(dishes.map(dish => dish.category))];

export  default function Dishes(){
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState("all dishes");

    //list all the dishes of each category
    const dishesCategory = dishes.filter(dish =>(
        category === "all dishes" ? dish : dish.category === category));

    return(
        <section id={"menu-dishes"} className={"py-20 min-h-screen max-w-screen-2xl mx-auto"}>
            <div className={"flex flex-col justify-between items-center lg:px-32 px-5 mt-10"}>
                <div className={"w-full"}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1 className={"font-semibold text-6xl mt-12 md:mt-2"}>Look at our menu</h1>
                </div>
                <div className={"flex flex-wrap gap-8 justify-center w-full"}>
                    <Tabs defaultValue={category} className={"mb-24 xl:mb-48 w-full"}>
                        <TabsList className={" left-0 flex flex-wrap w-full justify-start my-5 gap-x-3 gap-y-3 z-10"}>
                            {categories.map((category, index)=>(
                                <TabsTrigger
                                    key={index}
                                    value={category}
                                    className={"capitalize flex-grow basis-16"}
                                    onClick={()=>setCategory(category)}
                                >
                                    <span>{category}</span>
                                </TabsTrigger>

                            ))}
                        </TabsList>
                        <div className={"xl:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center"}>
                            {dishesCategory.map((dish, index)=>(
                                <TabsContent
                                    key={index}
                                    value={category}
                                >
                                    <CardsDishes
                                        dish={dish}
                                    />
                                </TabsContent>
                            ))}
                        </div>

                    </Tabs>

                </div>
            </div>
        </section>
    )
}