import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { VipBooth } from '../types';
import { VIP_BOOTHS, CLUB_INFO } from '../data/clubData';

interface VipBookingModalProps {
  initialBooth: VipBooth | null;
  onClose: () => void;
  cartTotal?: number;
}

export const VipBookingModal: React.FC<VipBookingModalProps> = ({
  initialBooth,
  onClose,
  cartTotal = 0,
}) => {
  const [selectedBoothId, setSelectedBoothId] = useState<string>(
    initialBooth ? initialBooth.id : VIP_BOOTHS[0].id
  );
  const [date, setDate] = useState<string>('2026-10-31');
  const [timeSlot, setTimeSlot] = useState<string>('21:00');
  const [guestCount, setGuestCount] = useState<number>(6);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('Weekend Celebration');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const currentBooth =
    VIP_BOOTHS.find((b) => b.id === selectedBoothId) || VIP_BOOTHS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please provide your name and phone number for the booking.');
      return;
    }
    const refCode = `CNL-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = (ref?: string) => {
    const text = `*COCONUT LIFESTYLE VIP TABLE RESERVATION*
Booking Ref: ${ref || 'Pending'}
Guest: ${fullName || 'Guest'}
Phone: ${phone || 'Direct Customer'}
Booth: ${currentBooth.name}
Date: ${date} at ${timeSlot}
Guests: ${guestCount} people
Occasion: ${occasion}
Estimated Bottle/Food Pre-tab: R${cartTotal}
Notes: ${specialRequests || 'Standard VIP setup'}

Please confirm table availability and booking at 12 Lower Ross Street, New Doornfontein.`;
    return encodeURIComponent(text);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111111] border border-[#D4AF37]/50 rounded-2xl max-w-xl w-full p-4 sm:p-8 text-white my-2 sm:my-8 shadow-2xl max-h-[94vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pronounced Rainbow Top Accent Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-1.5 rainbow-gradient-bar rounded-t-2xl shadow-sm" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Coconut Lifestyle Reservations</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Reserve Your VIP Booth
              </h3>
              <p className="text-xs text-neutral-300 mt-1">
                12 Lower Ross Street, New Doornfontein, Johannesburg
              </p>
            </div>

            {/* Direct Instant Contact Strip */}
            <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/${CLUB_INFO.whatsapp}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Instant WhatsApp</span>
              </a>

              <a
                href={`tel:${CLUB_INFO.phoneTel}`}
                className="p-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-[#D4AF37] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors text-center"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call {CLUB_INFO.phone}</span>
              </a>
            </div>

            {/* Booth Selection */}
            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                Select Table / VIP Booth
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {VIP_BOOTHS.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBoothId(b.id)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      selectedBoothId === b.id
                        ? 'bg-amber-500/10 border-[#D4AF37] text-white shadow-sm'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <div className="font-bold text-white truncate">{b.name}</div>
                    <div className="flex items-center justify-between mt-1 text-[11px] text-neutral-400">
                      <span>{b.capacity}</span>
                      <span className="font-mono text-[#D4AF37] font-semibold tabular-nums">
                        Min R{b.minSpend}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Arrival Time</span>
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="18:00">18:00 (Dinner & Chill)</option>
                  <option value="20:00">20:00 (Early Party)</option>
                  <option value="21:30">21:30 (Prime Nightclub)</option>
                  <option value="23:00">23:00 (Late Night Rush)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Guests</span>
                </label>
                <input
                  type="number"
                  min={1}
                  max={25}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  required
                />
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sindi Khumalo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +27 82 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Bachelorette / Bachelor">Bachelorette / Bachelor</option>
                  <option value="Weekend Vibe & Turn Up">Weekend Vibe & Turn Up</option>
                  <option value="Corporate / Team Dinner">Corporate / Team Dinner</option>
                  <option value="VIP Bottle Night">VIP Bottle Night</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Special Requests / Bottle Preferences
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please arrange bottle sparklers, 1 Hennessy VSOP on ice, and Amaren Gum & Mint hubbly on arrival."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#D4AF37] resize-none"
              />
            </div>

            {/* Min spend summary */}
            <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-between text-xs">
              <span className="text-neutral-400">Booth Minimum Spend:</span>
              <span className="font-mono font-bold text-[#D4AF37] tabular-nums">
                R{currentBooth.minSpend}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 active:scale-95 transition-all rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit & Link to VIP WhatsApp / Desk</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                Booking Reference Generated
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                We're Ready for Your Turn Up!
              </h3>
              <p className="text-xs text-neutral-300 mt-2 max-w-md mx-auto">
                Your reservation request is filed under ref{' '}
                <strong className="text-white font-mono bg-neutral-900 px-2 py-0.5 rounded border border-neutral-700">
                  {bookingRef}
                </strong>{' '}
                for <strong className="text-[#D4AF37]">{currentBooth.name}</strong>.
              </p>
            </div>

            {/* Booking Summary Box */}
            <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Guest Name:</span>
                <span className="font-semibold text-white">{fullName}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Date & Arrival:</span>
                <span className="font-semibold text-white">{date} at {timeSlot}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Party Size:</span>
                <span className="font-semibold text-white">{guestCount} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Minimum Table Spend:</span>
                <span className="font-mono font-bold text-[#D4AF37] tabular-nums">
                  R{currentBooth.minSpend}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp & Call Actions */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/${CLUB_INFO.whatsapp}?text=${getWhatsAppMessage(bookingRef)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#10B981] hover:bg-[#059669] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Confirmation to VIP WhatsApp</span>
              </a>

              <a
                href={`tel:${CLUB_INFO.phoneTel}`}
                className="w-full py-3 px-6 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F59E0B] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Club Directly: {CLUB_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
