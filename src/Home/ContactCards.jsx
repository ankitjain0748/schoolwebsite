import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const contactData = [
    {
        title: "Our Address",
        icon: <FaMapMarkerAlt size={22} />,
        content: "123 Learning Lane, Sunshine District Cityville, ST 45678"
    },
    {
        title: "Phone",
        icon: <FaPhoneAlt size={22} />,
        content: "(555) 123-4567",
    },
    {
        title: "Email",
        icon: <FaEnvelope size={22} />,
        content: "admissions@tagoreacademy.edu",
    }

];

export default function ContactCards() {
    return (
        <div className="bg-[#f5f3ef] ">
            <div className="max-w-5xl mx-auto">

                {/* Cards */}
                <div className="space-y-6">
                    {contactData?.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start text-left gap-4 bg-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                        >
                            {/* Icon */}
                            <div className="text-[#eea02b] text-xl mt-1 shrink-0">
                                {item.icon}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    {item.title}
                                </h3>
                                <div className="text-gray-600 text-sm leading-relaxed">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map */}
                <div className="mt-10 w-full ">
                    <iframe
                        className="w-full h-full rounded-xl shadow-sm"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.282184719308!2d75.8161187!3d26.9132931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2f017e659cf%3A0x823c9d80ce6b3b68!2sSurajpole%20Gate%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1721298823921!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        title="Google Map"
                    />
                </div>

            </div>
        </div>
    );
}