import { lusitana } from './fonts';

export default function DevNexusLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">DevNexus</p>
    </div>
  );
}
