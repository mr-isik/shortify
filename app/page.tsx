import LinkForm from "@/components/forms/LinkForm";
import Shorten from "@/components/shared/Shorten";

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-7xl font-bold leading-relaxed">Shortify</h1>
      <p className="text-gray-200 text-xl leading-relaxed text-center mb-12">
        Fast and simple website to create short urls. <br /> Easy to remember
        and share.
      </p>
      <div className="flex flex-col w-[600px] items-stretch gap-8">
        <LinkForm />
        <Shorten />
      </div>
    </div>
  );
};

export default Home;
