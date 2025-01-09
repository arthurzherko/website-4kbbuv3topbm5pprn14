import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Starter",
    price: "$999/mo",
    description: "Perfect for small businesses just getting started.",
    features: [
      "Basic SEO optimization",
      "Social media management (2 platforms)",
      "Monthly performance report",
      "Email support"
    ]
  },
  {
    name: "Growth",
    price: "$1,999/mo",
    description: "Ideal for businesses looking to expand their online presence.",
    features: [
      "Advanced SEO strategies",
      "Social media management (4 platforms)",
      "Content creation (2 blog posts/mo)",
      "PPC campaign management",
      "Bi-weekly performance reports",
      "Email and phone support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large businesses with complex needs.",
    features: [
      "Comprehensive digital strategy",
      "Full-service social media management",
      "Custom content creation",
      "Advanced PPC and retargeting",
      "Weekly performance reports",
      "24/7 priority support",
      "Dedicated account manager"
    ]
  }
];

const PricingPackages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-3xl font-bold mb-6">{pkg.price}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;