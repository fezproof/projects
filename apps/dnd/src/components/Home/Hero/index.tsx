import heroImage from '../../../images/hero2.jpg';

const Hero = () => (
  <div class="h-hero relative bg-gradient-to-b from-lightBlue-400 to-gray-100 py-16">
    <div
      class="absolute top-0 left-0 right-0 bottom-1 bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 80%, rgba(245, 245, 244)), url('${heroImage}')`,
      }}
    />
    <div class="absolute bottom-10 px-4 text-center md:text-left">
      <h1 class="text-6xl font-serif tracking-tight font-extrabold text-gray-800">
        The Lands of Asalon
      </h1>
    </div>
  </div>
);

export default Hero;
