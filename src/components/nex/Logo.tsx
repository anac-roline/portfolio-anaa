import icon from "@/assets/nex-icon-v2.png.asset.json";
import word from "@/assets/nex-word-v2.png.asset.json";

type Props = {
  className?: string;
  withWordmark?: boolean;
  tone?: "default" | "inverse";
  orientation?: "horizontal" | "vertical";
};

export function NexLogo({
  className,
  withWordmark = true,
  orientation = "horizontal",
}: Props) {
  const vertical = orientation === "vertical";

  return (
    <span
      className={`inline-flex ${
        vertical ? "flex-col items-center gap-2.5" : "flex-row items-center gap-2.5"
      }`}
    >
      <img
        src={icon.url}
        alt="NEX"
        width={276}
        height={277}
        className={className ?? (vertical ? "h-14 w-14" : "h-9 w-9")}
      />
      {withWordmark && (
        <img
          src={word.url}
          alt=""
          aria-hidden="true"
          width={403}
          height={127}
          className={vertical ? "h-6 w-auto" : "h-5 w-auto"}
        />
      )}
    </span>
  );
}
