import Link from "next/link";

const Footer = () => {
	return (
		<section className="mt-auto text-center">
            <Link
                href="https://buymeacoffee.com/aiforeveryone"
                prefetch={false}
                rel="noopener noreferrer"
                target="_blank"
            >
                Powered by <span className="text-red-600">NotSoHuman AI</span>
            </Link>
        </section>
	);
};

export default Footer;
