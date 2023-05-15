import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import PlaceHolder from "./components/placeholder";
import style from "./register-selector.module.css";

export default component$(() => {
  return (
    <div class={style.box}>
      <PlaceHolder />
      {/* <Login />
      <Register /> */}
    </div>
  );
});
