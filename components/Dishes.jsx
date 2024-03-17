import {Cards} from "@/components/Cards";
import {mainDishes} from "@/data/MainDishes";
export const Dishes = () => {
    return (
        <section id={"dishes"} className={"min-h-screen flex flex-col justify-center items-center lg:px-32 px-5"}>
            <h2 className={"text-4xl font-semibold text-center pt-24 pb-10"}>Our main dishes</h2>
            <div className={"flex flex-wrap gap-8 justify-center"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:mt-8"}>
                {mainDishes.map((dish,index)=>(
                    <Cards
                        key={index}
                        img={dish.img}
                        name={dish.name}
                        rating={dish.rating}
                        price={dish.rating}
                    />
                ))}

            </div>

            </div>
        </section>
    )
}