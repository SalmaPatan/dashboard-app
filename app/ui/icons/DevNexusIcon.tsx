import * as React from "react";

export const DevNexusIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ title = "DevNexus Logo", titleId, ...props }, ref) => (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-labelledby={titleId}
            role="img"
            {...props}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <path d="M10 10 H22 A6 6 0 0 1 22 34 H10 V10 Z" fill="currentColor" />
            <path d="M26 10 L38 24 L26 38" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
);

DevNexusIcon.displayName = "DevNexusIcon";
