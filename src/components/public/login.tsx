"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8).max(20),
});

let toastId;

export default function Login() {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		toastId = toast.loading("Authenticating");
		try {
			await axios.post("/api/v1/users/login", values);
			toast.success("Login successful", {
				id: toastId,
			});
			router.push("/create");
		} catch (error: any) {
			console.log(error?.response?.data?.message);
			toast.error("Error", { id: toastId });
		}
	}

	const formComponent = (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={`space-y-4 ${!isDesktop && "px-4 py-2"}`}
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel
								className={
									form.formState.errors.email
										? "dark:text-red-500"
										: ""
								}
							>
								Email
							</FormLabel>
							<FormControl>
								<Input
									placeholder="mail@example.com"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Enter your email address
							</FormDescription>
							<FormMessage className="dark:text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel
								className={
									form.formState.errors.email
										? "dark:text-red-500"
										: ""
								}
							>
								Password
							</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormDescription>
								Enter your password
							</FormDescription>
							<FormMessage className="dark:text-red-500" />
						</FormItem>
					)}
				/>
				<Button type="submit" className={!isDesktop ? "w-full" : ""}>
					Submit
				</Button>
			</form>
		</Form>
	);

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<Toaster />
				<DialogTrigger asChild>
					<Button variant="link">Login</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Welcome Back</DialogTitle>
						<DialogDescription>
							Please sign in your account
						</DialogDescription>
					</DialogHeader>
					{formComponent}
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
				<Toaster />
			<DrawerTrigger asChild>
				<Button variant="outline">Login</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>Welcome Back</DrawerTitle>
					<DrawerDescription>
						Please sign in your account
					</DrawerDescription>
				</DrawerHeader>
				{formComponent}
			</DrawerContent>
		</Drawer>
	);
}
