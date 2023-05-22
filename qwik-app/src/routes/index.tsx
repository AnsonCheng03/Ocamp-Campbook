import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useAuthSession } from "~/routes/plugin@auth";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import RegisterSelector from "~/components/login/loginForm";

// https://colorhunt.co/palette/f5f0bbdbdfaab3c89073a9ad
export default component$(() => {
  const session = useAuthSession();
  // const nav = useNavigate();

  // useVisibleTask$(async ({ track }) => {
  //   track(() => session.value);
  //   const value = session.value;
  //   console.log("session.value", value);
  //   if (value) {
  //     await nav("/controlPanel");
  //   }
  // });

  return (
    <div class="userAuth">{session.value ? <></> : <RegisterSelector />}</div>
  );
});

export const head: DocumentHead = {
  title: "OCamp CampBook",
  meta: [
    {
      name: "description",
      content: "This is a e-version of the OCamp CampBook",
    },
  ],
};
