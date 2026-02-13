import { motion } from "framer-motion";

const QuoteCard = ({ quote }) => {
  if (!quote) return null;

  return (
    <motion.div
      className="quote-card"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <p className="quote-text">"{quote.text}"</p>
    </motion.div>
  );
};

export default QuoteCard;