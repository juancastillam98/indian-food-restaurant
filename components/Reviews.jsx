import {ReviewsCard} from "@/components/ReviewsCard";
import pict1 from "/public/pic1.png";
import pict2 from "/public/pic2.png";
import pict3 from "/public/pic3.png";
export const Reviews = () => {
    return (
    <section id={"reviews"} className={"min-h-[500px] flex flex-col items-center justify-center md:px-32 px-5"}>
            <h2 className={"text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10"}>Customer's Review</h2>
            <div className={"flex flex-col md:flex-row gap-5 mt-5"}>
                <ReviewsCard img={pict1} name={"Angela Teller"}/>
                <ReviewsCard img={pict2} name={"James Stun"}/>
                <ReviewsCard img={pict3} name={"Max Blue"}/>
            </div>
        </section>
    )
}