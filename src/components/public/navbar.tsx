"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Login from "@/components/public/login";
import Signup from "@/components/public/signup";
import ToggleButton from "@/components/toggle-button";
import axios from "axios";

import {
	Sheet,
	SheetTitle,
	SheetTrigger,
	SheetContent,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Heart } from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

export default function Component() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const user = await axios.get("/api/v1/users/", {
					withCredentials: true,
				});
				if (user?.data?.statusCode === 200) {
					setIsLoggedIn(true);
				}
			} catch (error: any) {
				console.log(error);
				setIsLoggedIn(false);
			}
		};

		fetchUser();
	}, []);

	const handleLogout = async () => {
		try {
			await axios.post("/api/v1/users/logout");
			setIsLoggedIn(false);
		} catch (error: any) {
			console.error(error.message);
		}
	};

	return (
		<header className="mx-auto max-w-7xl flex h-16 w-full items-center justify-between px-4 border-b md:px-6 z-50">
			<Link href="/" className="flex items-center gap-2" prefetch={false}>
				<LogoIcon className="h-10 w-10" />
				<span>Visual.ly</span>
			</Link>
			<nav className="hidden items-center gap-6 md:flex">
				{isLoggedIn ? (
					<>
						<Link
							href="/create"
							className="p-2 border-b border-transparent hover:border-black dark:hover:border-white"
						>
							Create
						</Link>
						<Button onClick={handleLogout}>Logout</Button>
					</>
				) : (
					<>
						<Login />
						<Signup />
					</>
				)}
				<Link
					href="https://buymeacoffee.com/aiforeveryone"
					className="p-2 flex gap-2 items-center text-sm font-medium transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg"
					prefetch={false}
					rel="noopener noreferrer"
					target="_blank"
				>
					<Heart className="h-4 w-4" color="#ff0000" />
					Support
				</Link>
				<ToggleButton />
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="md:hidden">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="right">
					<SheetTitle>
						<ToggleButton />
					</SheetTitle>
					<div className="grid gap-4 p-4">
						<Link
							href="/"
							className="text-sm text-center font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
							prefetch={false}
						>
							Home
						</Link>
						{isLoggedIn ? (
							<>
								<Link href="/create" className="px-4 py-2">
									Create
								</Link>
								<Button onClick={handleLogout}>Logout</Button>
							</>
						) : (
							<>
								<Login />
								<Signup />
							</>
						)}
						<Link
							href="https://buymeacoffee.com/aiforeveryone"
							className="p-2 flex gap-2 justify-center items-center text-sm font-medium transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg"
							prefetch={false}
							rel="noopener noreferrer"
							target="_blank"
						>
							<Heart className="h-4 w-4" color="#ff0000" />
							Support
						</Link>
					</div>
				</SheetContent>
			</Sheet>
		</header>
	);
}

const MenuIcon: React.FC<IconProps> = (props) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
};

const LogoIcon: React.FC<IconProps> = (props) => (
	<svg
		fill="none"
		height={24}
		viewBox="0 0 21.333 21.333"
		width={24}
		{...props}
	>
		<path
			clipRule="evenodd"
			d="m11.765 6.753-1.18-2.069-5.898 10.349h2.332zm1.488 2.611-1.18 2.101.856 1.502H11.23l-1.16 2.066h6.415z"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);
