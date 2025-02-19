import SectionHeading from "../../components/SectionHeading";

export default function HowItWorks() {
  const steps = [
    {
      title: "Report a Lost Item",
      description:
        "Submit details about the lost item, including location and description.",
      icon: "🔍",
    },
    {
      title: "Report a Found Item",
      description:
        "If you found something, add it to the platform to help reunite it with its owner.",
      icon: "📢",
    },
    {
      title: "Connect with the Finder/Owner",
      description:
        "Communicate securely with the person who lost or found the item.",
      icon: "🤝",
    },
    {
      title: "Retrieve Your Item",
      description:
        "Arrange a safe and verified handover to get your lost item back.",
      icon: "🎉",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-16 pb-24 z-20  dark:text-white/80">
      <SectionHeading>How It Works</SectionHeading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 border rounded-md  shadow-sm hover:shadow-md  cursor-pointer dark:border-gray-700/70 dark:shadow-gray-900 md:text-left text-center"
          >
            <div className="text-4xl text-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-500 mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
