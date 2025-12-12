import { toPng } from "html-to-image";

// Helper function để capture image
export const captureImage = async (captureRef: any) => {
    if (!captureRef.current) {
        throw new Error("Capture reference not found");
    }

    await document.fonts.ready;

    const images = captureRef.current.querySelectorAll("img");
    await Promise.all(
        Array.from(images).map((img: any) => {
            if (img.complete) return Promise.resolve();
            return new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
            });
        }),
    );

    await new Promise((resolve) => setTimeout(resolve, 300));

    const dataUrl = await toPng(captureRef.current, {
        quality: 0.95,
        pixelRatio: 2,
        cacheBust: true,
        skipFonts: true,
    });

    return dataUrl;
};
