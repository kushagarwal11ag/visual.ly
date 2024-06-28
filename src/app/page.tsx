import Link from "next/link";
import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Navbar />
			<section className="my-5 mx-auto max-w-xl flex flex-col gap-5">
				<div className="text-5xl text-justify">
					Create <span className="text-red-600">Educational</span>{" "}
					videos using <span className="text-red-600">AI</span> to{" "}
					<span className="font-bold">self-learn any concept</span> in
					your own language using your favorite characters like Tom
					cruise, Naruto or Shinchan.
				</div>
				<div className="text-2xl text-justify">
					A new way to learn visually and practically from your
					characters so you will remember more. 90% retention promise.
				</div>
				<Card>
					<CardHeader>
						<CardTitle>What can AI do?</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Create your own videos on any concept you want to
							learn in your own language, in your own learning
							style, in your chosen animation and character and if
							you want a celebrity to teach you, we will dub it
							for you. Go for it. Try it now!
						</p>
					</CardContent>
					<CardFooter>
						<Link
							href="/create"
							className="p-2 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 font-semibold rounded-lg"
							prefetch={true}
						>
							Create Now
						</Link>
					</CardFooter>
				</Card>
			</section>
			<Footer />
		</main>
	);
}
