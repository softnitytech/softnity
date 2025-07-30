import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Database,
  Globe,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title = "Service Title",
  description = "Brief description of the service offering",
  icon = <Code className="h-8 w-8" />,
  details = "Detailed information about this service and how it can benefit your business.",
  isExpanded = false,
  onToggle = () => {},
}) => {
  return (
    <Card className="bg-card overflow-hidden transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="ml-auto"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <CardContent className="pt-2">
          <p className="text-sm text-muted-foreground">{details}</p>
        </CardContent>
      </motion.div>
      <CardFooter className="mt-auto pt-4">
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={onToggle}
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </Button>
      </CardFooter>
    </Card>
  );
};

interface ServiceCardsProps {
  services?: Array<{
    id: string;
    title: string;
    description: string;
    icon: keyof typeof serviceIcons;
    details: string;
  }>;
}

const serviceIcons = {
  webDevelopment: <Globe className="h-8 w-8" />,
  mobileDevelopment: <Smartphone className="h-8 w-8" />,
  cloudServices: <Server className="h-8 w-8" />,
  databaseManagement: <Database className="h-8 w-8" />,
  cybersecurity: <Shield className="h-8 w-8" />,
  customSoftware: <Code className="h-8 w-8" />,
};

const ServiceCards: React.FC<ServiceCardsProps> = ({
  services = defaultServices,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our comprehensive IT solutions can transform your
            business and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={serviceIcons[service.icon]}
                details={service.details}
                isExpanded={expandedId === service.id}
                onToggle={() => toggleExpand(service.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultServices = [
  {
    id: "1",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies",
    icon: "webDevelopment" as keyof typeof serviceIcons,
    details:
      "Our web development team creates responsive, high-performance websites and applications using the latest frameworks and technologies. From simple landing pages to complex web applications, we deliver solutions that engage users and drive business growth.",
  },
  {
    id: "2",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    icon: "mobileDevelopment" as keyof typeof serviceIcons,
    details:
      "We build intuitive and feature-rich mobile applications that work seamlessly across iOS and Android platforms. Our mobile solutions are designed with user experience in mind, ensuring high adoption rates and customer satisfaction.",
  },
  {
    id: "3",
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services",
    icon: "cloudServices" as keyof typeof serviceIcons,
    details:
      "Leverage the power of cloud computing with our comprehensive cloud services. We help businesses migrate to the cloud, optimize cloud infrastructure, and implement cloud-native solutions that improve scalability, reliability, and cost-efficiency.",
  },
  {
    id: "4",
    title: "Database Management",
    description: "Efficient database design, optimization, and maintenance",
    icon: "databaseManagement" as keyof typeof serviceIcons,
    details:
      "Our database experts design, implement, and maintain robust database solutions that ensure data integrity, security, and performance. We work with SQL and NoSQL databases to create scalable data architectures tailored to your business needs.",
  },
  {
    id: "5",
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets",
    icon: "cybersecurity" as keyof typeof serviceIcons,
    details:
      "Protect your business from cyber threats with our advanced security solutions. We offer security assessments, implementation of security controls, threat monitoring, and incident response services to safeguard your sensitive data and systems.",
  },
  {
    id: "6",
    title: "Custom Software Development",
    description:
      "Tailored software solutions for your unique business challenges",
    icon: "customSoftware" as keyof typeof serviceIcons,
    details:
      "We develop custom software solutions that address your specific business requirements. Our development process focuses on creating scalable, maintainable, and user-friendly applications that streamline operations and drive efficiency.",
  },
];

export default ServiceCards;
