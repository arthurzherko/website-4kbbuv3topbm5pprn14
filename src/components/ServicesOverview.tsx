import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Rocket, Megaphone, PenTool } from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic to your website.",
    icon: Rocket
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty across social platforms.",
    icon: Megaphone
  },
  {
    title: "Content Strategy",
    description: "Create compelling content that resonates with your target audience.",
    icon: PenTool
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;