import {Button} from "@/components/Button";

export const Hero = () => {
    return (
        <section id={"hero"} className={'min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-hero bg-cover bg-no-repeat'}>
                <div className={"w-full lg:w-6/12 space-y-5"}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1 className={"text-background font-semibold text-6xl"}>Best indian food you've ever taste</h1>
                    <p className={"text-background"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus viverra lobortis. Ut sit amet ullamcorper est.</p>
                    <div className={"lg:pl-44"}>
                        <Button title={"Order now"}/>
                    </div>
                </div>
        </section>

    )
}