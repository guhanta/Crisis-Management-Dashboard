declare module '*.tsx' {
    const content: any;
    export default content;
}

declare module './CrisisMetricsPanel' {
    import { FC } from 'react';
    const CrisisMetricsPanel: FC;
    export default CrisisMetricsPanel;
}

declare module './Metrics' {
    import { FC } from 'react';
    const CrisisMetrics: FC;
    export { CrisisMetrics };
} 