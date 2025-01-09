import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-primary">Apex Digital</Link>
          <div className="flex items-center gap-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary">Services</Link>
            <Button asChild>
              <Link to="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;