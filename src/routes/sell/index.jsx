import style from "./index.module.css";

function auto_grow(element) {
    element.target.style.height = "4rem";
    element.target.style.height = element.target.scrollHeight / 10 + "rem";
}

function price(element) {
    element.value = "0.00";
}

export default function Sell() {
    return (
        <>
            <div class={style.wrapper}>
                <div class={style.container}>
                    <h1>新增商品</h1>
                    <div>
                        <h3>商品名称</h3>
                        <textarea
                            class={style.product_name}
                            onInput={[auto_grow, this]}
                            type="text"
                        />
                    </div>
                    <div>
                        <h3>简介</h3>
                        <textarea
                            class={style.description}
                            onInput={[auto_grow, this]}
                            type="text"
                        />
                    </div>
                    <div>
                        <h3>价格</h3>
                        <div class={style.price}>
                            <h4>RM</h4>
                            <input value="0.00" type="number" />
                        </div>
                    </div>
                    <div>
                        <h3>联系方式</h3>
                        <div class={style.contact}>
                            <button id={style.default_email}>
                                2017000@hinhua.edu.my (预设)
                            </button>
                            <button>Messenger</button>
                            <div class={style.add_contact}>
                                <svg
                                    viewBox="0 0 120 120"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
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
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>细节</h3>
                        <div class={style.details}>
                            <button>初中</button>
                            <button>选科</button>
                            <button>使用年份</button>
                        </div>
                    </div>
                    <div>
                        <h3>标签</h3>
                        <div class={style.tags}>
                            <button>散卖</button>
                            <button>SPM</button>
                            <button>作业</button>
                            <button>笔记</button>
                            <button>参考书</button>
                        </div>
                    </div>
                    <div>
                        <h3>物品情况</h3>
                        <div class={style.condition}>
                            <button>使用年龄</button>
                            <button>物品状况</button>
                        </div>
                    </div>
                    <div>
                        <h3>交货方式</h3>
                        <div class={style.method}>
                            <button>面交</button>
                            <button>邮寄</button>
                        </div>
                    </div>
                    <div>
                        <h3>照片</h3>
                        <div class={style.img_wrapper}>
                            <div class={style.img}>
                                <svg
                                    viewBox="0 0 120 120"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
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
                                <h4>IMG1239081903.png</h4>
                            </div>
                            <div class={style.img}>
                                <svg
                                    viewBox="0 0 120 120"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
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
                                <h4>IMG1239081903.png</h4>
                            </div>
                            <div class={style.add_img}>
                                <svg
                                    viewBox="0 0 120 120"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
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
                                <h5>增添照片</h5>
                            </div>
                        </div>
                    </div>
                    <div class={style.control}>
                        <h2 class={style.comfirm}>确定</h2>
                        <h2 class={style.sole}>已贩售</h2>
                        <h2 class={style.cancel}>取消</h2>
                    </div>
                </div>
                <div class={style.coming_soon}>COMING SOON</div>
            </div>
        </>
    );
}
