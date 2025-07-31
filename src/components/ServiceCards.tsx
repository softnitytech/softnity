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
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
      <Card className="bg-white/80 dark:bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-500 h-full flex flex-col group hover:shadow-2xl border-blue-200/30 dark:border-border/30 relative">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <CardHeader className="pb-2 relative z-10">
          <div className="flex items-center justify-between">
            <motion.div
              className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-primary group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {icon}
            </motion.div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="ml-auto hover:bg-blue-500/10 transition-colors duration-300"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </motion.div>
            </Button>
          </div>
          <CardTitle className="mt-4 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </CardDescription>
        </CardHeader>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden relative z-10"
        >
          <CardContent className="pt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {details}
            </p>
          </CardContent>
        </motion.div>

        <CardFooter className="mt-auto pt-4 relative z-10">
          <Button
            variant="outline"
            size="sm"
            className="w-full border-blue-200 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300 group-hover:shadow-md"
            onClick={onToggle}
          >
            <span className="group-hover:scale-105 transition-transform duration-200">
              {isExpanded ? "Show Less" : "Learn More"}
            </span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
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
    <section className="py-20 px-4 bg-gradient-to-b from-white dark:from-background via-blue-50/20 dark:via-muted/10 to-white dark:to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how our comprehensive IT solutions can transform your
            business and drive innovation with cutting-edge technology.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
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
