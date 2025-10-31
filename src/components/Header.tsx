import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full">
      <div className="py-3 w-full flex items-center justify-center" style={{ background: 'var(--gradient-rainbow)' }}>
        <span className="text-sm font-medium text-gray-900">→ Book a 15 minute meeting today.</span>
      </div>
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-3xl font-bold">CallLock</div>
        <Button variant="outline" size="lg">
          Get a free trial
        </Button>
      </nav>
    </header>
  );
};

export default Header;
