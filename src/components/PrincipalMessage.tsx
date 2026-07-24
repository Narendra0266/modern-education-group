"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Double decorative gold border */}
            <div className="absolute inset-0 border-2 border-accent/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md h-[450px]">
              <Image
                src="/images/principal.png"
                alt="Dr. Evelyn Vance, Principal of Aegis Academy"
                fill
                sizes="(max-w-7xl) 100vw, 400px"
                className="object-cover object-top hover:scale-102 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/5 rounded-full px-4 py-1">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Leadership Message
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight font-poppins">
              Welcome from our Principal
            </h3>
            
            <div className="w-16 h-1 bg-accent rounded-full" />

            <div className="relative">
              <Quote className="absolute -top-3 -left-3 h-10 w-10 text-accent/20 -z-10" />
              <p className="text-lg font-medium text-primary/80 italic pl-6 leading-relaxed font-poppins">
                &ldquo;At Aegis Academy, we believe that education is a collaborative journey of discovery, character building, and academic excellence.&rdquo;
              </p>
            </div>

            <div className="space-y-4 text-primary/70 leading-relaxed font-light">
              <p>
                Welcome to Aegis Academy. As you explore our programs, you will find an institution dedicated to the highest standards of learning. We nurture a diverse community where student inquiry is prioritized, and intellectual courage is celebrated.
              </p>
              <p>
                Our curriculum integrates progressive technologies—like our newly commissioned AI and Robotics labs—with a firm foundation in writing, mathematics, and the humanities. This balanced approach ensures our students are not only prepared for top-tier universities but are equipped to lead with empathy and integrity in a rapidly changing world.
              </p>
              <p>
                Whether you are a prospective parent, a student ready to tackle new heights, or a community partner, we invite you to join us on this extraordinary educational endeavor.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-bold text-primary font-poppins">Dr. Evelyn Vance</h4>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                Principal, Aegis Academy
              </p>
              <p className="text-xs text-primary/60 font-light mt-1">
                PhD in Educational Leadership, Stanford University
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}