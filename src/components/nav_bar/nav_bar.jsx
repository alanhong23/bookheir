import { useLocation } from "@solidjs/router";
import style from "./nav_bar.module.css";
import { A } from "solid-start";
import { createEffect, createSignal } from "solid-js";

export default function nav_bar() {
    const [status, set_status] = createSignal(
        useLocation().pathname.split("/")[1]
    );

    // createEffect(() => {
    //     // console.log(window.pageYOffset)
    //     console.log(status());
    // });

    return (
        <div class={style.container}>
            <A onClick={() => set_status("")} href="/" id={style.logo}>
                <img src="../asset/logo.svg" alt="" srcset="" />
            </A>
            <A
                onClick={() => set_status("about")}
                classList={{ [style.selected]: status() === "about" }}
                href="/about"
            >
                <h1>关于</h1>
                <svg
                    width="72"
                    height="11"
                    viewBox="0 0 72 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 5.25421C11.6129 3.27912 21.6209 2.64281 31.352 2.23677C39.975 1.87696 47.9632 1.92395 56.5463 2.40028C59.1332 2.54384 61.7144 2.80694 64.2929 3.08403C65.7728 3.24307 67.2575 3.39676 68.7185 3.70833C69.1632 3.80315 69.7409 3.85442 69.9737 4.29547C70.1172 4.56736 69.6388 4.83957 69.3853 4.97179C68.6387 5.36123 67.8305 5.57866 67.0385 5.82648C64.2218 6.70785 62.3004 7.11126 59.3246 7.57303C52.6687 8.60587 45.9996 8.8108 39.3012 9"
                        stroke-width="2.55"
                        stroke-linecap="round"
                    />
                </svg>
            </A>
            <A
                onClick={() => set_status("account")}
                classList={{ [style.selected]: status() === "account" }}
                href="/account"
            >
                <h1>账号</h1>
                <svg
                    width="52"
                    height="11"
                    viewBox="0 0 52 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 7.09497C3.25852 13.7022 10.9845 2.1624 13.2924 4.08566C15.1256 5.61333 13.845 6.35929 16.6294 5.45624C18.5627 4.82924 20.7471 4.19491 22.797 4.59218C24.6004 4.94167 25.9278 6.29728 27.6238 6.85661C29.6127 7.5125 33.6568 3.43502 34.7747 4.473C35.2394 4.90453 35.6519 5.52347 36.2048 5.84358C37.342 6.50194 39.5709 4.86146 40.5698 4.473C41.8869 3.9608 43.0231 3.87709 44.3836 3.87709C46.6391 3.87709 48.0345 3.10558 50 2"
                        stroke-width="2.55"
                        stroke-linecap="round"
                        style="mix-blend-mode:difference"
                    />
                </svg>
            </A>
            <A
                onClick={() => set_status("")}
                classList={{ [style.selected]: status() === "" }}
                href="/"
            >
                <h1>商店</h1>
                <svg
                    width="78"
                    height="14"
                    viewBox="0 0 78 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.07373 12.4275C12.3942 9.65523 22.6858 7.58575 33.2142 5.95315C46.7411 3.8556 60.549 1.72232 74.2326 1.37854C74.9516 1.36047 75.7013 1.21207 76.3894 1.44404C76.5982 1.51444 76.115 1.84535 75.9167 1.94627C74.278 2.77996 69.6193 4.17236 68.6191 4.47923C60.3567 7.01409 51.9907 9.09116 43.7126 11.5541C40.7729 12.4287 41.5916 12.3504 43.2792 12.1C46.7072 11.5912 50.1092 11.2192 53.5609 10.9645C59.6264 10.5169 65.6675 9.52359 71.741 9.28312"
                        stroke-width="2.55387"
                        stroke-linecap="round"
                        style="mix-blend-mode:difference"
                    />
                </svg>
            </A>
            <A
                onClick={() => set_status("sell")}
                classList={{ [style.selected]: status() === "sell" }}
                href="/sell"
            >
                <h1>贩售</h1>
                <svg
                    width="54"
                    height="13"
                    viewBox="0 0 54 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 7.55556C18.6634 4.9468 35.1204 2 52 2"
                        stroke-width="2.55"
                        stroke-linecap="round"
                    />
                    <path
                        d="M13.1111 10.8887C21.0525 9.834 29.0128 9.23701 37 8.6665"
                        stroke-width="2.55"
                        stroke-linecap="round"
                    />
                </svg>
            </A>
        </div>
    );
}
