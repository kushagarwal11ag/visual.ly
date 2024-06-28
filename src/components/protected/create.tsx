import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CreatePage = () => {
	return (
		<>
			<section className="mx-auto max-w-7xl p-5 flex flex-col gap-5">
				<Card>
					<CardHeader>
						<CardTitle>
							Welcome to the new way of learning experience from
							Visual.ly
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>Try out "Angular momentum using Naruto in Hindi"</p>
					</CardContent>
				</Card>
				<section className="grid sm:grid-cols-2 gap-5">
					<Card className="w-full">
						<CardHeader>
							<CardTitle>What is a neural network?</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Call Dexter to teach me AI 101</p>
						</CardContent>
					</Card>
					<Card className="w-full">
						<CardHeader>
							<CardTitle>
								Meet Nilly your Personal Mentor
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>I can invite Tom cruise to mentor you</p>
						</CardContent>
					</Card>
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Explain the python program</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								This method looks hard, can you simplify it in
								English?
							</p>
						</CardContent>
					</Card>
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Understand SLAM Algorithm</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								I have a robotics assignment coming up, can you
								explain using just pictures
							</p>
						</CardContent>
					</Card>
				</section>
				<form className="flex flex-col gap-5">
					<div className="grid sm:grid-cols-6 gap-5">
						<div className="sm:col-span-2 place-self-center sm:place-self-start">
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Celebrity" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>
											Choose a celebrity
										</SelectLabel>
										<SelectItem value="Tom Cruise">
											Tom Cruise
										</SelectItem>
										<SelectItem value="The Rock">
											The Rock
										</SelectItem>
										<SelectItem value="Zendaya">
											Zendaya
										</SelectItem>
										<SelectItem value="Taylor Swift">
											Taylor Swift
										</SelectItem>
										<SelectItem value="Hugh Jackman">
											Hugh Jackman
										</SelectItem>
										<SelectItem value="Drake">Drake</SelectItem>
										<SelectItem value="Mr. Beast">
											Mr. Beast
										</SelectItem>
										<SelectItem value="Amitabh Bachchan">
											Amitabh Bachchan
										</SelectItem>
										<SelectItem value="Narendra Modi">
											Narendra Modi
										</SelectItem>
										<SelectItem value="Sal Khan">
											Sal Khan
										</SelectItem>
										<SelectItem value="3Blue1Brown">
											3Blue1Brown
										</SelectItem>
										<SelectItem value="Joe Rogan">
											Joe Rogan
										</SelectItem>
										<SelectItem value="Elon Musk">
											Elon Musk
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="sm:col-span-2 place-self-center">
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Character" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>
											Choose a character
										</SelectLabel>
										<SelectItem value="Naruto">
											Naruto
										</SelectItem>
										<SelectItem value="Mr. Bean">
											Mr. Bean
										</SelectItem>
										<SelectItem value="Shinchan">
											Shinchan
										</SelectItem>
										<SelectItem value="Doraemon">
											Doraemon
										</SelectItem>
										<SelectItem value="pineapple">
											Dora The Explorer
										</SelectItem>
										<SelectItem value="Oswald">
											Oswald
										</SelectItem>
										<SelectItem value="Popeye">
											Popeye
										</SelectItem>
										<SelectItem value="Noddy">Noddy</SelectItem>
										<SelectItem value="Powerpuff girls">
											Powerpuff girls
										</SelectItem>
										<SelectItem value="Dexter's">
											Dexter's
										</SelectItem>
										<SelectItem value="Rick and Morty">
											Rick and Morty
										</SelectItem>
										<SelectItem value="Simpsons">
											Simpsons
										</SelectItem>
										<SelectItem value="Batman">
											Batman
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="sm:col-span-2 place-self-center sm:place-self-end">
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Style" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>
											Choose a learning style
										</SelectLabel>
										<SelectItem value="Storybook mode">
											Storybook mode
										</SelectItem>
										<SelectItem value="Kurzgesagt">
											Kurzgesagt
										</SelectItem>
										<SelectItem value="Peppa Pig">
											Peppa Pig
										</SelectItem>
										<SelectItem value="Coco Melon">
											Coco Melon
										</SelectItem>
										<SelectItem value="Khan Academy">
											Khan Academy
										</SelectItem>
										<SelectItem value="3Blue1Brown">
											3Blue1Brown
										</SelectItem>
										<SelectItem value="Explain like I'm 5">
											Explain like I'm 5
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="sm:col-span-3 place-self-center">
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Language" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Choose a language</SelectLabel>
										<SelectItem value="English">
											English
										</SelectItem>
										<SelectItem value="Spanish">
											Spanish
										</SelectItem>
										<SelectItem value="French">
											French
										</SelectItem>
										<SelectItem value="German">
											German
										</SelectItem>
										<SelectItem value="Italian">
											Italian
										</SelectItem>
										<SelectItem value="Portuguese">
											Portuguese
										</SelectItem>
										<SelectItem value="Russian">
											Russian
										</SelectItem>
										<SelectItem value="Japanese">
											Japanese
										</SelectItem>
										<SelectItem value="Korean">
											Korean
										</SelectItem>
										<SelectItem value="Chinese">
											Chinese
										</SelectItem>
										<SelectItem value="Arabic">
											Arabic
										</SelectItem>
										<SelectItem value="Hindi">Hindi</SelectItem>
										<SelectItem value="Bengali">
											Bengali
										</SelectItem>
										<SelectItem value="Punjabi">
											Punjabi
										</SelectItem>
										<SelectItem value="Telugu">
											Telugu
										</SelectItem>
										<SelectItem value="Marathi">
											Marathi
										</SelectItem>
										<SelectItem value="Tamil">Tamil</SelectItem>
										<SelectItem value="Urdu">Urdu</SelectItem>
										<SelectItem value="Gujarati">
											Gujarati
										</SelectItem>
										<SelectItem value="Kannada">
											Kannada
										</SelectItem>
										<SelectItem value="Malayalam">
											Malayalam
										</SelectItem>
										<SelectItem value="Oriya">Oriya</SelectItem>
										<SelectItem value="Assamese">
											Assamese
										</SelectItem>
										<SelectItem value="Sindhi">
											Sindhi
										</SelectItem>
										<SelectItem value="Pashto">
											Pashto
										</SelectItem>
										<SelectItem value="Persian">
											Persian
										</SelectItem>
										<SelectItem value="Turkish">
											Turkish
										</SelectItem>
										<SelectItem value="Vietnamese">
											Vietnamese
										</SelectItem>
										<SelectItem value="Thai">Thai</SelectItem>
										<SelectItem value="Malay">Malay</SelectItem>
										<SelectItem value="Filipino">
											Filipino
										</SelectItem>
										<SelectItem value="Indonesian">
											Indonesian
										</SelectItem>
										<SelectItem value="Swahili">
											Swahili
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="sm:col-span-3 place-self-center">
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Animation" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>
											Choose an animation style
										</SelectLabel>
										<SelectItem value="Retro">Retro</SelectItem>
										<SelectItem value="Modern">
											Modern
										</SelectItem>
										<SelectItem value="Cartoon">
											Cartoon
										</SelectItem>
										<SelectItem value="Anime">Anime</SelectItem>
										<SelectItem value="3D">3D</SelectItem>
										<SelectItem value="Black and White">
											Black and White
										</SelectItem>
										<SelectItem value="Colorful">
											Colorful
										</SelectItem>
										<SelectItem value="Monochrome">
											Monochrome
										</SelectItem>
										<SelectItem value="Sketch">
											Sketch
										</SelectItem>
										<SelectItem value="Painting">
											Painting
										</SelectItem>
										<SelectItem value="Water Color">
											Water Color
										</SelectItem>
										<SelectItem value="Pencil">
											Pencil
										</SelectItem>
										<SelectItem value="Digital">
											Digital
										</SelectItem>
										<SelectItem value="Hand Drawn">
											Hand Drawn
										</SelectItem>
										<SelectItem value="Stop Motion">
											Stop Motion
										</SelectItem>
										<SelectItem value="Motion Graphics">
											Motion Graphics
										</SelectItem>
										<SelectItem value="Claymation">
											Claymation
										</SelectItem>
										<SelectItem value="Sand Animation">
											Sand Animation
										</SelectItem>
										<SelectItem value="Cut Out">
											Cut Out
										</SelectItem>
										<SelectItem value="Pixel Art">
											Pixel Art
										</SelectItem>
										<SelectItem value="Vector Art">
											Vector Art
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="grid w-full gap-2">
						<Textarea placeholder="What would you like to learn today?" />
						<Button>Visualize</Button>
					</div>
				</form>
			</section>
		</>
	);
};

export default CreatePage;
