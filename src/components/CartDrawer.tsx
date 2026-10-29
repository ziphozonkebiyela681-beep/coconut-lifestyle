import React from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, Sparkles, ShoppingBag } from 'lucide-react';
import { OrderItem } from '../types';
import { CLUB_INFO } from '../data/clubData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onProceedToBooking: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToBooking,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, order) => sum + order.menuItem.price * order.quantity,
    0
  );

  const getWhatsAppOrderText = () => {
    let text = `*COCONUT LIFESTYLE PRE-ORDER / PARTY TAB ESTIMATOR*\n`;
    text += `Location: 12 Lower Ross Street, New Doornfontein\n\n`;
    items.forEach((item, index) => {
      text += `${index + 1}. ${item.quantity}x ${item.menuItem.name} - R${item.menuItem.price * item.quantity}\n`;
      if (item.basting) text += `   • Basting: ${item.basting}\n`;
      if (item.starch) text += `   • Starch: ${item.starch}\n`;
      if (item.sides && item.sides.length > 0) text += `   • Sides: ${item.sides.join(', ')}\n`;
    });
    text += `\n*Estimated Total: R${totalAmount}*\n\nPlease advise table availability or pickup timing.`;
    return encodeURIComponent(text);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#101010] border-l border-[#D4AF37]/30 h-full flex flex-col justify-between text-white shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top rainbow line */}
        <div className="h-1 w-full rainbow-gradient-bar" />

        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h3 className="font-display text-lg font-bold text-white">Party Tab & Bill</h3>
              <p className="text-xs text-neutral-400">Estimate your night or pre-order</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close party tab"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 text-neutral-400">
              <ShoppingBag className="w-12 h-12 text-neutral-700 stroke-1 mb-3" />
              <p className="font-display text-base font-semibold text-white">Your Tab is Empty</p>
              <p className="text-xs text-neutral-400 mt-1 max-w-xs">
                Explore our flame-grilled kitchen menu, bottle service, or Amaren hubblies to build your party estimate.
              </p>
            </div>
          ) : (
            items.map((order) => (
              <div
                key={order.id}
                className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-medium text-sm text-white">{order.menuItem.name}</h4>
                    <span className="font-mono text-xs text-[#D4AF37] font-semibold tabular-nums">
                      R{order.menuItem.price} each
                    </span>
                  </div>
                  <button
                    onClick={() => onRemoveItem(order.id)}
                    className="text-neutral-500 hover:text-red-400 p-1 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Customizations details */}
                {(order.basting || order.starch || (order.sides && order.sides.length > 0)) && (
                  <div className="text-[11px] text-neutral-400 bg-black/40 p-2 rounded border border-neutral-800/60 space-y-0.5">
                    {order.basting && <div>Basting: <span className="text-neutral-300">{order.basting}</span></div>}
                    {order.starch && <div>Starch: <span className="text-neutral-300">{order.starch}</span></div>}
                    {order.sides && order.sides.length > 0 && (
                      <div>Sides: <span className="text-neutral-300">{order.sides.join(', ')}</span></div>
                    )}
                  </div>
                )}

                {/* Quantity Controls & Line Total */}
                <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60">
                  <div className="flex items-center gap-2 bg-neutral-950 px-2 py-1 rounded-lg border border-neutral-800">
                    <button
                      onClick={() => onUpdateQuantity(order.id, -1)}
                      className="p-1 text-neutral-400 hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-mono text-xs font-bold text-white px-1.5 tabular-nums">
                      {order.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(order.id, 1)}
                      className="p-1 text-neutral-400 hover:text-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <span className="font-mono text-sm font-bold text-[#D4AF37] tabular-nums">
                    R{order.menuItem.price * order.quantity}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Subtotal & Actions */}
        {items.length > 0 && (
          <div className="p-6 border-t border-neutral-800 bg-[#0c0c0c] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-400">Estimated Total:</span>
              <span className="font-mono text-2xl font-bold text-[#D4AF37] tabular-nums">
                R{totalAmount}
              </span>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onProceedToBooking();
                }}
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 active:scale-95 transition-all rounded-lg flex items-center justify-center gap-2 shadow-md shadow-[#D4AF37]/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book VIP Table With This Tab</span>
              </button>

              <a
                href={`https://wa.me/${CLUB_INFO.whatsapp}?text=${getWhatsAppOrderText()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span>Send Pre-Order to WhatsApp</span>
              </a>

              <button
                onClick={onClearCart}
                className="w-full py-1.5 text-xs text-neutral-500 hover:text-red-400 transition-colors"
              >
                Clear Tab
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
