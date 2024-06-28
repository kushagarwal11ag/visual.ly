"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";

const ProtectedLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const router = useRouter();
	useEffect(() => {
		const fetchUser = async () => {
			try {
				await axios.get("/api/v1/users/", {
					withCredentials: true,
				});
			} catch (error: any) {
				if (error.response.status == 401) {
					router.push("/");
				}
			}
		};
		fetchUser();
	}, []);

	return (
		<>
			<Navbar />
			{children}
            <Footer />
		</>
	);
};

export default ProtectedLayout;
