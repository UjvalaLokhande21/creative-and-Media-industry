import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Trash2, Image as ImageIcon, Package, ArrowRight, CheckCircle2, AlertCircle, Upload, X, Grid, Layout } from "lucide-react";
import { cn } from "../lib/utils";

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  images: string[];
  description: string;
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'products' | 'media'>('products');
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Minimalist Camera",
      price: "$299",
      category: "Photography",
      images: ["https://picsum.photos/seed/camera/800/800"],
      description: "A sleek, high-performance camera for the modern photographer."
    }
  ]);

  const [media, setMedia] = useState<string[]>([
    "https://picsum.photos/seed/1/800/800",
    "https://picsum.photos/seed/2/800/800",
    "https://picsum.photos/seed/3/800/800",
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: "",
    price: "",
    category: "General",
    images: [],
    description: ""
  });

  const [imageInput, setImageInput] = useState("");
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleAddImage = () => {
    if (imageInput && newProduct.images) {
      setNewProduct({
        ...newProduct,
        images: [...newProduct.images, imageInput]
      });
      setImageInput("");
    }
  };

  const removeImage = (index: number) => {
    if (newProduct.images) {
      setNewProduct({
        ...newProduct,
        images: newProduct.images.filter((_, i) => i !== index)
      });
    }
  };

  const handleSaveProduct = (e: FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) {
      setStatus({ type: 'error', message: "Please fill in the required fields." });
      return;
    }

    const product: Product = {
      id: Math.random().toString(36).substr(2, 9),
      name: newProduct.name || "",
      price: newProduct.price || "",
      category: newProduct.category || "General",
      images: newProduct.images || [],
      description: newProduct.description || ""
    };

    setProducts([...products, product]);
    setIsAdding(false);
    setNewProduct({ name: "", price: "", category: "General", images: [], description: "" });
    setStatus({ type: 'success', message: "Product added successfully!" });
    setTimeout(() => setStatus(null), 3000);
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleAddMedia = () => {
    if (imageInput) {
      setMedia([imageInput, ...media]);
      setImageInput("");
      setStatus({ type: 'success', message: "Image added to library!" });
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black pt-32 pb-24 px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Package size={14} className="text-orange-500" />
              Admin Dashboard
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              Admin <br />
              <span className="text-transparent stroke-black stroke-1" style={{ WebkitTextStroke: '1px black' }}>Session.</span>
            </h1>
          </div>
          
          <div className="flex bg-white p-2 rounded-3xl shadow-xl shadow-black/5 border border-gray-100">
            <button
              onClick={() => setActiveTab('products')}
              className={cn(
                "px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2",
                activeTab === 'products' ? "bg-black text-white" : "text-gray-400 hover:text-black"
              )}
            >
              <Layout size={14} /> Products
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={cn(
                "px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2",
                activeTab === 'media' ? "bg-black text-white" : "text-gray-400 hover:text-black"
              )}
            >
              <ImageIcon size={14} /> Media Library
            </button>
          </div>
        </header>

        {status && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "p-6 rounded-3xl mb-12 flex items-center gap-4 border",
              status.type === 'success' ? "bg-green-50 border-green-100 text-green-800" : "bg-red-50 border-red-100 text-red-800"
            )}
          >
            {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
            <span className="font-bold text-sm uppercase tracking-widest">{status.message}</span>
          </motion.div>
        )}

        {activeTab === 'products' ? (
          <>
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight uppercase italic">Active Products ({products.length})</h2>
              <button
                onClick={() => setIsAdding(true)}
                className="bg-black text-white px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500 transition-all flex items-center gap-3 group"
              >
                <Plus size={16} /> Add Product
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/5 group"
                  >
                    <div className="aspect-square relative overflow-hidden bg-gray-100">
                      <img
                        src={product.images[0] || "https://picsum.photos/seed/placeholder/800/800"}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 right-6 flex gap-2">
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="p-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-2 block">{product.category}</span>
                          <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>
                        </div>
                        <span className="text-xl font-black italic">{product.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8">{product.description}</p>
                      <div className="flex gap-2">
                        {product.images.slice(1, 4).map((img, i) => (
                          <div key={i} className="w-12 h-12 rounded-xl overflow-hidden border border-gray-100">
                            <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="space-y-12">
            <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl shadow-black/5">
              <h2 className="text-2xl font-bold tracking-tight uppercase italic mb-8">Add to Library</h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={imageInput}
                  onChange={(e) => setImageInput(e.target.value)}
                  className="flex-1 bg-gray-50 border-none rounded-2xl p-6 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  placeholder="Paste image URL here..."
                />
                <button
                  onClick={handleAddMedia}
                  className="bg-black text-white px-12 rounded-2xl hover:bg-orange-500 transition-all font-bold uppercase text-[10px] tracking-widest"
                >
                  Add Image
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {media.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="aspect-square rounded-3xl overflow-hidden group relative border border-gray-100"
                >
                  <img src={img} className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
                  <button
                    onClick={() => setMedia(media.filter((_, idx) => idx !== i))}
                    className="absolute inset-0 bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <Trash2 size={24} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Add Product Modal */}
        <AnimatePresence>
          {isAdding && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl p-8 flex items-center justify-center overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white w-full max-w-2xl rounded-[3rem] p-12 relative"
              >
                <button
                  onClick={() => setIsAdding(false)}
                  className="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors"
                >
                  <X size={32} />
                </button>

                <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-12">New Product.</h2>

                <form onSubmit={handleSaveProduct} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Product Name</label>
                      <input
                        type="text"
                        required
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                        placeholder="e.g. Minimalist Lens"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Price</label>
                      <input
                        type="text"
                        required
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                        placeholder="e.g. $199"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Category</label>
                    <select
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    >
                      <option>General</option>
                      <option>Photography</option>
                      <option>Design</option>
                      <option>Media</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Description</label>
                    <textarea
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                      className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all h-32 resize-none"
                      placeholder="Tell us about the product..."
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Product Images</label>
                    <div className="flex gap-4">
                      <input
                        type="text"
                        value={imageInput}
                        onChange={(e) => setImageInput(e.target.value)}
                        className="flex-1 bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                        placeholder="Paste image URL here..."
                      />
                      <button
                        type="button"
                        onClick={handleAddImage}
                        className="bg-black text-white px-8 rounded-2xl hover:bg-orange-500 transition-all"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      {newProduct.images?.map((img, i) => (
                        <div key={i} className="relative w-24 h-24 rounded-2xl overflow-hidden group border border-gray-100">
                          <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          <button
                            type="button"
                            onClick={() => removeImage(i)}
                            className="absolute inset-0 bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      ))}
                      {(!newProduct.images || newProduct.images.length === 0) && (
                        <div className="w-full py-12 border-2 border-dashed border-gray-100 rounded-[2rem] flex flex-col items-center justify-center text-gray-300">
                          <Upload size={32} className="mb-4" />
                          <p className="text-[10px] font-bold uppercase tracking-widest">No images added yet</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-orange-500 transition-all flex items-center justify-center gap-4 group"
                  >
                    Save Product <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
