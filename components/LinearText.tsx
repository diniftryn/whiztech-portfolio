"use client";

import { motion } from "framer-motion";

export default function LinearText() {
  return (
    <div className="w-full border-t border-t-black p-2 bg-violet-200">
      <motion.div initial={{ x: "100vw" }} animate={{ x: "-100vw" }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="text-nowrap">
        OUR MISSION IS TO CREATE PRODUCTS THAT WILL EMPOWER COMMUNITIES AND IMPROVE THE LIVES OF OTHERS
      </motion.div>
    </div>
  );
}
