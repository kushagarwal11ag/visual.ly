"use client";
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/auth/AuthContext";
import { metadata } from "./metadata";
import "@/styles/globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [authStatus, setAuthStatus] = useState<boolean>(false);
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<title>{metadata.title as string}</title>
				<meta
					name="description"
					content={metadata.description as string}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/logo.svg"
				/>
			</head>
			<body>
				<AuthProvider value={{ authStatus, setAuthStatus }}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
					>
						{children}
					</ThemeProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
