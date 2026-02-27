declare module "aos" {
  interface AOSOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    offset?: number;
    delay?: number;
    anchor?: string;
    anchorPlacement?: string;
    disable?: boolean | string | (() => boolean);
    startEvent?: string;
    animatedClassName?: string;
    initClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    debounceDelay?: number;
    throttleDelay?: number;
    mirror?: boolean;
  }

  const AOS: {
    init(options?: AOSOptions): void;
    refresh(hard?: boolean): void;
    refreshHard(): void;
  };

  export default AOS;
}

declare module "aos/dist/aos.css";
