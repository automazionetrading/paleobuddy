import ThemeSwitcher from '@/components/ThemeSwitcher';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex-col content-center text-center">
        <div className="header">
          <h1 className="text-5xl">PALEO MEAL BUDDY</h1>
        </div>
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default Home;
