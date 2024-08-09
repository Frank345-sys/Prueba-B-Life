import { providers } from "../utils/variables";

function Providers() {
  return (
    <section className="providers section">
      <div className="providers__content">
        <h2 className="providers__title">
          What <span className="color_5E1EE5">we</span> provide?
        </h2>
        <div className="providers__content-devices">
          {providers.map((provider, index) => (
            <div className="providers__device" key={index}>
              <div className="providers__image">
                <img src={provider.image} />
              </div>
              <p className="providers__type-of-device">
                {provider.typeOfDevice}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Providers;
