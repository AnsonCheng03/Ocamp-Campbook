import { component$ } from "@builder.io/qwik";
import { useAuthSession } from "~/routes/plugin@auth";
import type { DocumentHead } from "@builder.io/qwik-city";
import RegisterSelector from "~/components/login/loginForm";
import ControlPanel from "~/routes/controlPanel/controlPanel";

// https://colorhunt.co/palette/f5f0bbdbdfaab3c89073a9ad
export default component$(() => {
  const session = useAuthSession();

  return (
    <div class="userAuth">
      {session.value ? <ControlPanel /> : <RegisterSelector />}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
