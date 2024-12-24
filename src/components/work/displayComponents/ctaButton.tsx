import { Icon } from "@iconify/react/dist/iconify.js";

type CTAButtonProps = {
  onClick: () => void;
  icon: string;
  tipMessage: string;
  ariaLabel: string;
};

const CTAButton = ({
  onClick,
  icon,
  tipMessage,
  ariaLabel,
}: CTAButtonProps) => (
  <>
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="peer z-1 flex aspect-square size-16 items-center justify-center rounded-full border-2 border-not-black bg-white p-4 shadow-inner shadow-gray-300/80 hover:translate-y-1 hover:scale-105 hover:shadow-none"
    >
      <Icon icon={icon} className="scale-125 text-8xl text-not-black" />
    </button>
    <div className="text-highlight h-fit bg-brand-green text-center !font-homevideo text-lg opacity-0 peer-hover:opacity-100">
      {tipMessage}
    </div>
  </>
);

export default CTAButton;
