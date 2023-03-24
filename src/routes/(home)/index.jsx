import style from "./index.module.css";
import Card from "~/components/card/card";
import Taskbar from "~/components/taskbar/taskbar";

export default function Home() {
    return (
        <>
            <div class={style.items_container}>
                <div class={style.items}>
                    <For each={[...Array(13).keys()]}>{() => <Card />}</For>
                </div>
                <Taskbar />
            </div>
        </>
    );
}
