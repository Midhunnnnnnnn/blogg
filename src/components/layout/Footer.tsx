export default function Footer() {
  return (
    <footer className="w-full border-t border-border py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} YourName. All rights reserved.
    </footer>
  );
}
