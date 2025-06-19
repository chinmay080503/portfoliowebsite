"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn } from "@/utils/animations";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="flex justify-center items-center mb-4"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-black dark:ring-white"
            />
          </motion.div>

          {/* Heading with typing animation */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="inline-block"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              <TypeAnimation
                sequence={[
                  "",
                  800,
                  "Chinmay Srivastava",
                  3500,
                  "a Web Developer",
                  3500,
                  "a Full Stack Enthusiast",
                  3500,
                  "an Open Source Contributor",
                  3500,
                ]}
                wrapper="span"
                speed={30}
                deletionSpeed={20}
                repeat={Infinity}
                cursor={true}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer | UI/UX Enthusiast | Open Source Contributor
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/chinmay080503"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/chinmay-srivastava-3436421b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/aguylivingonearth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/resume.pdf"
                download
                className="inline-block w-full md:w-auto px-8 py-3 rounded-lg font-semibold transition-colors duration-200
               bg-black text-white hover:bg-gray-900
               dark:bg-white dark:text-black dark:hover:bg-gray-200
               border border-transparent dark:border-black"
              >
                <span className="text-white dark:text-black">
                  Download Resume
                </span>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block w-full bg-gray-500 md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
