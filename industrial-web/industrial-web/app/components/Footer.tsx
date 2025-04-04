import Link from "next/link";

export default function Footer() {

    const footerLinks = [
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/privacy", label: "Privacy Policy" },
    ];

    return (
        <footer className="bg-background text-muted p-6 border-t-0.2 border-mutedBackground">
            <div className="md:flex justify-between items-center">
                <div>
                    <h3>Industrial ai</h3>
                    <p className="text-sm">© 2025 MyWebsite. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-foreground hover:text-primary transition-colors text-sm"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}