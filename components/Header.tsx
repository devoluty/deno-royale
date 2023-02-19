export default function Header() {
  return (
    <nav class="flex justify-between items-center py-[3%] mx-[5%] dm-mono">
      <div class="flex justify-start items-center">
        <a
          class="text-gray-900 font-bold text-lg hover:text-gray-600 mr-6"
          href="/"
        >
          Home
        </a>
        <a
          class="text-gray-900 font-bold text-lg hover:text-gray-600 mr-6"
          href="/compare"
        >
          Compare
        </a>
        <a
          class="text-gray-900 font-bold text-lg hover:text-gray-600 mr-6"
          href="/about"
        >
          About
        </a>
        <a
          class="text-red-900 font-bold text-lg hover:text-gray-600"
          href="/next"
        >
          Next features
        </a>
      </div>
      <div class="flex justify-end items-center">
        <a href="https://github.com/devoluty/deno-royale">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FGitHub_logo.png&f=1&nofb=1&ipt=657d3a1c8cdd5ff75caf9b9946442a49de7fed9b8b51593f71146a61cc4161a9&ipo=images"
            alt="github"
            width="30px"
            class="ml-4"
          />
        </a>
      </div>
    </nav>
  );
}
