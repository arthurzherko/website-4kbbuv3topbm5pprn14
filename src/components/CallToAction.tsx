import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Skyrocket Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's work together to create a tailored digital strategy that drives results for your business.</p>
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">Get Your Free Consultation</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;