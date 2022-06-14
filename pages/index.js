import Head from 'next/head';
import Image from 'next/image';
import { LayoutMain } from '../components';
import { Logo } from '../constants/images';

export default function Home() {
  return (
    <LayoutMain>
      <div className=" landing-container">
        <div className="landing">
          <div className="landing-content">
            <h1 className="">Solutions Beyond Technology</h1>
            <p>
              For athletes, high altitude produces two contradictory effects on
              performance. For explosive events (sprints up to 400 metres long
              jump triple jump) the reduction in atmospheric pressure means
              there is less resistance from the atmosphere and the athletes
              performance will generally be better at high altitude.
            </p>
          </div>
          <div className="landing-logo">
            <img className="" src={Logo.src} alt="bz-logo" />
          </div>
        </div>
      </div>
    </LayoutMain>
  );
}
