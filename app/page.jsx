"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Calendar, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/mockData";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Connect with
              <span className="ml-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent relative shimmer">
                Talented Performers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Discover exceptional artists for your events. From mesmerizing
              singers to dynamic dancers, inspiring speakers to electrifying DJs
              - find the perfect performer for your next event.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/artists">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8"
                >
                  Browse Artists
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/onboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:border-purple-300"
                >
                  Join as Artist
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Artist Categories
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect performer for your event type
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Artistly?
            </h2>
            <p className="text-lg text-gray-600">
              The platform trusted by event planners and artists nationwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Users}
              color="purple"
              title="Verified Artists"
              description="All artists are thoroughly vetted and verified for quality assurance"
            />
            <FeatureCard
              icon={Calendar}
              color="blue"
              title="Easy Booking"
              description="Streamlined booking process with instant quotes and availability"
            />
            <FeatureCard
              icon={Shield}
              color="green"
              title="Secure Payments"
              description="Safe and secure payment processing with buyer protection"
            />
            <FeatureCard
              icon={Star}
              color="orange"
              title="Top Rated"
              description="Access to highly rated performers with proven track records"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Performer?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of event planners who trust Artistly for their
            entertainment needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artists">
              <Button size="lg" variant="secondary" className="px-8">
                Browse Artists Now
              </Button>
            </Link>
            <Link href="/onboard">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                List Your Talent
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .shimmer {
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ icon: Icon, color, title, description }) {
  const colorMap = {
    purple: "bg-purple-100 text-purple-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="text-center">
      <div
        className={`w-12 h-12 ${colorMap[color]} rounded-lg flex items-center justify-center mx-auto mb-4`}
      >
        <Icon className={`w-6 h-6`} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
