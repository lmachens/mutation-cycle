import Image from "next/image";

type MutationCycle = {
  content: Array<{
    expedition: string;
    mutations: Array<string>;
  }>;
  imageSrc: string;
  timestamp: number;
};

export default async function Home() {
  const mutationCycle = (await fetch(
    "https://discord-bot.th.gl/api/mutation-cycle",
    { cache: "no-store" }
  ).then((res) => res.json())) as MutationCycle;

  return (
    <main className="flex flex-col gap-4 container grow">
      <div className="space-y-2 md:space-y-8 text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Your New World Mutation Tracker
        </h1>
        <p className="text-gray-300 text-sm">
          Explore the ever-changing challenges of New World expeditions with our
          Mutation Tracker. Stay ahead of the game by discovering the latest
          mutated expeditions, each with unique modifiers that intensify the
          experience for daring adventurers. Uncover the secrets of each
          mutation cycle and reap the rewards that come with conquering these
          enhanced challenges. Whether you seek glory, riches, or simply the
          thrill of the unknown, our comprehensive guide will keep you informed
          about the mutated expeditions, their specific mutations, and the
          lucrative rewards that await those who triumph.
        </p>
      </div>
      <div className="mx-auto">
        {mutationCycle.content.map((x) => (
          <p key={x.expedition}>
            <b>{x.expedition}</b> - <span>{x.mutations.join(", ")}</span>
          </p>
        ))}
      </div>
      <Image
        src={mutationCycle.imageSrc}
        alt="Mutation Cycle"
        width={900}
        height={600}
        className="mx-auto"
      />
      <p className="text-center text-gray-300">
        Updated at {new Date(mutationCycle.timestamp).toLocaleDateString()}
      </p>
    </main>
  );
}
