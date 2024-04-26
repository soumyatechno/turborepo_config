'use client';

interface AdminProps {
	className?: string;
	appName: string;
}

export const Admin = ({ className, appName }: AdminProps) => {
	return <h1 className={className}>{`Hello from your ${appName} app!`}</h1>;
};
