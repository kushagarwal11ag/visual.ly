import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "Visual.ly",
	description: "Generated awesome AI videos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/logo.svg"
				/>
			</head>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
