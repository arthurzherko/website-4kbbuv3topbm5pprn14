import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience."
  },
  {
    title: "Strategy Development",
    description: "Our team creates a customized digital marketing strategy tailored to your needs."
  },
  {
    title: "Implementation",
    description: "We execute the strategy across various channels and platforms."
  },
  {
    title: "Monitoring & Optimization",
    description: "We continuously track performance and make data-driven improvements."
  },
  {
    title: "Reporting & Analysis",
    description: "Regular reports keep you informed of progress and ROI."
  }
];

const ProcessTimeline = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center mb-8 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                {index + 1}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-300" style={{ transform: 'translateX(-50%)' }} />
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;