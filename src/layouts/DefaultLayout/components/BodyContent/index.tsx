import { forwardRef } from "react";

const BodyContent = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <main
      ref={ref}
      id="feed-container"
      className="bg-background overflow-y-hidden rounded-tl-xl rounded-tr-xl border p-4 shadow"
    >
      Body Content
      {/* Nội dung dài để test scroll */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="mb-2 rounded bg-gray-200 p-4">
          Item {i + 1}
        </div>
      ))}
    </main>
  );
});

BodyContent.displayName = "BodyContent"; // tốt cho devtools

export default BodyContent;
