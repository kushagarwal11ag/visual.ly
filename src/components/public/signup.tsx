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

const formSchema = z
	.object({
		name: z.string().min(3).max(20),
		email: z.string().email(),
		password: z.string().min(8).max(20),
		confirm: z.string().min(8).max(20),
	})
	.refine((data) => data.password === data.confirm, {
		path: ["confirm"],
		message: "Passwords do not match",
	});

let toastId;

export default function Signup() {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirm: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		toastId = toast.loading("Creating Account");
		try {
			await axios.post("/api/v1/users/register", values);
			toast.success("Signup success", {
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
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel
								className={
									form.formState.errors.email
										? "dark:text-red-500"
										: ""
								}
							>
								Name
							</FormLabel>
							<FormControl>
								<Input placeholder="John Doe" {...field} />
							</FormControl>
							<FormDescription>Enter your name</FormDescription>
							<FormMessage className="dark:text-red-500" />
						</FormItem>
					)}
				/>
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
				<FormField
					control={form.control}
					name="confirm"
					render={({ field }) => (
						<FormItem>
							<FormLabel
								className={
									form.formState.errors.email
										? "dark:text-red-500"
										: ""
								}
							>
								Confirm Password
							</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormDescription>
								Enter your password again for confirmation
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
					<Button>Signup</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Welcome to Visual.ly</DialogTitle>
						<DialogDescription>
							Please create your account
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
				<Button>Signup</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>Welcome to Visual.ly</DrawerTitle>
					<DrawerDescription>
						Please create your account
					</DrawerDescription>
				</DrawerHeader>
				{formComponent}
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
