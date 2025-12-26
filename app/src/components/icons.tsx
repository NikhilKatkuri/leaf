interface IconProps {
    width?: string | number;
    height?: string | number;
    color?: string;
    className?: string;
}

export const SettingsIcon = ({
    height = '24px',
    width = '24px',
    color,
    className = '',
}: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            width={width}
            height={height}
            color={color}
            className={className}
        >
            <rect width={'256'} height="256" fill="none" />
            <circle
                cx="128"
                cy="128"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="15"
            />
            <path
                d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="15"
            />
        </svg>
    );
};

export const UserIcon = ({ height = '24px', width = '24px', color, className = '' }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            width={width}
            height={height}
            color={color}
            fill={color}
            className={className}
        >
            <rect width="256" height="256" fill="none" />
            <path d="M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z" />
        </svg>
    );
};

export const FileOpenIcon = ({
    height = '24px',
    width = '24px',
    color,
    className = '',
}: IconProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width={width}
                height={height}
                color={color}
                fill={color}
                className={className}
            >
                <rect width="256" height="256" fill="none" />
                <path
                    d="M200,112v88.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33a8,8,0,0,1,4.8,1.6L120,104h72A8,8,0,0,1,200,112Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                />
                <path
                    d="M200,112v88.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33a8,8,0,0,1,4.8,1.6L120,104h72A8,8,0,0,1,200,112Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                />
                <path
                    d="M64,80V56a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L152,72h72a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H200"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                />
            </svg>
        </>
    );
};
export const SearchIcon = ({
    height = '24px',
    width = '24px',
    color,
    className = '',
}: IconProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width={width}
                height={height}
                color={color}
                fill={color}
                className={className}
            >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
        </>
    );
};
