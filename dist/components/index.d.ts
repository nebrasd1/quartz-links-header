import { QuartzComponent, QuartzComponentConstructor } from '@quartz-community/types';

interface ExampleComponentOptions {
    prefix?: string;
    suffix?: string;
    className?: string;
}
declare const _default: (opts?: ExampleComponentOptions) => QuartzComponent;

declare const LinksHeader: QuartzComponentConstructor;

export { _default as ExampleComponent, type ExampleComponentOptions, LinksHeader };
