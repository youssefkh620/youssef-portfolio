import { useForm, ValidationError } from "@formspree/react";
// استيراد الأيقونات اللازمة للتصميم الجديد
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  const [state, handleSubmit] = useForm("xdenanwa");

  if (state.succeeded) {
    return (
      // تم تغيير الخلفية هنا أيضاً لتناسق التصميم
      <section className="min-h-screen flex items-center justify-center bg-[#030712]">
        <p className="text-xl font-semibold text-[#22D3EE]">
          Thanks for joining!
        </p>
      </section>
    );
  }

  return (
    // الخلفية الداكنة الأساسية وتغيير نوع الخط العام إلى Sans ليتناسب مع الصورة
    <section className="min-h-screen bg-[#030712] text-white px-6 py-20 font-sans">
      {/* تم إزالة الهيدر العلوي الكبير لأنه غير موجود في الصورة المطلوبة */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* ===================== القسم الأيسر: REACH OUT ===================== */}
        <div>
          {/* عنوان القسم بخط Monospace وتباعد أحرف كبير */}
          <h2 className="text-[#22D3EE] font-mono text-sm tracking-widest mb-10">
            REACH OUT
          </h2>

          <div className="space-y-4">
            {/* بطاقة الإيميل */}
            <ContactMethodCard
              icon={<FaEnvelope />}
              label="EMAIL"
              value="youssef@example.com"
            />
            {/* بطاقة جيت هاب */}
            <ContactMethodCard
              icon={<FaGithub />}
              label="GITHUB"
              value="github.com/youssef"
            />
            {/* بطاقة لينكد إن */}
            <ContactMethodCard
              icon={<FaLinkedin />}
              label="LINKEDIN"
              value="linkedin.com/in/youssef"
            />
          </div>
        </div>

        {/* ===================== القسم الأيمن: Form ===================== */}
        <div>
          {/* عنوان القسم بخط Monospace وتباعد أحرف كبير */}
          <h2 className="text-[#22D3EE] font-mono text-sm tracking-widest mb-10">
            SEND A MESSAGE
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-mono text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Youssef Khaled" // Placeholder من الصورة
                className="w-full rounded-lg bg-[#111827] px-5 py-4 outline-none text-white placeholder:text-gray-600 focus:ring-1 focus:ring-[#22D3EE]"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-mono text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="youssef@example.com" // Placeholder من الصورة
                className="w-full rounded-lg bg-[#111827] px-5 py-4 outline-none text-white placeholder:text-gray-600 focus:ring-1 focus:ring-[#22D3EE]"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-mono text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="6"
                placeholder="Tell me about your project..." // Placeholder من الصورة
                className="w-full resize-none rounded-lg bg-[#111827] px-5 py-4 outline-none text-white placeholder:text-gray-600 focus:ring-1 focus:ring-[#22D3EE]"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit Button - تم تعديل التصميم بالكامل ليطابق الصورة */}
            <div className="flex justify-start pt-2">
              <button
                type="submit"
                disabled={state.submitting}
                className="flex items-center gap-3 rounded-full bg-[#22D3EE] px-8 py-3.5 font-semibold text-black transition hover:bg-[#67e8f9] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <FaArrowRight className="text-sm" />
              </button>
            </div>

            {/* Error Message */}
            {state.errors && (
              <p className="text-red-400 text-sm mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// مكون فرعي جديد لبطاقات الاتصال في الجهة اليسرى
function ContactMethodCard({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-[#111827] p-5 border border-transparent hover:border-gray-800 transition-all cursor-pointer group">
      <div className="flex items-center gap-5">
        {/* حاوية الأيقونة */}
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1f2937] text-[#22D3EE] text-xl">
          {icon}
        </div>
        {/* النصوص */}
        <div>
          <p className="text-xs font-mono text-gray-500 tracking-wider">
            {label}
          </p>
          <p className="text-white font-medium mt-0.5">{value}</p>
        </div>
      </div>
      {/* السهم جهة اليمين */}
      <FaArrowRight className="text-gray-600 group-hover:text-[#22D3EE] transition-colors" />
    </div>
  );
}
