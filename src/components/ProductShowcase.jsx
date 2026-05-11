import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/productShowcase.css";

const products = [
{
  id: 1,
  name: "Face Wash",
  image: "public/facewash.png",
  color: "#90b3c4",
  benefit:
    "Gently cleanses impurities while refreshing and brightening the skin.",
  ingredients:
    "Turmeric Extract, Aloe Vera, Vitamin E",
  usage:
    "Apply to damp skin, massage gently, then rinse thoroughly."
},

{
  id: 2,
  name: "Scrub",
  image: "/scrub.png",
  color: "#EFE1D7",
  benefit:
    "Exfoliates dead skin cells and reveals smoother, radiant skin.",
  ingredients:
    "Walnut Shell, Turmeric, Natural Oils",
  usage:
    "Use 2–3 times weekly on damp skin and rinse off."
},

{
  id: 3,
  name: "Serum",
  image: "/serum.png",
  color: "#c3593f",
  benefit:
    "Hydrates deeply while improving glow and skin texture.",
  ingredients:
    "Hyaluronic Acid, Vitamin C, Niacinamide",
  usage:
    "Apply a few drops before moisturizer morning and night."
},

{
  id: 4,
  name: "Face Cream",
  image: "/facecream.png",
  color: "#e6a557",
  benefit:
    "Locks in moisture for soft, nourished, healthy-looking skin.",
  ingredients:
    "Shea Butter, Aloe Vera, Vitamin E",
  usage:
    "Massage evenly onto clean skin daily."
},

{
  id: 5,
  name: "Armpit & Inner Thigh",
  image: "/armpitandinnerthighs.png",
  color: "#e1c2c7",
  benefit:
    "Targets uneven tone while nourishing delicate skin areas.",
  ingredients:
    "Niacinamide, Aloe Vera, Shea Butter",
  usage:
    "Apply gently to clean skin daily."
},

{
  id: 6,
  name: "Body Lotion",
  image: "/bodyLotion.png",
  color: "#F2E6DB",
  benefit:
    "Provides deep hydration for smooth glowing skin.",
  ingredients:
    "Cocoa Butter, Shea Butter, Vitamin E",
  usage:
    "Massage onto skin after bathing."
},

{
  id: 7,
  name: "Aloe Vera Gel",
  image: "/aloeveragel.png",
  color: "#dae2ca",
  benefit:
    "Soothes, cools, and refreshes irritated skin.",
  ingredients:
    "Pure Aloe Vera, Vitamin E",
  usage:
    "Apply directly onto skin whenever needed."
}
];

export default function ProductShowcase() {

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const [showModal, setShowModal] = useState(false);

  return (
    <motion.section
      className="productShowcase"
      animate={{
        backgroundColor: selectedProduct.color
      }}
      transition={{ duration: 0.5 }}
    >

      <div className="sectionTitle">

        <span>Collection</span>

        <h2>
          The Radiance Collection
        </h2>

      </div>

      <div className="carouselWrapper">

        <div className="carouselTrack">

          {products.map((product) => (

            <motion.div
              layout
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className={`productCard ${
                selectedProduct.id === product.id
                  ? "active"
                  : ""
              }`}
              key={product.id}
              onClick={() => setSelectedProduct(product)}
            >

              <div className="activeGlow"></div>

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <button
                className="viewBtn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProduct(product);
                  setShowModal(true);
                }}
              >
                View Details
              </button>

            </motion.div>

          ))}

        </div>

      </div>

      <AnimatePresence>

        {showModal && (

          <motion.div
            className="productModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="modalContent"
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 50
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                y: 50
              }}
              transition={{
                duration: 0.4
              }}
            >

              <button
                className="closeBtn"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>

              <div className="modalImage">

                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />

              </div>

              <div className="modalText">

                <h2>
                  {selectedProduct.name}
                </h2>

                <div className="modalInfo">

                  <h4>Short Benefit</h4>

                  <p>
                    {selectedProduct.benefit}
                  </p>

                </div>

                <div className="modalInfo">

                  <h4>Ingredients</h4>

                  <p>
                    {selectedProduct.ingredients}
                  </p>

                </div>

                <div className="modalInfo">

                  <h4>How To Use</h4>

                  <p>
                    {selectedProduct.usage}
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.section>
  );
}