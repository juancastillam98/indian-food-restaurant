import Image from "next/image";
import img from "../public/about.jpg"
import {Button} from "@/components/Button";
export const About = () => {
    return (
        <section id={"about"} className={"min-h-[500px] my-10 flex flex-col lg:flex-row justify-center items-center md:px-32 px-5"}>
            <Image src={img} alt={"About image"}
                   style={{
                       width: '100%',
                       height: 'auto',
                       borderRadius: '0.5rem'
                   }}
                   width={500}
                   height={300}
            />
            <div className={"space-y-4"}>
                <h2 className={"font-semibold text-4xl text-center md:text-start"}>Why Choose ?</h2>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas libero a quam bibendum facilisis. Curabitur iaculis ultrices commodo. Proin tincidunt massa eget felis tincidunt, non aliquam nibh bibendum. Sed et posuere velit. Etiam sapien ante, fermentum at mi id, feugiat viverra nulla. Aenean eget auctor nulla. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas libero a quam bibendum facilisis. Curabitur iaculis ultrices commodo.  </p>
                <div className={"flex justify-center lg:justify-start"}>
                    <Button title={"Learn more"} />
                </div>
            </div>
        </section>
    )
}