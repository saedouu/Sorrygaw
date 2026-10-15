import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { DESTINATIONS } from '../data/surigaoData';

interface ContactInquirySectionProps {
  selectedDestinationIds: string[];
  onToggleDestination: (id: string) => void;
}

interface SubmittedInquiry {
  referenceCode: string;
  fullName: string;
  email: string;
  travelDate: string;
  groupSize: number;
  inquiryType: string;
  destinations: string[];
  message: string;
  submittedAt: string;
}

export const ContactInquirySection: React.FC<ContactInquirySectionProps> = ({
  selectedDestinationIds,
  onToggleDestination
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('2026-11-15');
  const [groupSize, setGroupSize] = useState(4);
  const [inquiryType, setInquiryType] = useState('Custom Itinerary & Guided Tour');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedInquiries, setSubmittedInquiries] = useState<SubmittedInquiry[]>([]);
  const [justSubmittedRef, setJustSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address so our tourism desk can reply.');
      return;
    }

    if (message.trim().length < 10) {
      setErrorMessage('Please include a brief note or question (at least 10 characters).');
      return;
    }

    const chosenNames =
      selectedDestinationIds.length > 0
        ? DESTINATIONS.filter((d) => selectedDestinationIds.includes(d.id)).map((d) => d.name)
        : ['All 5 Featured Surigao del Sur Destinations'];

    const refCode = `KS-${Math.floor(100000 + Math.random() * 900000)}`;
    const newEntry: SubmittedInquiry = {
      referenceCode: refCode,
      fullName: fullName.trim(),
      email: email.trim(),
      travelDate: travelDate || 'Flexible Dates',
      groupSize,
      inquiryType,
      destinations: chosenNames,
      message: message.trim(),
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setSubmittedInquiries((prev) => [newEntry, ...prev]);
    setJustSubmittedRef(refCode);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-b border-stone-200/80">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-teal-800 mb-2">
              05 · Contact &amp; Visitor Inquiry Desk
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              Plan Your Surigao del Sur Journey With Us
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-8">
              Have questions about high-tide schedules at Laswitan, boat reservations in Britania, or group clearances for Hinatuan Enchanted River and Tinuy-an Falls? Send an inquiry to the <strong className="font-semibold text-stone-900">Karajaw Surigao Digital Tourism Desk</strong>.
            </p>

            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 space-y-5 mb-8">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-stone-950">
                    Provincial Tourism Information Center
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Capitol Hills, Telaje, Tandag City, Surigao del Sur 8300 · Caraga Region XIII, Philippines
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-stone-100">
                <Mail className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-stone-950">
                    Official Visitor Inquiry Email
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    inquiries@karajawsurigao.ph · tourism.surigaodelsur@gov.ph
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-stone-100">
                <Phone className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-stone-950">
                    Tourism Dispatch &amp; Assistance Hours
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Monday – Sunday · 7:00 AM to 6:00 PM PHT · <span className="font-mono-tabular">(086) 211-3942</span>
                  </p>
                </div>
              </div>
            </div>

            {submittedInquiries.length > 0 && (
              <div className="bg-teal-950 text-stone-100 rounded-2xl p-6">
                <h3 className="font-display text-base font-semibold text-white mb-3">
                  Your Logged Visitor Inquiries ({submittedInquiries.length})
                </h3>
                <div className="space-y-3">
                  {submittedInquiries.map((inq) => (
                    <div
                      key={inq.referenceCode}
                      className="p-3.5 rounded-xl bg-teal-900/60 border border-teal-800 text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between font-mono-tabular text-amber-300 font-semibold">
                        <span>Ref #{inq.referenceCode}</span>
                        <span>{inq.submittedAt}</span>
                      </div>
                      <p className="font-medium text-white">
                        {inq.fullName} · {inq.groupSize} pax · {inq.travelDate}
                      </p>
                      <p className="text-teal-200">
                        Sites: {inq.destinations.join(', ')}
                      </p>
                      <p className="text-stone-300 italic pt-1">"{inq.message}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 lg:p-10">
            <div className="pb-6 mb-6 border-b border-stone-200/80">
              <h3 className="font-display text-2xl font-bold text-stone-950">
                Visitor Inquiry &amp; Trip Consultation Form
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Complete the form below to receive a customized Surigao del Sur itinerary, boat charter quote, or LGU coordination guide.
              </p>
            </div>

            {justSubmittedRef && (
              <div
                role="status"
                className="mb-6 p-4 rounded-xl bg-teal-50 border border-teal-800/30 text-teal-950 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <p className="font-semibold text-sm text-teal-950">
                      Salamat Karajaw! Your Inquiry Has Been Logged ({justSubmittedRef})
                    </p>
                    <p className="text-teal-900 mt-0.5">
                      Our Surigao del Sur tourism desk has recorded your selected destinations and travel preferences. You can submit another question below at any time.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setJustSubmittedRef(null)}
                  className="text-xs font-semibold text-teal-800 hover:underline shrink-0 cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            )}

            {errorMessage && (
              <div
                role="alert"
                className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-300 text-xs font-medium text-red-900"
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inquiry-name"
                    className="block text-xs font-semibold text-stone-800 mb-1.5"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Maria Clara Santos"
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:bg-white focus:border-teal-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-email"
                    className="block text-xs font-semibold text-stone-800 mb-1.5"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., maria.santos@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:bg-white focus:border-teal-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="inquiry-phone"
                    className="block text-xs font-semibold text-stone-800 mb-1.5"
                  >
                    Mobile / WhatsApp (Optional)
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+63 917 000 0000"
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:bg-white focus:border-teal-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-date"
                    className="block text-xs font-semibold text-stone-800 mb-1.5"
                  >
                    Target Travel Date
                  </label>
                  <input
                    id="inquiry-date"
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm font-mono-tabular bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:bg-white focus:border-teal-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-pax"
                    className="block text-xs font-semibold text-stone-800 mb-1.5"
                  >
                    Group Size (Pax)
                  </label>
                  <input
                    id="inquiry-pax"
                    type="number"
                    min={1}
                    max={50}
                    value={groupSize}
                    onChange={(e) => setGroupSize(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 text-sm font-mono-tabular bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:bg-white focus:border-teal-800 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="inquiry-type"
                  className="block text-xs font-semibold text-stone-800 mb-1.5"
                >
                  Inquiry Topic
                </label>
                <select
                  id="inquiry-type"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:bg-white focus:border-teal-800 focus:outline-none"
                >
                  <option value="Custom Itinerary & Guided Tour">
                    Custom Itinerary &amp; Accredited Local Guide Request
                  </option>
                  <option value="Britania & Hinatuan Boat Charter">
                    Britania Islands &amp; Hinatuan Bay Outrigger Boat Reservation
                  </option>
                  <option value="Student / Academic Group Educational Tour">
                    Student / Academic Group Educational Field Trip
                  </option>
                  <option value="Accommodation & Van Transfer Package">
                    Accommodation &amp; Butuan/Davao Van Transfer Package
                  </option>
                  <option value="General Tourism Information">
                    General Surigao del Sur Tourism Question
                  </option>
                </select>
              </div>

              <div>
                <span className="block text-xs font-semibold text-stone-800 mb-2">
                  Destinations of Interest (Select any of the 5 Surigao del Sur spots):
                </span>
                <div className="flex flex-wrap gap-2">
                  {DESTINATIONS.map((dest) => {
                    const isChecked = selectedDestinationIds.includes(dest.id);
                    return (
                      <button
                        key={dest.id}
                        type="button"
                        onClick={() => onToggleDestination(dest.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                          isChecked
                            ? 'bg-teal-900 text-white border-teal-900'
                            : 'bg-stone-50 text-stone-700 border-stone-300 hover:border-teal-800'
                        }`}
                      >
                        {isChecked ? '✓ ' : '+ '}
                        {dest.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="inquiry-message"
                  className="block text-xs font-semibold text-stone-800 mb-1.5"
                >
                  Your Message or Special Requests <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="inquiry-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us your arrival airport (Butuan, Davao, or Tandag), preferred pace, or questions about entrance fees and tide schedules..."
                  className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:bg-white focus:border-teal-800 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-stone-500">
                  Response time: Within 24 hours from DOT-accredited Surigao del Sur coordinators.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-teal-900 rounded-lg hover:bg-teal-800 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Visitor Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
