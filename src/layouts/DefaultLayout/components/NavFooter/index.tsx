import More from "@/layouts/DefaultLayout/components/NavFooter/components/More";
import Pin from "@/layouts/DefaultLayout/components/NavFooter/components/Pin";

function NavFooter() {
  return (
    <ul className="flex flex-col gap-1 pb-[15px]">
      <Pin />
      <More />
    </ul>
  );
}

export default NavFooter;
