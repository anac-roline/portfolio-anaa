import iconIndigo from "@/assets/nex-icon.png.asset.json";
import iconLight from "@/assets/nex-icon-light.png.asset.json";
import wordIndigo from "@/assets/nex-word.png.asset.json";
import wordLight from "@/assets/nex-word-light.png.asset.json";

type Props = {
  className?: string;
  withWordmark?: boolean;
  tone?: "default" | "inverse";
  orientation?: "horizontal" | "vertical";
};

export function NexLogo({
  className,
  withWordmark = true,
  tone = "default",
  orientation = "horizontal",
}: Props) {
  const inverse = tone === "inverse";
  const vertical = orientation === "vertical";

  return (
    <span
      className={`inline-flex ${
        vertical ? "flex-col items-center gap-3" : "flex-row items-center gap-2.5"
      }`}
    >
      <img
        src={inverse ? iconLight.url : iconIndigo.url}
        alt="NEX"
        width={201}
        height={201}
        className={className ?? (vertical ? "h-14 w-14" : "h-9 w-9")}
      />
      {withWordmark && (
        <img
          src={inverse ? wordLight.url : wordIndigo.url}
          alt=""
          aria-hidden="true"
          width={366}
          height={201}
          className={vertical ? "h-6 w-auto" : "h-5 w-auto"}
        />
      )}
    </span>
  );
}
