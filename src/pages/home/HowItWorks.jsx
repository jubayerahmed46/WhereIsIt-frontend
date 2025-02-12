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
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">How It Works</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 border rounded-md  shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl text-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
