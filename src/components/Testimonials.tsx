import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Innovators Inc.",
    testimonial: "Apex Digital transformed our online presence. Our leads have increased by 150% since working with them!",
    avatar: "/avatars/sarah.jpg"
  },
  {
    name: "Michael Chen",
    company: "Global Solutions Ltd.",
    testimonial: "The team at Apex is incredibly knowledgeable and responsive. They've been instrumental in our growth.",
    avatar: "/avatars/michael.jpg"
  },
  {
    name: "Emma Rodriguez",
    company: "Eco Friendly Co.",
    testimonial: "We saw a 200% increase in social media engagement within just three months of partnering with Apex Digital.",
    avatar: "/avatars/emma.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">"{testimonial.testimonial}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;