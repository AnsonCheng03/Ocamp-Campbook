import { component$ } from "@builder.io/qwik";
import RegisterSelector from "../components/index/register-selector";
import type { DocumentHead } from "@builder.io/qwik-city";

// https://colorhunt.co/palette/f5f0bbdbdfaab3c89073a9ad
export default component$(() => {
  return (
    <div>
      <RegisterSelector />
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
