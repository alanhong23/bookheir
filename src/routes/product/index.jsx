import style from "./index.module.css";

export default function Product() {
    return (
        <>
            <div class={style.container}>
                <div class={style.images_container}>
                    <div class={style.previews}>
                        <img
                            class={style.magnified}
                            src="~/../asset/sample.avif"
                        />
                        <For each={[...Array(5).keys()]}>
                            {() => <img src="~/../asset/sample.avif" />}
                        </For>
                    </div>
                    <img
                        class={style.large_image}
                        src="~/../asset/sample.avif"
                    />
                </div>
                <div class={style.right_container}>
                    <div class={style.account}>
                        <img
                            class={style.profile_pic}
                            src="~/../asset/sample.avif"
                        />
                        <h1>Y69 林治平</h1>
                    </div>
                    <h1>初中三年课本</h1>
                    <h2>
                        <p>RM</p> 500
                    </h2>
                    <h3>使用年龄</h3>
                    <h4>&lt1</h4>
                    <h3>物品状况</h3>
                    <h4>4.5/5</h4>
                    <h3>交货方式</h3>
                    <h4>面交 / 邮寄</h4>
                    <h3>简介</h3>
                    <h4>
                        升高中了没有用了，保存完好点进去看年到两千年点进去看了大家看起来的机器接地气科技大窘启动机器哦大家启动机器觉得穷的集群搭
                    </h4>
                    <div class={style.section1}>
                        <h5>初一</h5>
                        <svg
                            viewBox="0 0 120 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            transform="rotate(45)"
                        >
                            <path
                                d="M114 6L6 114"
                                stroke="black"
                                stroke-width="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M114 114L6 6"
                                stroke="black"
                                stroke-width="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div class={style.bottom_section}>
                <h1>初中三年课本</h1>
                <div>
                    <h2>
                        <p>RM</p>500
                    </h2>
                    <button>联系卖家</button>
                </div>
            </div>
        </>
    );
}
