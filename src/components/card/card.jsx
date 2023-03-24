import style from "./card.module.css";
import { A } from "solid-start";

export default function Card() {
    return (
        <>
            <div class={style.container}>
                <A class={style.image} href="/product">
                    <img src="~/../asset/sample.avif" />
                </A>
                <A class={style.title} href="/product">
                    <h2>初中三年课本</h2>
                </A>
                <h2 class={style.year}>&lt1 年</h2>
                <h2 class={style.price}>RM 100</h2>
                <svg
                    class={style.heart}
                    viewBox="0 0 162 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="black"
                >
                    <path
                        d="M81 138C81 138 6 95.9999 6 44.9999C6 35.9841 9.12371 27.2467 14.8397 20.2744C20.5556 13.302 28.5107 8.52545 37.3515 6.75729C46.1922 4.98914 55.3726 6.33864 63.3305 10.5762C71.2884 14.8138 77.5324 21.6776 81 29.9999C84.4676 21.6776 90.7116 14.8138 98.6695 10.5762C106.627 6.33864 115.808 4.98914 124.649 6.75729C133.489 8.52545 141.444 13.302 147.16 20.2744C152.876 27.2467 156 35.9841 156 44.9999C156 95.9999 81 138 81 138Z"
                        stroke-width="12"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </>
    );
}
