import style from "./profile_product_card.module.css";

export default function Card() {
    return (
        <>
            <div
                class={style.container}
                style={{
                    background: `linear-gradient(
                360deg,
                rgba(0, 0, 0, 0.85) 0.47%,
                rgba(0, 0, 0, 0) 56.29%
            ),
            url("~/../asset/sample.avif")`,
                    width: `220px`,
                    height: `26.1rem`,
                }}
            >
                <img class={style.edit} src="~/../asset/edit.svg" />
                <h1 class={style.title}>初中三年课本</h1>
            </div>
        </>
    );
}
