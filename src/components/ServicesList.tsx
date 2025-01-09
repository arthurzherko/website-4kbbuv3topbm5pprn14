import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Boost your website's visibility in search results and drive organic traffic.",
    details: "Our SEO experts use the latest techniques to improve your search rankings, increase organic traffic, and enhance your online presence."
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Create targeted ad campaigns to reach your ideal customers quickly.",
    details: "We develop and manage high-performing PPC campaigns across platforms like Google Ads and social media to maximize your ROI."
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty across social platforms.",
    details: "Our social media strategists create compelling content and campaigns to increase your followers, engagement, and conversions."
  },
  {
    title: "Content Marketing",
    description: "Develop valuable content that attracts and retains your target audience.",
    details: "We create and distribute high-quality, relevant content to drive profitable customer action and establish your brand as an industry leader."
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with targeted email campaigns.",
    details: "Our email marketing experts design and implement effective campaigns to engage your subscribers and boost your bottom line."
  },
  {
    title: "Web Design and Development",
    description: "Create stunning, user-friendly websites that convert visitors into customers.",
    details: "We build responsive, SEO-friendly websites that provide an exceptional user experience and drive business growth."
  }
];

const ServicesList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{service.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;