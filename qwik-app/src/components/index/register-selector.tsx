import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import {
  useAuthSession,
  useAuthSignin,
  useAuthSignout,
} from "~/routes/plugin@auth";

export default component$(() => {
  const signIn = useAuthSignin();
  const signOut = useAuthSignout();
  const session = useAuthSession();

  return (
    <div class="userAuth">
      {session.value?.user ? (
        <button onClick$={() => signOut.submit({ callbackUrl: "/" })}>
          Sign Out
        </button>
      ) : (
        <button
          onClick$={() =>
            signIn.submit({
              options: {
                callbackUrl: "/",
              },
            })
          }
        >
          Sign In
        </button>
      )}
    </div>
  );
});
