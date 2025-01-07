import "../styles/globals.css";
import Layout from "../../components/Layout/Layout"; // Adjust path as needed

export const metadata = {
  title: "Reading Espresso",
  description:
    "Discover, personalize, and print bite-sized readings on-the-go.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
