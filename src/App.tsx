import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VipBookingModal } from './components/VipBookingModal';
import { CartDrawer } from './components/CartDrawer';
import { MenuItem, OrderItem, VipBooth } from './types';

// Multi-Page Views
import { HomePage } from './pages/HomePage';
import { VibePage } from './pages/VibePage';
import { KitchenPage } from './pages/KitchenPage';
import { DrinksPage } from './pages/DrinksPage';
import { VipPage } from './pages/VipPage';
import { LocationPage } from './pages/LocationPage';

export default function App() {
  const [cartItems, setCartItems] = useState<OrderItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedBooth, setSelectedBooth] = useState<VipBooth | null>(null);

  // Add Item to Party Tab / Cart
  const handleAddToCart = (
    item: MenuItem,
    customization?: { basting?: string; starch?: string; sides?: string[] }
  ) => {
    setCartItems((prevItems) => {
      // Create a unique key for custom food combinations
      const customKey = `${item.id}-${customization?.basting || ''}-${customization?.starch || ''}-${(customization?.sides || []).join('-')}`;

      const existingIndex = prevItems.findIndex((order) => order.id === customKey);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        const newOrder: OrderItem = {
          id: customKey,
          menuItem: item,
          quantity: 1,
          basting: customization?.basting,
          starch: customization?.starch,
          sides: customization?.sides,
        };
        return [...prevItems, newOrder];
      }
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as OrderItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenBookingWithBooth = (booth: VipBooth) => {
    setSelectedBooth(booth);
    setIsBookingOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalCartValue = cartItems.reduce(
    (acc, curr) => acc + curr.menuItem.price * curr.quantity,
    0
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#D4AF37] selection:text-black">
        {/* Sticky Top Navigation with Small Top Strip Pride Dancers */}
        <Navbar
          onOpenBooking={() => setIsBookingOpen(true)}
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Multi-Page Route Outlet */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={() => setIsBookingOpen(true)} />} />
            <Route path="/vibe" element={<VibePage onOpenBooking={() => setIsBookingOpen(true)} />} />
            <Route path="/kitchen" element={<KitchenPage onAddToCart={handleAddToCart} />} />
            <Route path="/drinks" element={<DrinksPage onAddToCart={(item) => handleAddToCart(item)} />} />
            <Route
              path="/vip"
              element={
                <VipPage
                  onSelectBooth={handleOpenBookingWithBooth}
                  onOpenBooking={() => setIsBookingOpen(true)}
                />
              }
            />
            <Route path="/location" element={<LocationPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Universal Footer */}
        <Footer />

        {/* Universal VIP Booking Modal */}
        {isBookingOpen && (
          <VipBookingModal
            initialBooth={selectedBooth}
            onClose={() => {
              setIsBookingOpen(false);
              setSelectedBooth(null);
            }}
            cartTotal={totalCartValue}
          />
        )}

        {/* Universal Party Tab / Cart Drawer */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
          onProceedToBooking={() => {
            setIsBookingOpen(true);
          }}
        />
      </div>
    </BrowserRouter>
  );
}
