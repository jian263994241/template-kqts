declare module 'react-stickky' {}

declare global {
  interface Window {
    __ENV__: {
      name: 'st02' | 'prod';
    };
    app: typeof router;
    wx: any;
    _hmt: {
      push(
        arg: [
          '_trackEvent',
          category: string,
          action: string,
          opt_label?: string,
          opt_value?: number
        ]
      ): void;
      push(arg: ['_trackPageview', pageURL: string]): void;
    };
  }

  namespace JSX {
    interface IntrinsicElements {
      'wx-open-launch-weapp': {
        username: string;
        path: string;
        ref?: React.RefObject<HTMLElement>;
        children: React.ReactNode;
      };
    }
  }
}
