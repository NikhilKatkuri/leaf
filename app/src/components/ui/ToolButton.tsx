import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from './button';
import { type VariantProps } from 'class-variance-authority';

interface ToolButtonProps extends VariantProps<typeof Button> {
    children: React.ReactNode;
    tooltip?: string;
    tooltipSide?: 'top' | 'right' | 'bottom' | 'left';
    iconSize?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    'aria-label'?: string;
}

const iconSizeClasses = {
    sm: "[&_svg:not([class*='size-'])]:size-4",
    md: "[&_svg:not([class*='size-'])]:size-5",
    lg: "[&_svg:not([class*='size-'])]:size-6",
    xl: "[&_svg:not([class*='size-'])]:size-7",
};

const ToolButton = ({
    children,
    tooltip,
    tooltipSide = 'right',
    iconSize = 'md',
    variant = 'ghost',
    size = 'icon',
    className,
    onClick,
    disabled,
    'aria-label': ariaLabel,
    ...props
}: ToolButtonProps) => {
    const button = (
        <Button
            variant={variant}
            size={size}
            className={`${iconSizeClasses[iconSize]} text-(--activity-bar-foreground) ${className || ''}`}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            {...props}
        >
            {children}
        </Button>
    );

    if (!tooltip) {
        return button;
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent side={tooltipSide}>
                <p>{tooltip}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default ToolButton;
