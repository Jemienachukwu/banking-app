import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedin = { firstName: "Jemie", LastName: "Jeffery" };
  return (
    <main className="h-full w-full flex font-inter">
      <Sidebar user={loggedin} />
      {children}
    </main>
  );
}
