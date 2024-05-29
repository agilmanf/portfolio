export default function Maintenance() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen -mt-10 px-8">
      <img
        className="max-w-lg"
        src="/images/maintenance.svg"
        alt="Under Maintenance"
      />
      <div className="text-white text-center mt-4 space-y-4 max-w-5xl">
        <h1 className="font-opensans font-semibold text-4xl">
          🔧 Website Under Maintenance 🔧
        </h1>
        <p className="text-xl">
          We're currently sprucing up our website to serve you better. Apologies
          for any inconvenience, and we'll be back online shortly with exciting
          updates! Thank you for your patience.
        </p>
      </div>
    </main>
  );
}
