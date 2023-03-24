// @refresh reload
import { onMount, createEffect, Suspense } from "solid-js";
import {
    A,
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from "solid-start";
import "./root.css";
import Footer from "~/components/footer/footer";
import Nav_bar from "~/components/nav_bar/nav_bar";

let drawing = false;
let canvas;

function start_position() {
    drawing = true;
    console.log("start");
}

function end_position() {
    const ctx = canvas.getContext("2d");
    drawing = false;
    ctx.beginPath();
    console.log("end");
}

function draw(e) {
    const ctx = canvas.getContext("2d");

    if (!drawing) return;

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

export default function Root() {
    // onMount(()=>{
    //     canvas.height = window.innerHeight
    //     canvas.width = window.innerWidth
    // })

    return (
        <Html lang="en">
            <Head>
                <Title>Book Heir</Title>
                <Meta charset="utf-8" />
                <Meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="shortcut icon" href="~/../asset/icon.svg" />
            </Head>
            <Body
            // onMouseDown={[start_position]}
            // onMouseUp={[end_position]}
            // onMouseMove={[draw, this]}
            >
                <Suspense>
                    <Nav_bar />
                    <ErrorBoundary>
                        <Routes>
                            <FileRoutes />
                        </Routes>
                    </ErrorBoundary>
                    <Footer />
                </Suspense>
                <Scripts />
                {/* <canvas ref={canvas}></canvas> */}
            </Body>
        </Html>
    );
}
