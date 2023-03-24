import style from "./index.module.css";
import Card from "~/components/profile_product_card/profile_product_card";

export default function Sell() {
    const count = 5;
    const width = count < 5 ? `auto` : `100%`;

    return (
        <>
            <div class={style.container}>
                <div class={style.details_container}>
                    <h1 class={style.details}>个人资料</h1>
                    <svg
                        class={style.line1}
                        width="2"
                        height="238"
                        viewBox="0 0 2 238"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="0.616447"
                            y1="0.280151"
                            x2="0.616437"
                            y2="237.234"
                            stroke="#56331A"
                            stroke-width="0.800521"
                            stroke-dasharray="4 4"
                        />
                    </svg>
                </div>
                <div class={style.profile}>
                    <img class={style.profile_pic} src="" />
                    <div class={style.username}>
                        <h2>用户名称</h2>
                        <h1>Username</h1>
                    </div>
                    <div class={style.email}>
                        <h2>Email</h2>
                        <h1>Username@hinhua.edu.my</h1>
                    </div>
                    <div class={style.whatsapp}>
                        <h2>Whatsapp</h2>
                        <h1>+60 12-345 6789</h1>
                    </div>
                    <div class={style.messenger}>
                        <h2>Messenger</h2>
                        <h1>User.name1234</h1>
                    </div>
                    <h3 class={style.whatsapp_edit}>编辑</h3>
                    <h4 class={style.whatsapp_delete}>移除</h4>
                    <h3 class={style.messenger_edit}>编辑</h3>
                    <h4 class={style.messenger_delete}>移除</h4>
                </div>
                <div class={style.products_container}>
                    <h1 class={style.products}>商品</h1>
                    <svg
                        class={style.line2}
                        width="2"
                        height="238"
                        viewBox="0 0 2 238"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="0.616447"
                            y1="0.280151"
                            x2="0.616437"
                            y2="237.234"
                            stroke="#56331A"
                            stroke-width="0.800521"
                            stroke-dasharray="4 4"
                        />
                    </svg>
                </div>
                <div
                    class={style.products_card}
                    style={{
                        width: width,
                    }}
                >
                    <For each={[...Array(count).keys()]}>{() => <Card />}</For>
                </div>
            </div>
        </>
    );
}
