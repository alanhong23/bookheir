import { createSignal, createEffect } from "solid-js";
import { style } from "solid-js/web";
import styles from "./preloader.module.css";
import School from "../../../../school/school";

export default function Preloader() {
    return (
        <>
            <div class={styles.percentage}>100%</div>
            {/* <div>
          <img class={styles.school} src="../asset/school/body.svg" alt="Hin Hua High School" />
          <img class={styles.frame} src="../asset/school/frame.svg" alt="Hin Hua High School" />
        </div> */}
            {/* <School/> */}
        </>
    );
}
