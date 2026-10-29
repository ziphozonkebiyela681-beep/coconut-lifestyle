import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VibeGallery } from './components/VibeGallery';
import { KitchenSection } from './components/KitchenSection';
import { BarHubblySection } from './components/BarHubblySection';
import { VipSection } from './components/VipSection';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { VipBookingModal } from './components/VipBookingModal';
import { CartDrawer } from './components/CartDrawer';
import { MenuItem, OrderItem, VipBooth } from './types';

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
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onExploreMenu={() => {
            document.getElementById('kitchen-menu')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* The Vibe & Inside Club Photo Gallery (Includes Street Entrance) */}
        <VibeGallery />

        {/* Dedicated Section 1: Flame-Grilled Kitchen, Platters & Sides */}
        <KitchenSection onAddToCart={handleAddToCart} />

        {/* Dedicated Section 2: Nightclub Bar, Bottles, Mixers & Amaren Hubbly Lounge */}
        <BarHubblySection onAddToCart={(item) => handleAddToCart(item)} />

        {/* VIP Booths & Table Reservations Linked to Calling & WhatsApp */}
        <VipSection onSelectBooth={handleOpenBookingWithBooth} />

        {/* Location, Hours & Street Outside View */}
        <LocationHours />
      </main>

      {/* Footer with Social Links & Hours */}
      <Footer />

      {/* Interactive Modals */}
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
  );
}
