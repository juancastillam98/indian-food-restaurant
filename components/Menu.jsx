import {Cards} from "@/components/Cards";
import prawn_balti from "/public/dishes/prawn/prawn_balti.webp";
import chicken_mango from "/public/dishes/chicken/chicken_mango.webp";
import chicken_cheese_tikka from "/public/dishes/tandori/chicken_cheese_tikka.webp";

export const Menu = () => {
    return (
        <section id={"menu"} className={"min-h-[500px] flex flex-col justify-center items-center lg:px-32 px-5"}>
            <h2 className={"text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10"}>
                Premium Menu
            </h2>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:mt-8"}>
                <Cards img={prawn_balti } tittle={"Delicius Dish"} price={"$5.99"}/>
                <Cards img={chicken_mango} tittle={"Delicius Dish"} price={"$9.99"}/>
                <Cards img={chicken_cheese_tikka} tittle={"Delicius Dish"} price={"$4.99"}/>
            </div>
        </section>
    )
}