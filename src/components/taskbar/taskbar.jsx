import { createEffect, createMemo, createSignal } from "solid-js";
import style from "./taskbar.module.css";

const [search, set_search] = createSignal();
const [clear_search, set_clear_search] = createSignal();
const [follow_list, set_follow_list] = createSignal();
// const [grade, set_grade] = createSignal();
// const [subject, set_subject] = createSignal();
// const [other, set_other] = createSignal();
const [sort, set_sort] = createSignal();
const [options_list, set_options_list] = createSignal();
const [active, set_active] = createSignal();

function reset() {
    set_sort();
    set_active();
    set_options_list();
}

function follow() {
    set_follow_list(!follow_list());
}

function grade_option() {
    set_active("grade");
    set_options_list(["高中", "初中"]);
}

function subject_option() {
    set_active("subject");
    set_options_list(["理科", "文商"]);
}

function sort_option() {
    set_sort(!sort());
}

function other_option() {
    set_active("other");
    set_options_list(["参考书", "SPM", "作业", "笔记", "散卖"]);
}

export default function Taskbar() {
    createEffect(() => {
        if (search()) {
            reset();
        }

        // console.log(clear_search(), search());
    });

    //follow icon styling
    const follow_svg_style = createMemo(() => {
        return follow_list() ? "white" : "none";
    });
    const follow_container_style = createMemo(() => {
        return follow_list() ? "0.36rem solid #FFFFFF" : "none";
    });

    return (
        <>
            <div onMouseLeave={[reset]} class={style.taskbar}>
                <Switch>
                    <Match when={options_list()}>
                        <div class={style.option_buttons}>
                            <For each={options_list()}>
                                {(options) => <div>{options}</div>}
                            </For>
                        </div>
                    </Match>
                    <Match when={sort()}>
                        <div class={style.sort_option}>hello</div>
                    </Match>
                </Switch>
                <div class={style.container}>
                    <div
                        onClick={() => set_search(1)}
                        class={search() ? style.on_search : style.search}
                    >
                        <Show when={search()}>
                            <input
                                // onBlur={() => {
                                //     set_search();
                                //     set_clear_search();
                                // }}
                                role="dialog"
                                autofocus
                                onInput={(e) => {
                                    set_clear_search(1);
                                    // createEffect(() => {

                                    // });
                                    if (!clear_search()) {
                                        e.target.value = "";
                                        e.target.focus();
                                    } else if (!e.target.value) {
                                        set_clear_search(0);
                                    }
                                }}
                                class={style.search_text}
                                placeholder={"搜寻"}
                                type="text"
                            />
                        </Show>
                        <Switch
                            fallback={
                                <svg
                                    viewBox="0 0 156 156"
                                    stroke="white"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M69 132C103.794 132 132 103.794 132 69C132 34.2061 103.794 6 69 6C34.2061 6 6 34.2061 6 69C6 103.794 34.2061 132 69 132Z"
                                        stroke-width="12"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M113.55 113.55L150 150"
                                        stroke-width="12"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            }
                        >
                            <Match when={clear_search()}>
                                <svg
                                    viewBox="0 0 120 120"
                                    fill="none"
                                    stroke="white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => {
                                        set_clear_search();
                                    }}
                                >
                                    <path
                                        d="M114 6L6 114"
                                        stroke-width="12"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M114 114L6 6"
                                        stroke-width="12"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </Match>
                        </Switch>
                    </div>
                    <div
                        onClick={[follow]}
                        style={{ "border-bottom": follow_container_style() }}
                        class={
                            search()
                                ? style.on_search_display_none
                                : style.follow
                        }
                    >
                        <svg
                            viewBox="0 0 162 144"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ fill: follow_svg_style() }}
                        >
                            <path
                                d="M81 138C81 138 6 95.9999 6 44.9999C6 35.9841 9.12371 27.2467 14.8397 20.2744C20.5556 13.302 28.5107 8.52545 37.3515 6.75729C46.1922 4.98914 55.3726 6.33864 63.3305 10.5762C71.2884 14.8138 77.5324 21.6776 81 29.9999C84.4676 21.6776 90.7116 14.8138 98.6695 10.5762C106.627 6.33864 115.808 4.98914 124.649 6.75729C133.489 8.52545 141.444 13.302 147.16 20.2744C152.876 27.2467 156 35.9841 156 44.9999C156 95.9999 81 138 81 138Z"
                                stroke="white"
                                stroke-width="12"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <div
                        class={
                            search()
                                ? style.on_search_display_none
                                : style.option
                        }
                    >
                        <div
                            class={style.grade}
                            classList={{ [style.active]: active() === "grade" }}
                            onMouseOver={[grade_option, this]}
                        >
                            <h1>年级</h1>
                            <svg
                                viewBox="0 0 132 72"
                                fill="none"
                                stroke="#D0B29C"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M126 6L66 66L6 6"
                                    stroke-width="15"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div
                            class={style.subject}
                            classList={{
                                [style.active]: active() === "subject",
                            }}
                            onMouseOver={[subject_option, this]}
                        >
                            <h1>选科</h1>
                            <svg
                                viewBox="0 0 132 72"
                                fill="none"
                                stroke="#D0B29C"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M126 6L66 66L6 6"
                                    stroke-width="15"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div
                            class={style.sort}
                            classList={{ [style.active]: active() === "sort" }}
                            onMouseOver={[sort_option, this]}
                        >
                            <h1>排序</h1>
                            <svg
                                viewBox="0 0 132 72"
                                fill="none"
                                stroke="#D0B29C"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M126 6L66 66L6 6"
                                    stroke-width="15"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div
                            class={style.other}
                            classList={{ [style.active]: active() === "other" }}
                            onMouseOver={[other_option, this]}
                        >
                            <h1>其他</h1>
                            <svg
                                viewBox="0 0 132 72"
                                fill="none"
                                stroke="#D0B29C"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M126 6L66 66L6 6"
                                    stroke-width="15"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
