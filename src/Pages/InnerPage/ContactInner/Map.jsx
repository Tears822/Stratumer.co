const Map = () => {
  return (
    <section>
      <div className="relative">
        <iframe
          src="https://maps.google.com/maps?q=257+Thayer+St,+Millville,+Massachusetts,+01529&t=&z=15&ie=UTF8&iwloc=&output=embed"
          title="257 Thayer St, Millville, Massachusetts, 01529"
          width="100%"
          height="552"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg w-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
