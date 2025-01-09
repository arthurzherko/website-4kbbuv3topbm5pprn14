import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Elevate Your Digital Presence</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Unlock your business potential with our cutting-edge digital marketing strategies.</p>
          <Button size="lg" asChild>
            <a href="#contact">Get Started Today</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;