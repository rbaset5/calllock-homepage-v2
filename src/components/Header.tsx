import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full">
      <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 to-purple-500" />
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-3xl font-bold">uhoh</div>
        <Button variant="outline" size="lg">
          Get a free trial
        </Button>
      </nav>
    </header>
  );
};

export default Header;
